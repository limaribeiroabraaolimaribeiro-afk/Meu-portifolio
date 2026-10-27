import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { SoftwareRenderer } from "./software-renderer.js";
import { createDirector } from "./animations/director.js";
import { createScrollState, clamp } from "./lib/scroll-state.js";
import { QUALITY, chooseQuality } from "./lib/quality.js";
import CASES from "../data/cases.json";
/* Procedural matte geometry: no downloaded models, HDRs, particles or audio. */
const root = document.documentElement,
  stage = document.getElementById("sceneStage");
if (!root.classList.contains("reduced-motion")) init();
function init() {
  let canvas = document.getElementById("sceneCanvas"),
    renderer,
    software = false;
  let quality = chooseQuality(),
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
    renderer.toneMappingExposure = 1.15;
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
  root.dataset.quality = quality;
  const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(36, 1, 0.1, 90),
    world = new THREE.Group(),
    devices = new THREE.Group();
  scene.add(world, devices);
  const geometries = new Set(),
    materials = new Set(),
    textures = new Set();
  function material(options) {
    const m = new THREE.MeshStandardMaterial({
      roughness: 0.85,
      metalness: 0.07,
      transparent: true,
      ...options,
    });
    materials.add(m);
    return m;
  }
  function geo(w, h, d, r = 0.035) {
    const g = software
      ? new THREE.BoxGeometry(w, h, d)
      : new RoundedBoxGeometry(w, h, d, q.bevel, r);
    geometries.add(g);
    return g;
  }
  function mesh(g, m, parent = world) {
    const obj = new THREE.Mesh(g, m);
    parent.add(obj);
    return obj;
  }
  const orange = material({ color: "#ff7a00", roughness: 0.8 }),
    black = material({ color: "#2d2c2a", roughness: 0.92 }),
    edge = material({ color: "#454440", roughness: 0.86 }),
    routeMat = material({
      color: "#ff7a00",
      emissive: "#ff7a00",
      emissiveIntensity: 0.12,
    });
  const cube = mesh(geo(1.15, 1.15, 1.15, 0.035), orange);
  const blocks = [];
  let seed = 32;
  function random() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  }
  const chaosPositions = [],
    orderedSlots = [];
  for (let row = 0; row < 6; row++)
    for (const x of [-3.9, -2.6, -1.3, 1.3, 2.6, 3.9])
      orderedSlots.push(new THREE.Vector3(x, -0.38, -5.4 + row * 1.3));
  for (let i = 0; i < 34; i++) {
    let x,
      z,
      tries = 0;
    do {
      x = (random() - 0.5) * 14;
      z = random() * 12 - 8;
      tries++;
    } while (
      tries < 400 &&
      ((Math.abs(x) < 2.15 && z > -4.5 && z < 2.5) ||
        chaosPositions.some((p) => Math.hypot(p.x - x, p.z - z) < 1.55))
    );
    if (tries >= 400) {
      x = orderedSlots[i].x * 1.6;
      z = orderedSlots[i].z * 1.4;
    }
    const height = 0.35 + random() * 0.9;
    const chaos = new THREE.Vector3(x, -0.78 + height / 2, z);
    chaosPositions.push(chaos);
    const b = mesh(geo(0.88, height, 0.88, 0.025), black);
    const rotation = new THREE.Euler(
      (random() - 0.5) * 0.45,
      (random() - 0.5) * 1.2,
      (random() - 0.5) * 0.35,
    );
    blocks.push({
      mesh: b,
      chaos,
      ordered: new THREE.Vector3(
        orderedSlots[i].x,
        -0.78 + height / 2,
        orderedSlots[i].z,
      ),
      rotation,
    });
  }
  const gate = new THREE.Group();
  world.add(gate);
  const gateMat = material({ color: "#343330" });
  const left = mesh(geo(0.35, 1.8, 0.5), gateMat, gate),
    right = mesh(geo(0.35, 1.8, 0.5), gateMat, gate),
    top = mesh(geo(2.8, 0.35, 0.5), gateMat, gate);
  left.position.set(-1.2, 0.05, 0);
  right.position.set(1.2, 0.05, 0);
  top.position.set(0, 1.1, 0);
  gate.position.set(0, 0, -1.5);
  const bridges = [];
  for (let i = 0; i < 9; i++) {
    const b = mesh(geo(0.72, 0.055, 0.12, 0.012), routeMat);
    b.position.set((i - 4) * 0.78, -0.7, -2);
    bridges.push(b);
  }
  for (let i = 0; i < 3; i++) {
    const b = mesh(geo(0.12, 0.055, 0.54, 0.012), routeMat);
    b.position.set(0, -0.7, -1.45 + i * 0.55);
    bridges.push(b);
  }
  const floorMat = material({ color: "#111111", roughness: 1 }),
    floor = mesh(geo(36, 0.04, 36, 0.005), floorMat);
  floor.position.set(0, -0.82, -3);
  floor.userData.skipSoftware = true;
  if (!software) {
    scene.add(new THREE.HemisphereLight("#F4F0E8", "#111111", 2.1));
    const key = new THREE.DirectionalLight("#fff4e2", 5);
    key.position.set(-3, 7, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight("#ff7a00", 1.2);
    rim.position.set(5, 3, -5);
    scene.add(rim);
    const fill = new THREE.DirectionalLight("#F4F0E8", 1.1);
    fill.position.set(6, 2, 6);
    scene.add(fill);
  }
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = shadowCanvas.height = 64;
  const sc = shadowCanvas.getContext("2d"),
    gradient = sc.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "#000000a0");
  gradient.addColorStop(1, "#00000000");
  sc.fillStyle = gradient;
  sc.fillRect(0, 0, 64, 64);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  textures.add(shadowTexture);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTexture,
    transparent: true,
    depthWrite: false,
  });
  materials.add(shadowMat);
  const shadowGeo = new THREE.PlaneGeometry(2.8, 2.8);
  geometries.add(shadowGeo);
  const shadow = mesh(shadowGeo, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.77;
  shadow.userData.skipSoftware = true;
  const device = new THREE.Group();
  devices.add(device);
  const frameMat = material({ color: "#242424", roughness: 0.74 }),
    standMat = material({ color: "#3a3937", roughness: 0.8 });
  const frame = mesh(geo(5.65, 3.9, 0.18, 0.09), frameMat, device);
  const stem = mesh(geo(0.22, 0.72, 0.16, 0.02), standMat, device);
  stem.position.set(0, -2.28, -0.05);
  const foot = mesh(geo(1.65, 0.09, 0.72, 0.04), standMat, device);
  foot.position.set(0, -2.61, 0.05);
  const screenGeo = new THREE.PlaneGeometry(
    5.35,
    3.674,
    software ? 1 : 4,
    software ? 1 : 4,
  );
  geometries.add(screenGeo);
  const screenMat = new THREE.MeshBasicMaterial({
    color: "#ffffff",
    transparent: true,
    toneMapped: false,
  });
  materials.add(screenMat);
  const screen = mesh(screenGeo, screenMat, device);
  screen.position.z = 0.12;
  screen.renderOrder = 10;
  device.position.y = 1.85;
  let screenCase = -1;
  const loaded = new Map(),
    pending = new Set(),
    loader = new THREE.TextureLoader();
  function loadCase(index) {
    if (
      index < 0 ||
      index >= CASES.length ||
      loaded.has(index) ||
      pending.has(index)
    )
      return;
    pending.add(index);
    loader.load(
      CASES[index].screen,
      (t) => {
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = software
          ? 1
          : Math.min(4, renderer.capabilities.getMaxAnisotropy());
        loaded.set(index, t);
        textures.add(t);
        pending.delete(index);
        if (screenCase === index) {
          screenMat.map = t;
          screenMat.needsUpdate = true;
          root.dataset.caseTexture = CASES[index].id;
        }
      },
      undefined,
      () => pending.delete(index),
    );
  }
  const scroll = createScrollState(),
    director = createDirector(scroll.markers),
    target = new THREE.Vector3();
  let disposed = false,
    visible = true,
    last = 0,
    fpsStart = 0,
    rendered = 0,
    raf = 0;
  function resize() {
    mobile = innerWidth <= 700;
    quality = chooseQuality();
    q = QUALITY[quality];
    root.dataset.quality = quality;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, q.dpr));
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    scroll.measure();
  }
  resize();
  function animate(now) {
    if (disposed) return;
    raf = requestAnimationFrame(animate);
    if (
      document.hidden ||
      !visible ||
      root.classList.contains("reduced-motion")
    )
      return;
    const interval = 1000 / (software ? 30 : q.fps);
    if (now - last < interval - 0.5) return;
    last = now - ((now - last) % interval);
    const frameStart = performance.now();
    const { time, marker, progress } = scroll.at();
    director.seek(time);
    const s = director.state;
    root.dataset.sceneOrder = String(Math.round(s.order * 100) / 100);
    root.dataset.sceneBridge = String(Math.round(s.bridge * 100) / 100);
    const caseIndex = Number(marker.el.dataset.caseIndex);
    const activeCase = Number.isFinite(caseIndex) ? caseIndex : -1;
    if (activeCase !== screenCase) {
      screenCase = activeCase;
      if (activeCase >= 0) {
        loadCase(activeCase);
        if (loaded.has(activeCase)) {
          screenMat.map = loaded.get(activeCase);
          screenMat.needsUpdate = true;
          root.dataset.caseTexture = CASES[activeCase].id;
        } else screenMat.map = null;
      }
    }
    if (marker.id === "projetos") loadCase(0);
    if (activeCase >= 0 && progress > 0.55) loadCase(activeCase + 1);
    camera.position.set(s.cx, s.cy, s.cz);
    target.set(s.tx, s.ty, s.tz);
    if (mobile) {
      camera.position.multiplyScalar(activeCase >= 0 ? 2.5 : 1.25);
      camera.position.y = s.cy * (activeCase >= 0 ? 1.05 : 1.1);
      target.set(s.tx, s.ty, s.tz);
    }
    if (!mobile && activeCase >= 0) camera.position.z *= 1.25;
    camera.lookAt(target);
    camera.setViewOffset(
      innerWidth,
      innerHeight,
      mobile ? 0 : -innerWidth * (activeCase >= 0 ? 0.2 : 0.24),
      mobile ? innerHeight * s.frameY : 0,
      innerWidth,
      innerHeight,
    );
    camera.updateProjectionMatrix();
    const bob = marker.id === "inicio" ? Math.sin(now * 0.00065) * 0.045 : 0;
    cube.position.set(s.cubeX, s.cubeY + bob, s.cubeZ);
    cube.rotation.set(s.rx, s.ry, s.rz);
    cube.scale.setScalar(
      activeCase >= 0 && activeCase !== 1
        ? Math.max(0.015, 1 - s.screen)
        : activeCase === 1
          ? 0.42
          : 1,
    );
    orange.opacity = (activeCase >= 0 ? 1 : s.world) * (1 - s.about);
    shadow.position.x = cube.position.x;
    shadow.position.z = cube.position.z;
    shadowMat.opacity = orange.opacity * 0.55;
    blocks.forEach((b, i) => {
      b.mesh.visible = i < (software ? 16 : q.blocks);
      b.mesh.position.lerpVectors(b.chaos, b.ordered, s.order);
      b.mesh.rotation.set(
        b.rotation.x * (1 - s.order),
        b.rotation.y * (1 - s.order),
        b.rotation.z * (1 - s.order),
      );
    });
    black.opacity = s.world * (1 - s.about);
    black.depthWrite = black.opacity > 0.95;
    edge.opacity = black.opacity;
    floorMat.opacity = s.world * (1 - s.about);
    gate.scale.set(1, Math.max(0.01, s.gate), 1);
    gateMat.opacity = s.world * s.gate;
    bridges.forEach((b, i) => {
      b.scale.x = Math.max(0.001, clamp(s.bridge * 2 - i * 0.07));
      b.visible = s.bridge > 0.01;
    });
    routeMat.opacity = s.world * (1 - s.about);
    device.visible = s.screen > 0.01 && activeCase >= 0;
    device.rotation.set(-0.035, s.screenTurn, -0.015);
    device.scale.setScalar(s.screenScale);
    screenMat.opacity = loaded.has(activeCase) ? 1 : 0;
    frameMat.opacity = s.screen;
    standMat.opacity = s.screen;
    devices.position.y = 0;
    if (s.about > 0.98) {
      canvas.style.opacity = "0";
    } else {
      canvas.style.opacity = String(1 - s.about);
    }
    if (!software) {
      renderer.toneMappingExposure = s.light;
      renderer.render(scene, camera);
      root.dataset.drawCalls = String(renderer.info.render.calls);
      root.dataset.triangles = String(renderer.info.render.triangles);
    } else renderer.render(scene, camera);
    root.dataset.frameMs = String(
      Math.round((performance.now() - frameStart) * 10) / 10,
    );
    if (!stage.classList.contains("is-ready")) {
      stage.classList.add("is-ready");
      root.dataset.sceneReady = "true";
    }
    rendered++;
    if (!fpsStart) fpsStart = now;
    if (now - fpsStart >= 1500) {
      root.dataset.fps = String(
        Math.round(((rendered * 1000) / (now - fpsStart)) * 10) / 10,
      );
      fpsStart = now;
      rendered = 0;
    }
  }
  addEventListener("resize", resize, { passive: true });
  addEventListener("portfolio:quality", resize);
  const observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      if (visible) {
        last = 0;
        fpsStart = 0;
        rendered = 0;
      }
    },
    { threshold: 0 },
  );
  observer.observe(document.getElementById("experience"));
  document.fonts.ready.then(() => scroll.measure());
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    stage.classList.remove("is-ready");
    root.dataset.renderer = "css";
    dispatchEvent(new Event("portfolio:graphics-fallback"));
  });
  addEventListener("pagehide", (e) => {
    if (e.persisted) return;
    disposed = true;
    cancelAnimationFrame(raf);
    observer.disconnect();
    removeEventListener("resize", resize);
    removeEventListener("portfolio:quality", resize);
    director.dispose();
    for (const g of geometries) g.dispose();
    for (const m of materials) m.dispose();
    for (const t of textures) t.dispose();
    renderer.dispose?.();
  });
  raf = requestAnimationFrame(animate);
}
