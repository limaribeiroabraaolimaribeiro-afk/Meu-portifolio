import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { SoftwareRenderer } from "./software-renderer.js";
import { createDirector } from "./animations/director.js";
import {
  createMorphTargets,
  shapeSegment,
  fractureAt,
} from "./three/morph-targets.js";
import { QUALITY, chooseQuality } from "./lib/quality.js";
/* One procedural world. The character changes role instead of adding decorations. */
const root = document.documentElement;
if (!root.classList.contains("reduced-motion")) init();
function init() {
  const stage = document.getElementById("sceneStage");
  let canvas = document.getElementById("sceneCanvas"),
    renderer,
    software = false,
    quality = chooseQuality(),
    q = QUALITY[quality],
    mobile = innerWidth <= 700;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: quality !== "low",
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
  } catch {
    software = true;
    const replacement = canvas.cloneNode();
    canvas.replaceWith(replacement);
    canvas = replacement;
    try {
      renderer = new SoftwareRenderer(canvas);
    } catch {
      dispatchEvent(new Event("portfolio:graphics-fallback"));
      return;
    }
  }
  root.dataset.renderer = software ? "canvas" : "webgl";
  const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100),
    geometries = new Set(),
    materials = new Set(),
    textures = new Set();
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  geometries.add(boxGeometry);
  const roundedGeometry = software
    ? boxGeometry
    : new RoundedBoxGeometry(1, 1, 1, 2, 0.045);
  geometries.add(roundedGeometry);
  function mat(options = {}, basic = false) {
    const m = basic
      ? new THREE.MeshBasicMaterial(options)
      : new THREE.MeshStandardMaterial({
          roughness: 0.7,
          metalness: 0.08,
          ...options,
        });
    materials.add(m);
    return m;
  }
  const orange = mat({ color: "#ff7a00", roughness: 0.38, metalness: 0.12 }),
    black = mat({ color: "#272623", roughness: 0.85 }),
    white = mat({ color: "#f4f0e8", roughness: 0.72 }),
    dark = mat({ color: "#111111", roughness: 0.6 }),
    pathMat = mat({ color: "#ff7a00", toneMapped: false }, true),
    wireMat = mat(
      { color: "#ff9b35", transparent: true, opacity: 0.6, toneMapped: false },
      true,
    );
  function box(w, h, d, material, parent = scene, rounded = true) {
    const m = new THREE.Mesh(rounded ? roundedGeometry : boxGeometry, material);
    m.scale.set(w, h, d);
    parent.add(m);
    return m;
  }
  function rod(a, b, width, material, parent = scene) {
    const start = new THREE.Vector3(...a),
      end = new THREE.Vector3(...b),
      delta = end.clone().sub(start);
    const m = box(width, delta.length(), width, material, parent, false);
    m.position.copy(start).add(end).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      delta.normalize(),
    );
    return m;
  }
  if (!software) {
    scene.add(new THREE.HemisphereLight("#fff9ef", "#454038", 2.2));
    const key = new THREE.DirectionalLight("#fff7e8", 4.4);
    key.position.set(-4, 7, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight("#ff9c44", 2.1);
    rim.position.set(5, 4, -4);
    scene.add(rim);
    const fill = new THREE.DirectionalLight("#ffffff", 1.1);
    fill.position.set(3, 2, 7);
    scene.add(fill);
  }
  const actor = new THREE.Group(),
    body = new THREE.Group(),
    face = new THREE.Group(),
    limbs = new THREE.Group();
  scene.add(actor);
  actor.add(body, limbs);
  body.add(face);
  const core = box(1.65, 1.65, 1.65, orange, body);
  const eyeGeo = new THREE.SphereGeometry(
    1,
    software ? 6 : 12,
    software ? 4 : 8,
  );
  geometries.add(eyeGeo);
  for (const x of [-0.34, 0.34]) {
    const eye = new THREE.Mesh(eyeGeo, dark);
    eye.position.set(x, 0.18, 0.836);
    eye.scale.set(0.056, 0.118, 0.033);
    eye.renderOrder = 3;
    face.add(eye);
  }
  const legs = [],
    arms = [];
  for (const sign of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(sign * 0.42, -0.82, 0);
    limbs.add(leg);
    const shin = box(0.18, 0.55, 0.19, black, leg);
    shin.position.y = -0.27;
    const foot = box(0.38, 0.14, 0.55, dark, leg);
    foot.position.set(0, -0.62, 0.13);
    legs.push(leg);
    const arm = new THREE.Group();
    arm.position.set(sign * 0.88, 0.18, 0);
    arm.rotation.z = sign * 0.13;
    limbs.add(arm);
    const sleeve = box(0.18, 0.59, 0.19, black, arm);
    sleeve.position.set(sign * 0.09, -0.32, 0);
    const hand = box(0.25, 0.24, 0.24, orange, arm);
    hand.position.set(sign * 0.09, -0.71, 0.01);
    arms.push(arm);
  }
  const cellMesh = new THREE.InstancedMesh(roundedGeometry, orange, 125);
  cellMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  cellMesh.frustumCulled = false;
  body.add(cellMesh);
  let morphTargets = createMorphTargets(software ? 3 : q.grid);
  cellMesh.count = morphTargets.count;
  const sphereGeo = new THREE.SphereGeometry(
    1.6,
    software ? 10 : 28,
    software ? 7 : 18,
  );
  geometries.add(sphereGeo);
  const sphere = new THREE.Mesh(sphereGeo, orange);
  body.add(sphere);
  sphere.visible = false;
  const cage = new THREE.Group();
  body.add(cage);
  const c = 1.02;
  for (const [a, b] of [
    [
      [-c, -c, -c],
      [c, -c, -c],
    ],
    [
      [-c, c, -c],
      [c, c, -c],
    ],
    [
      [-c, -c, c],
      [c, -c, c],
    ],
    [
      [-c, c, c],
      [c, c, c],
    ],
    [
      [-c, -c, -c],
      [-c, c, -c],
    ],
    [
      [c, -c, -c],
      [c, c, -c],
    ],
    [
      [-c, -c, c],
      [-c, c, c],
    ],
    [
      [c, -c, c],
      [c, c, c],
    ],
    [
      [-c, -c, -c],
      [-c, -c, c],
    ],
    [
      [c, -c, -c],
      [c, -c, c],
    ],
    [
      [-c, c, -c],
      [-c, c, c],
    ],
    [
      [c, c, -c],
      [c, c, c],
    ],
  ])
    rod(a, b, 0.012, wireMat, cage);
  const props = new THREE.Group();
  scene.add(props);
  const blocks = [];
  for (let i = 0; i < 18; i++) {
    const height = 0.35 + (i % 4) * 0.34;
    const m = box(0.68, height, 0.68, i % 3 === 0 ? black : white, props);
    const angle = i * 2.39996 + 0.4,
      r = 2.7 + (i % 3) * 0.5;
    const chaos = new THREE.Vector3(
      Math.cos(angle) * r,
      -1.5 + height / 2,
      Math.sin(angle) * r * 0.65 - 1.6,
    );
    const ordered = new THREE.Vector3(
      [-3.7, -2.5, -1.3, 1.3, 2.5, 3.7][i % 6],
      -1.5 + height / 2,
      -3.8 + Math.floor(i / 6) * 1.25,
    );
    blocks.push({ mesh: m, chaos, ordered, angle: ((i % 5) - 2) * 0.18 });
  }
  const panel = new THREE.Group();
  scene.add(panel);
  panel.position.set(1.8, 0.2, -3.1);
  panel.rotation.y = -0.17;
  box(3.1, 2.35, 0.12, white, panel);
  const panelCanvas = document.createElement("canvas");
  panelCanvas.width = 640;
  panelCanvas.height = 480;
  function drawPanel() {
    const ctx = panelCanvas.getContext("2d");
    ctx.fillStyle = "#fffdf9";
    ctx.fillRect(0, 0, 640, 480);
    ctx.fillStyle = "#797267";
    ctx.font = "16px Manrope,Arial";
    ctx.fillText("DO CONTEXTO AO CAMINHO", 55, 55);
    ["Ideia.", "Estratégia.", "Código.", "Resultado."].forEach((label, i) => {
      ctx.fillStyle = i === 3 ? "#ff7a00" : "#292723";
      ctx.font = "700 54px Space,Arial";
      ctx.fillText(label, 55, 145 + i * 77);
    });
  }
  drawPanel();
  const panelTexture = new THREE.CanvasTexture(panelCanvas);
  panelTexture.colorSpace = THREE.SRGBColorSpace;
  textures.add(panelTexture);
  const panelGeo = new THREE.PlaneGeometry(2.93, 2.19);
  geometries.add(panelGeo);
  const panelMat = mat({ map: panelTexture, toneMapped: false }, true);
  const panelFace = new THREE.Mesh(panelGeo, panelMat);
  panelFace.position.z = 0.07;
  panelFace.renderOrder = 1;
  panel.position.set(0.9, 0.45, -3.2);
  panel.add(panelFace);
  document.fonts.ready.then(() => {
    drawPanel();
    panelTexture.needsUpdate = true;
  });
  const paths = new THREE.Group();
  scene.add(paths);
  const route = [
    [-5, -1.49, 3],
    [-3.3, -1.49, 2.2],
    [-2, -1.49, 0.9],
    [-0.7, -1.49, 0.35],
    [0.4, -1.49, -0.5],
    [1.1, -1.49, -1.1],
    [2.3, -1.49, -1.7],
    [3.1, -1.49, -2.6],
  ];
  const pathCurve = new THREE.CatmullRomCurve3(
      route.map((p) => new THREE.Vector3(...p)),
    ),
    pathParts = [];
  if (software) {
    const pts = pathCurve.getPoints(24);
    const glowMat = mat(
      { color: "#ff7a00", transparent: true, opacity: 0.08 },
      true,
    );
    for (let i = 0; i < pts.length - 1; i++) {
      pathParts.push(
        rod(pts[i].toArray(), pts[i + 1].toArray(), 0.045, pathMat, paths),
      );
      rod(pts[i].toArray(), pts[i + 1].toArray(), 0.14, glowMat, paths);
    }
  } else {
    const tube = new THREE.TubeGeometry(pathCurve, 64, 0.025, 6, false);
    geometries.add(tube);
    paths.add(new THREE.Mesh(tube, pathMat));
    const glow = new THREE.TubeGeometry(pathCurve, 48, 0.08, 6, false);
    geometries.add(glow);
    paths.add(
      new THREE.Mesh(
        glow,
        mat(
          {
            color: "#ff7a00",
            transparent: true,
            opacity: 0.07,
            depthWrite: false,
          },
          true,
        ),
      ),
    );
  }
  actor.traverse((m) => {
    if (m.isMesh && m.renderOrder !== 3) m.renderOrder = 2;
  });
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = shadowCanvas.height = 64;
  const sc = shadowCanvas.getContext("2d"),
    grad = sc.createRadialGradient(32, 32, 1, 32, 32, 32);
  grad.addColorStop(0, "#00000060");
  grad.addColorStop(1, "#00000000");
  sc.fillStyle = grad;
  sc.fillRect(0, 0, 64, 64);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  textures.add(shadowTexture);
  const shadowMat = mat(
      { map: shadowTexture, transparent: true, depthWrite: false },
      true,
    ),
    shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
  geometries.add(shadowGeo);
  const shadow = new THREE.Mesh(shadowGeo, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.51;
  shadow.userData.skipSoftware = true;
  scene.add(shadow);
  const network = new THREE.Group();
  scene.add(network);
  const points = [
    [0, 0, 0],
    [-2, 1, -0.5],
    [2, 0.8, -0.1],
    [-1.6, -0.65, 1.2],
    [1.8, -0.65, 1.1],
    [-0.7, 1.5, -1.4],
    [0.6, -0.85, -1.1],
  ];
  points.slice(1).forEach((p, i) => {
    const m = box(0.3, 0.3, 0.3, i % 2 ? white : orange, network);
    m.position.set(...p);
    m.rotation.y = i * 0.5;
  });
  for (const [a, b] of [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 5],
    [2, 5],
    [3, 6],
    [4, 6],
  ])
    rod(points[a], points[b], 0.025, pathMat, network);
  const portal = new THREE.Group();
  scene.add(portal);
  portal.position.set(3.5, 0.1, -3.1);
  portal.rotation.y = -0.12;
  const portalLight = mat({ color: "#fff7df", toneMapped: false }, true);
  box(0.16, 3.8, 0.25, pathMat, portal).position.x = -1.14;
  box(0.16, 3.8, 0.25, pathMat, portal).position.x = 1.14;
  box(2.4, 0.16, 0.25, pathMat, portal).position.y = 1.82;
  const opening = box(2.12, 3.52, 0.04, portalLight, portal, false);
  opening.position.set(0, -0.02, -0.12);
  const sill = box(2.5, 0.1, 1.4, white, portal);
  sill.position.set(0, -1.84, 0.4);
  const director = createDirector(),
    dummy = new THREE.Object3D(),
    target = new THREE.Vector3();
  let width = innerWidth,
    height = innerHeight,
    disposed = false,
    last = 0,
    raf = 0,
    frameCount = 0,
    sampleStart = 0,
    pointerX = 0,
    pointerY = 0;
  function resize() {
    width = innerWidth;
    height = innerHeight;
    mobile = width <= 700;
    quality = chooseQuality();
    q = QUALITY[quality];
    root.dataset.quality = quality;
    renderer.setPixelRatio(
      Math.min(devicePixelRatio || 1, q.dpr, software ? 1.25 : 2),
    );
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    morphTargets = createMorphTargets(software ? 3 : q.grid);
    cellMesh.count = morphTargets.count;
    root.dataset.microcubes = String(cellMesh.count);
    root.dataset.graphicsInitialized = "true";
  }
  resize();
  addEventListener("resize", resize, { passive: true });
  addEventListener("portfolio:quality", resize);
  if (matchMedia("(hover:hover) and (pointer:fine)").matches)
    addEventListener(
      "pointermove",
      (e) => {
        pointerX = (e.clientX / width - 0.5) * 0.15;
        pointerY = (e.clientY / height - 0.5) * 0.08;
      },
      { passive: true },
    );
  function frame(now) {
    if (disposed) return;
    raf = requestAnimationFrame(frame);
    if (document.hidden || root.classList.contains("reduced-motion")) return;
    const interval = 1000 / (software ? 30 : q.fps);
    if (now - last < interval - 0.5) return;
    last = now - ((now - last) % interval);
    const start = performance.now(),
      id = root.dataset.chapter || "inicio",
      progress = Number(root.dataset.chapterProgress || 0),
      s = director.seek(id, progress);
    if (root.dataset.filmVisible === "false") s.opacity = 0;
    stage.style.setProperty("--scene-opacity", String(s.opacity));
    root.dataset.morphShape = s.shape.toFixed(3);
    root.dataset.sceneOrder = s.order.toFixed(3);
    if (s.opacity < 0.001) return;
    if (id === "processo") {
      if (mobile) {
        s.actorScale = 0.45;
        s.mobileX = 0.84;
        s.mobileY = Number(root.dataset.processScreenY || s.mobileY);
      } else {
        s.screenX = Number(root.dataset.processScreenX || s.screenX);
        s.screenY = Number(root.dataset.processScreenY || s.screenY);
      }
    }
    const distance = mobile ? s.mobileDistance : 1;
    camera.position.set(s.cx + pointerX, s.cy + pointerY, s.cz * distance);
    target.set(s.tx, s.ty, s.tz);
    camera.lookAt(target);
    const screenX = mobile ? s.mobileX : s.screenX,
      screenY = mobile ? s.mobileY : s.screenY;
    camera.setViewOffset(
      width,
      height,
      (0.5 - screenX) * width,
      (0.5 - screenY) * height,
      width,
      height,
    );
    camera.updateProjectionMatrix();
    actor.position.set(
      s.actorX,
      s.actorY + Math.abs(Math.sin(s.walk)) * 0.055 * s.walkAmp,
      s.actorZ,
    );
    actor.rotation.y = s.yaw;
    actor.scale.setScalar(s.actorScale);
    body.rotation.z = Math.sin(s.walk) * 0.024 * s.walkAmp;
    const fracture = fractureAt(s.shape),
      sphereWeight = Math.max(0, 1 - Math.abs(s.shape - 2) / 0.34),
      segment = shapeSegment(s.shape),
      a = morphTargets.formations[segment.from],
      b = morphTargets.formations[segment.to];
    core.visible = fracture < 0.8;
    core.scale.setScalar(1.65 * Math.max(0.01, 1 - fracture));
    cellMesh.visible = fracture > 0.005 && sphereWeight < 0.98;
    if (cellMesh.visible) {
      const cellSize =
        (1.65 / morphTargets.n - 0.016) *
        (s.shape > 1.2 && s.shape < 3.7 ? 0.72 : 1);
      for (let i = 0; i < cellMesh.count; i++) {
        dummy.position.set(
          a[i][0] + (b[i][0] - a[i][0]) * segment.weight,
          a[i][1] + (b[i][1] - a[i][1]) * segment.weight,
          a[i][2] + (b[i][2] - a[i][2]) * segment.weight,
        );
        dummy.rotation.set(
          (i % 3) * 0.23 * fracture,
          (i % 5) * 0.3 * fracture,
          (i % 4) * 0.13 * fracture,
        );
        if (s.shape < 0.05 || s.shape > 3.95) dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(cellSize * fracture * (1 - sphereWeight * 0.9));
        dummy.updateMatrix();
        cellMesh.setMatrixAt(i, dummy.matrix);
      }
      cellMesh.instanceMatrix.needsUpdate = true;
    }
    sphere.visible = sphereWeight > 0.01;
    sphere.scale.setScalar(sphereWeight);
    face.scale.setScalar(Math.max(0.001, (1 - fracture) * s.pose));
    limbs.scale.setScalar(Math.max(0.001, (1 - fracture) * s.pose));
    legs.forEach(
      (leg, i) =>
        (leg.rotation.x = Math.sin(s.walk + i * Math.PI) * 0.5 * s.walkAmp),
    );
    arms.forEach(
      (arm, i) =>
        (arm.rotation.x = -Math.sin(s.walk + i * Math.PI) * 0.32 * s.walkAmp),
    );
    cage.visible = s.wire > 0.02;
    cage.scale.setScalar(Math.max(0.01, s.wire));
    props.visible = s.props > 0.02;
    props.scale.setScalar(Math.max(0.01, s.props));
    blocks.forEach((b, i) => {
      b.mesh.visible = i < (software ? 8 : q.blocks);
      b.mesh.position.lerpVectors(b.chaos, b.ordered, s.order);
      b.mesh.rotation.set(
        b.angle * (1 - s.order),
        b.angle * 2 * (1 - s.order),
        b.angle * (1 - s.order),
      );
    });
    panel.visible = s.panel > 0.01 && !mobile;
    panel.scale.setScalar(Math.max(0.01, s.panel));
    paths.visible = s.path > 0.02;
    paths.scale.setScalar(Math.max(0.02, s.path));
    network.visible = s.network > 0.02;
    network.scale.setScalar(Math.max(0.01, s.network));
    portal.visible = s.portal > 0.02;
    portal.scale.setScalar(Math.max(0.01, s.portal));
    shadow.position.x = actor.position.x;
    shadow.position.z = actor.position.z;
    shadow.scale.setScalar(s.actorScale);
    shadowMat.opacity = (1 - fracture * 0.6) * 0.85;
    if (!software) {
      renderer.toneMappingExposure = s.light;
      renderer.render(scene, camera);
      root.dataset.drawCalls = String(renderer.info.render.calls);
      root.dataset.triangles = String(renderer.info.render.triangles);
    } else renderer.render(scene, camera);
    root.dataset.frameMs = String(
      Math.round((performance.now() - start) * 10) / 10,
    );
    if (!stage.classList.contains("is-ready")) {
      stage.classList.add("is-ready");
      root.dataset.sceneReady = "true";
    }
    frameCount++;
    if (!sampleStart) sampleStart = now;
    if (now - sampleStart > 1600) {
      root.dataset.fps = String(
        Math.round(((frameCount * 1000) / (now - sampleStart)) * 10) / 10,
      );
      frameCount = 0;
      sampleStart = now;
    }
  }
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    dispatchEvent(new Event("portfolio:graphics-fallback"));
  });
  addEventListener("pagehide", (e) => {
    if (e.persisted) return;
    disposed = true;
    cancelAnimationFrame(raf);
    removeEventListener("resize", resize);
    removeEventListener("portfolio:quality", resize);
    director.dispose();
    for (const g of geometries) g.dispose();
    for (const m of materials) m.dispose();
    for (const t of textures) t.dispose();
    renderer.dispose?.();
  });
  raf = requestAnimationFrame(frame);
}
