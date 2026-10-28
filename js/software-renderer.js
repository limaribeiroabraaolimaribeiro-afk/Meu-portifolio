import * as THREE from "three";
/* Canvas fallback for devices where WebGL is unavailable. It projects the same
   geometry, rather than substituting an empty page or blocking the visitor. */
export class SoftwareRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d", { alpha: true });
    if (!this.context) throw new Error("Canvas unavailable");
    this.capabilities = { getMaxAnisotropy: () => 1 };
    this.pixelRatio = 1;
    this.mvp = new THREE.Matrix4();
    this.normalMatrix = new THREE.Matrix3();
    this.vector = new THREE.Vector3();
    this.normal = new THREE.Vector3();
    this.light = new THREE.Vector3(-0.5, 0.8, 0.9).normalize();
    this.half = new THREE.Vector3(-0.2, 0.4, 1).normalize();
  }
  setPixelRatio(r) {
    this.pixelRatio = Math.min(r, 1.25);
  }
  setSize(w, h) {
    this.width = w;
    this.height = h;
    this.canvas.width = Math.round(w * this.pixelRatio);
    this.canvas.height = Math.round(h * this.pixelRatio);
  }
  render(scene, camera) {
    const ctx = this.context,
      w = this.width,
      h = this.height,
      r = this.pixelRatio;
    ctx.setTransform(r, 0, 0, r, 0, 0);
    ctx.clearRect(0, 0, w, h);
    scene.updateMatrixWorld();
    camera.updateMatrixWorld();
    camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
    const faces = [];
    const cameraMatrix = new THREE.Matrix4().multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse,
    );
    const emitMesh = (mesh, modelMatrix, tint = null) => {
      if (!mesh.isMesh || mesh.userData.skipSoftware) return;
      const mat = mesh.material;
      if (!mat || mat.opacity < 0.005) return;
      const geometry = mesh.geometry,
        pos = geometry.attributes.position,
        uv = geometry.attributes.uv,
        normals = geometry.attributes.normal,
        index = geometry.index;
      if (!pos) return;
      this.mvp.multiplyMatrices(cameraMatrix, modelMatrix);
      this.normalMatrix.getNormalMatrix(modelMatrix);
      const points = [];
      for (let i = 0; i < pos.count; i++) {
        this.vector.fromBufferAttribute(pos, i).applyMatrix4(this.mvp);
        points.push({
          x: (this.vector.x * 0.5 + 0.5) * w,
          y: (-0.5 * this.vector.y + 0.5) * h,
          z: this.vector.z,
        });
      }
      const count = index ? index.count : pos.count;
      for (let i = 0; i < count; i += 3) {
        const ia = index ? index.getX(i) : i,
          ib = index ? index.getX(i + 1) : i + 1,
          ic = index ? index.getX(i + 2) : i + 2;
        const a = points[ia],
          b = points[ib],
          c = points[ic];
        if (a.z > 1 || a.z < -1 || b.z > 1 || c.z > 1) continue;
        const area = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
        if (mat.side !== THREE.DoubleSide && area >= 0) continue;
        if (
          Math.max(a.x, b.x, c.x) < 0 ||
          Math.min(a.x, b.x, c.x) > w ||
          Math.max(a.y, b.y, c.y) < 0 ||
          Math.min(a.y, b.y, c.y) > h
        )
          continue;
        let shade = 1,
          spec = 0,
          rim = 0;
        if (!mat.isMeshBasicMaterial && normals) {
          this.normal
            .set(
              normals.getX(ia) + normals.getX(ib) + normals.getX(ic),
              normals.getY(ia) + normals.getY(ib) + normals.getY(ic),
              normals.getZ(ia) + normals.getZ(ib) + normals.getZ(ic),
            )
            .applyMatrix3(this.normalMatrix)
            .normalize();
          shade = 0.26 + Math.max(0, this.normal.dot(this.light)) * 0.9;
          spec = Math.pow(Math.max(0, this.normal.dot(this.half)), 24) * 0.05;
          rim = Math.pow(1 - Math.abs(this.normal.z), 4) * 0.035;
        }
        const color = mat.color.clone();
        if (tint) color.multiply(tint);
        color.convertLinearToSRGB();
        const rgb = [color.r, color.g, color.b].map((v, j) =>
          Math.round(
            Math.min(
              1,
              v * shade +
                spec * (j === 0 ? 1 : j === 1 ? 0.82 : 0.63) +
                rim * (j === 0 ? 0.9 : j === 1 ? 0.36 : 0.16),
            ) * 255,
          ),
        );
        let tex = null;
        if (mat.map?.image && uv) {
          const img = mat.map.image;
          tex = {
            img,
            uv: [ia, ib, ic].map((k) => ({
              x: uv.getX(k) * img.width,
              y: (1 - uv.getY(k)) * img.height,
            })),
          };
        }
        let quad = null;
        if (!tex && geometry.type === "BoxGeometry" && index && i % 6 === 0) {
          const ids = [
            ...new Set(Array.from({ length: 6 }, (_, k) => index.getX(i + k))),
          ];
          quad = ids.map((k) => points[k]);
          const mx = quad.reduce((sum, p) => sum + p.x, 0) / 4;
          const my = quad.reduce((sum, p) => sum + p.y, 0) / 4;
          quad.sort(
            (p, q) =>
              Math.atan2(p.y - my, p.x - mx) - Math.atan2(q.y - my, q.x - mx),
          );
          i += 3;
        }
        faces.push({
          a,
          b,
          c,
          z: quad
            ? quad.reduce((sum, p) => sum + p.z, 0) / 4
            : (a.z + b.z + c.z) / 3,
          color: `rgb(${rgb.join(",")})`,
          alpha: mat.opacity,
          order: mesh.renderOrder,
          tex,
          quad,
        });
      }
    };
    const instanceMatrix = new THREE.Matrix4(),
      modelMatrix = new THREE.Matrix4(),
      tint = new THREE.Color();
    scene.traverseVisible((mesh) => {
      if (!mesh.isMesh || mesh.userData.skipSoftware) return;
      if (mesh.isInstancedMesh) {
        for (let i = 0; i < mesh.count; i++) {
          mesh.getMatrixAt(i, instanceMatrix);
          modelMatrix.multiplyMatrices(mesh.matrixWorld, instanceMatrix);
          if (mesh.instanceColor) mesh.getColorAt(i, tint);
          emitMesh(mesh, modelMatrix, mesh.instanceColor ? tint : null);
        }
      } else emitMesh(mesh, mesh.matrixWorld);
    });
    faces.sort((a, b) => a.order - b.order || b.z - a.z);
    for (const f of faces) {
      ctx.globalAlpha = f.alpha;
      if (f.tex) {
        this.drawTexture(f);
        continue;
      }
      ctx.fillStyle = f.color;
      ctx.strokeStyle = f.color;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      const polygon = f.quad || [f.a, f.b, f.c];
      ctx.moveTo(polygon[0].x, polygon[0].y);
      for (const p of polygon.slice(1)) ctx.lineTo(p.x, p.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  drawTexture(f) {
    const ctx = this.context,
      [s0, s1, s2] = f.tex.uv,
      [d0, d1, d2] = [f.a, f.b, f.c];
    const det =
      s0.x * (s1.y - s2.y) + s1.x * (s2.y - s0.y) + s2.x * (s0.y - s1.y);
    if (Math.abs(det) < 0.001) return;
    const a =
      (d0.x * (s1.y - s2.y) + d1.x * (s2.y - s0.y) + d2.x * (s0.y - s1.y)) /
      det;
    const b =
      (d0.y * (s1.y - s2.y) + d1.y * (s2.y - s0.y) + d2.y * (s0.y - s1.y)) /
      det;
    const c =
      (d0.x * (s2.x - s1.x) + d1.x * (s0.x - s2.x) + d2.x * (s1.x - s0.x)) /
      det;
    const d =
      (d0.y * (s2.x - s1.x) + d1.y * (s0.x - s2.x) + d2.y * (s1.x - s0.x)) /
      det;
    const e =
      (d0.x * (s1.x * s2.y - s2.x * s1.y) +
        d1.x * (s2.x * s0.y - s0.x * s2.y) +
        d2.x * (s0.x * s1.y - s1.x * s0.y)) /
      det;
    const g =
      (d0.y * (s1.x * s2.y - s2.x * s1.y) +
        d1.y * (s2.x * s0.y - s0.x * s2.y) +
        d2.y * (s0.x * s1.y - s1.x * s0.y)) /
      det;
    ctx.save();
    ctx.beginPath();
    const mx = (d0.x + d1.x + d2.x) / 3,
      my = (d0.y + d1.y + d2.y) / 3;
    const expand = (p) => {
      const dx = p.x - mx,
        dy = p.y - my,
        l = Math.hypot(dx, dy) || 1;
      return [p.x + (dx / l) * 0.7, p.y + (dy / l) * 0.7];
    };
    ctx.moveTo(...expand(d0));
    ctx.lineTo(...expand(d1));
    ctx.lineTo(...expand(d2));
    ctx.closePath();
    ctx.clip();
    ctx.transform(a, b, c, d, e, g);
    ctx.drawImage(f.tex.img, 0, 0);
    ctx.restore();
  }
}
