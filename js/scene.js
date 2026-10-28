import { initPortraitMotion } from "./three/portrait-motion.js";
initPortraitMotion();
import { createPremiumShell, applyStudioEnvironment } from "./three/premium-shell.js";
import { createCinematicProblem, cinematicState } from "./three/cinematic-problem.js";
import { createNotebookCinema } from "./three/notebook-cinema.js";
import { createSolutionsCinema } from "./three/solutions-cinema.js";
import { notebookState } from "./three/notebook-state.js";
import { createSceneWindows } from "./three/scene-windows.js";
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
    : new RoundedBoxGeometry(1, 1, 1, 3, 0.0325);
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
  const orange = new THREE.MeshPhysicalMaterial({color:"#e96c0c",roughness:.38,metalness:.48,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),
    black = mat({ color: "#272623", roughness: 0.85 }),
    white = mat({ color: "#f4f0e8", roughness: 0.72 }),
    dark = mat({ color: "#111111", roughness: 0.6 }),
    pathMat = mat({ color: "#ff7a00", toneMapped: false }, true),
    wireMat = mat(
      { color: "#ff9b35", transparent: true, opacity: 0.6, toneMapped: false },
      true,
    );
  materials.add(orange);
  let environment = null;
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
    environment = applyStudioEnvironment(renderer, scene);
    scene.add(new THREE.HemisphereLight("#fff4e5", "#5d4937", 1.4));
    const key = new THREE.DirectionalLight("#fff6e8", 2.5);
    key.position.set(-4, 7, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight("#ff9c44", .45);
    rim.position.set(5, 4, -4);
    scene.add(rim);
    const fill = new THREE.DirectionalLight("#ffffff", .5);
    fill.position.set(3, 2, 7);
    scene.add(fill);
  }
  const actor = new THREE.Group(), body = new THREE.Group();
  scene.add(actor);actor.add(body);
  const premium = createPremiumShell({size:1.65,software,orange});
  body.add(premium.group);
  root.dataset.cubeDesign = "premium-modular";
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
    const angle = i * 2.39996 + 0.4;
    const chaos = new THREE.Vector3(
      Math.sign(Math.cos(angle)) * (2 + Math.abs(Math.cos(angle)) * .9),
      -1.5 + height / 2,
      -2.2 - Math.abs(Math.sin(angle)) * 1.2,
    );
    const ordered = new THREE.Vector3(
      [-3.7, -2.5, -1.3, 1.3, 2.5, 3.7][i % 6],
      -1.5 + height / 2,
      -3.8 + Math.floor(i / 6) * 1.25,
    );
    blocks.push({ mesh: m, height, chaos, ordered, angle: ((i % 5) - 2) * 0.18 });
  }
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
    if (m.isMesh) m.renderOrder = Math.max(2,m.renderOrder);
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
  const windows = createSceneWindows(stage);
  let width = 0,
    height = 0,
    disposed = false,
    last = 0,
    raf = 0,
    frameCount = 0,
    sampleStart = 0,
    pointerX = 0,
    pointerY = 0;
  function resize() {
    mobile = innerWidth <= 700;
    windows.invalidate();
    width = height = 0;
    quality = chooseQuality();
    q = QUALITY[quality];
    root.dataset.quality = quality;
    renderer.setPixelRatio(
      Math.min(devicePixelRatio || 1, q.dpr, software ? 1.25 : 2),
    );

    morphTargets = createMorphTargets(software ? 3 : q.grid);
    cellMesh.count = morphTargets.count;
    root.dataset.microcubes = String(cellMesh.count);
    root.dataset.graphicsInitialized = "true";
  }
  const cinema = createCinematicProblem({scene,software,quality});
  const notebook = createNotebookCinema({scene,software,quality});
  const solutions = createSolutionsCinema({scene,software,quality});
  resize();
  addEventListener("resize", resize, { passive: true });
  addEventListener("portfolio:quality", resize);
  if (matchMedia("(hover:hover) and (pointer:fine)").matches)
    addEventListener(
      "pointermove",
      (e) => {
        pointerX = (e.clientX / innerWidth - 0.5) * 0.10;
        pointerY = (e.clientY / innerHeight - 0.5) * 0.05;
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
    const view = windows.read();
    if (!view) {root.dataset.cinemaImmersive="false";return;}
    root.dataset.cinemaImmersive=String(view.id === "problema" && view.rect.top<=2 && view.rect.bottom>Math.min(innerHeight*.45,300));
    if (width !== view.width || height !== view.height) {
      width = view.width; height = view.height;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
    }
    const start = performance.now(), id = view.id, progress = view.progress,
      s = director.seek(id, progress), aspect = width / height;
    stage.style.setProperty("--scene-opacity", "1");
    root.dataset.morphShape = s.shape.toFixed(3);
    root.dataset.sceneOrder = s.order.toFixed(3);
    camera.clearViewOffset();
    target.set(0, -.3, 0);
    let worldHeight = Math.max(4, 4.4 / aspect);
    if (id === "transformacao") {target.y = .25; worldHeight = Math.max(4.5, 6.8 / aspect);}
    if (id === "inteligencia") worldHeight = Math.max(4.5, 5.7 / aspect);
    if (id === "contato") {target.set(1.15,-.2,-1.1); worldHeight = Math.max(5.3,8.5/aspect);}
    if (id === "processo") {
      s.actorScale = 1;
      worldHeight = mobile ? 2.9 / aspect : 3.25;
      const nodes = [...document.querySelectorAll('.process-node')],
        first = nodes[0].getBoundingClientRect(), end = nodes.at(-1).getBoundingClientRect(),
        t = Math.max(0,Math.min(1,(progress-.1)/.8));
      const x = mobile ? .5 : (first.x + first.width/2 + (end.x-first.x)*t - view.rect.left)/width;
      const y = mobile ? Math.max(.1,Math.min(.85,(first.y + first.height/2 + (end.y-first.y)*t - view.rect.top)/height)) : .48;
      camera.setViewOffset(width,height,(.5-x)*width,(.5-y)*height,width,height);
    }
    const distance = worldHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
    camera.position.set(s.cx + pointerX, s.cy + pointerY, s.cz).sub(target).normalize().multiplyScalar(distance).add(target);
    const filmState=cinematicState(progress);
    cinema.group.visible=id === "problema";
    notebook.group.visible=id === "projetos";
    solutions.group.visible=id === "solucoes";
    if(id === "problema") {
      const fit=Math.max(6.4,5.8/aspect)*filmState.zoom;
      const d=fit/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
      target.set(...filmState.focus);
      const angle=.52+progress*.30;
      camera.position.set(Math.sin(angle)*.77,.78,Math.cos(angle)*.90).normalize().multiplyScalar(d).add(target);
    }
    if(id === "projetos") {
      const shot=notebookState(progress);
      const fit=Math.max(7.0,6.3/aspect)*(1-shot.cameraDock*.16);
      const d=fit/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
      target.set(0,1.10-shot.cameraDock*.60,.18);
      camera.position.set(.18-shot.cameraDock*.13,.20+Math.sin(shot.local*Math.PI)*.035,1).normalize().multiplyScalar(d).add(target);
    }
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    actor.position.set(
      s.actorX,
      s.actorY + (id === "inicio" ? Math.sin(now*.0008)*.018 : 0),
      s.actorZ,
    );
    actor.rotation.y = s.yaw + (id === "inicio" ? Math.sin(now*.0007)*.075 : 0);
    actor.scale.setScalar(s.actorScale);
    if(id === "problema") {
      const state=cinema.update(progress,now,camera);
      actor.position.set(...state.actor);actor.position.y+=.30;
      actor.scale.setScalar(.45);actor.rotation.set(0,state.yaw,0);
    }else actor.rotation.x=0;
    body.rotation.z = 0;
    const fracture = fractureAt(s.shape),
      sphereWeight = Math.max(0, 1 - Math.abs(s.shape - 2) / 0.34),
      segment = shapeSegment(s.shape),
      a = morphTargets.formations[segment.from],
      b = morphTargets.formations[segment.to];
    premium.update({fracture,spread:id === "problema" && filmState.blocked ? .20 : id === "diagnostico" ? Math.sin(progress*Math.PI)**2*.45 : 0});
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
    cage.visible = s.wire > 0.02;
    cage.scale.setScalar(Math.max(0.01, s.wire));
    props.visible = s.props > 0.02 && id !== "inicio" && id !== "problema";
    props.scale.setScalar(Math.max(0.01, s.props));
    blocks.forEach((b, i) => {
      b.mesh.visible = i < (id === "inicio" ? 3 : software ? 8 : q.blocks);
      b.mesh.scale.set(.68,b.height,.68);
      b.mesh.position.lerpVectors(b.chaos, b.ordered, s.order);
      if (id === "inicio" && i < 3) {
        const slots = [[-2.05,-1.25,-.75],[1.9,-1.3,-1.6],[.6,-1.38,-3.2]];
        b.mesh.position.set(...slots[i]); b.mesh.scale.set(.64,i === 0 ? .48 : .34,.64);
      }
      b.mesh.rotation.set(
        b.angle * (1 - s.order),
        b.angle * 2 * (1 - s.order),
        b.angle * (1 - s.order),
      );
    });
    paths.visible = s.path > 0.02 && id !== "processo" && id !== "problema";
    paths.scale.setScalar(Math.max(0.02, s.path));
    network.visible = s.network > 0.02;
    network.scale.setScalar(Math.max(0.01, s.network));
    portal.visible = s.portal > 0.02;
    portal.scale.setScalar(Math.max(0.01, s.portal));
    shadow.visible = id !== "problema";
    shadow.position.x = actor.position.x;
    shadow.position.z = actor.position.z;
    shadow.scale.setScalar(s.actorScale);
    shadowMat.opacity = (1 - fracture * 0.6) * 0.85;
    actor.visible=id !== "projetos" && id !== "solucoes";
    if(id === "projetos") {
      props.visible=paths.visible=network.visible=portal.visible=shadow.visible=false;
      notebook.update(progress,now,camera);
    }
    if(id === "solucoes") {
      props.visible=paths.visible=network.visible=portal.visible=shadow.visible=false;
      solutions.update(progress,now,camera);
    }
    if (!software) {
      renderer.toneMappingExposure = id === "problema" ? .88 : id === "solucoes" ? 1.05 : s.light * .92;
      renderer.render(scene, camera);
      root.dataset.drawCalls = String(renderer.info.render.calls);
      root.dataset.triangles = String(renderer.info.render.triangles);
    } else renderer.render(scene, camera);
    stage.style.visibility = "visible";
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
    windows.dispose();
    director.dispose();
    premium.dispose();
    cinema.dispose();
    notebook.dispose();
    solutions.dispose();
    environment?.dispose();
    for (const g of geometries) g.dispose();
    for (const m of materials) m.dispose();
    for (const t of textures) t.dispose();
    renderer.dispose?.();
  });
  raf = requestAnimationFrame(frame);
}
