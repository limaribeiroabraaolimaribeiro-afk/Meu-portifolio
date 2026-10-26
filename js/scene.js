import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { SoftwareRenderer } from "./software-renderer.js";

/* Three visual chapters, driven by native page scroll. No touch interception. */
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const smooth = (a, b, v) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = THREE.MathUtils.lerp;
const canvas = document.getElementById("sceneCanvas");
const stage = document.getElementById("sceneStage");
const experience = document.getElementById("experience");
const story = document.getElementById("servicos");
const hero = document.getElementById("inicio");
let renderer, scene, camera, pmrem, environment;
let knotRoot, browserRoot, flowRoot, screen, websiteTexture, dashboardTexture;
let knotMesh,
  orbit,
  satellites = [],
  layers = [],
  pulses = [],
  screenMode = "site";
let mobile = false,
  viewWidth = 0,
  viewHeight = 0,
  frame = 0,
  last = 0,
  clock = 0,
  progress = 0;
let visible = true,
  reduced = document.documentElement.classList.contains("reduced-motion");
let initialized = false,
  failed = false,
  software = false;
const materials = [];
const fallback = () => {
  failed = true;
  stage.classList.remove("has-webgl");
  window.dispatchEvent(new Event("portfolio:graphics-fallback"));
};
function material(options) {
  const m = new THREE.MeshStandardMaterial({ transparent: true, ...options });
  materials.push(m);
  return m;
}
function box(w, h, d, r, mat) {
  return new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat);
}
function roundRect(ctx, x, y, w, h, r, fill) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = fill;
  ctx.fill();
}
function text(ctx, str, x, y, size = 24, color = "#f0ede6", font = "Manrope") {
  ctx.fillStyle = color;
  ctx.font = `${font === "Space" ? "700" : "400"} ${size}px ${font}, Arial`;
  ctx.fillText(str, x, y);
}
function texture(draw, w = 1200, h = 768) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  return t;
}
function browserTexture(dashboard = false) {
  return texture((c, w, h) => {
    c.fillStyle = "#171613";
    c.fillRect(0, 0, w, h);
    roundRect(c, 22, 20, w - 44, 44, 12, "#26231f");
    ["#ff632b", "#6a6155", "#6a6155"].forEach((color, i) => {
      c.beginPath();
      c.arc(48 + i * 22, 42, 5, 0, Math.PI * 2);
      c.fillStyle = color;
      c.fill();
    });
    text(c, "seunegocio.com.br", w / 2 - 100, 48, 18, "#9c9283");
    text(
      c,
      dashboard ? "SEU PAINEL" : "SUA MARCA.",
      55,
      128,
      24,
      "#f0ede6",
      "Space",
    );
    text(c, "Tudo conectado. Tudo mais simples.", 740, 128, 17, "#9c9283");
    if (!dashboard) {
      text(c, "Uma presença", 58, 300, 82, "#f0ede6", "Space");
      text(c, "à sua altura.", 58, 384, 82, "#ff632b", "Space");
      text(
        c,
        "Uma experiência feita para o seu cliente.",
        62,
        459,
        22,
        "#b6ab9a",
      );
      roundRect(c, 60, 505, 255, 62, 31, "#ff632b");
      text(c, "Conheça o negócio  ↗", 89, 545, 22, "#17110c");
      const grad = c.createLinearGradient(720, 230, 1060, 600);
      grad.addColorStop(0, "#fdad6a");
      grad.addColorStop(0.4, "#ff632b");
      grad.addColorStop(1, "#6a2311");
      c.save();
      c.translate(930, 390);
      c.rotate(-0.35);
      c.strokeStyle = grad;
      c.lineWidth = 55;
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.ellipse(0, 0, 95, 165, (i * Math.PI) / 3, 0, Math.PI * 2);
        c.stroke();
      }
      c.restore();
      roundRect(c, 60, 665, 1080, 2, 0, "#393228");
      text(c, "CLAREZA NA MENSAGEM", 60, 714, 16, "#a79c8a");
      text(c, "PERSONALIDADE NO DESIGN", 430, 714, 16, "#a79c8a");
      text(c, "FÁCIL DE NAVEGAR", 870, 714, 16, "#a79c8a");
    } else {
      roundRect(c, 40, 164, 208, 550, 16, "#211e19");
      [
        "Visão geral",
        "Pedidos",
        "Clientes",
        "Pagamentos",
        "Relatórios",
      ].forEach((label, i) => {
        if (i === 0) roundRect(c, 53, 202 + i * 75, 181, 51, 10, "#ff632b");
        text(c, label, 72, 236 + i * 75, 23, i === 0 ? "#18120d" : "#a49a88");
      });
      text(
        c,
        "Sua operação. Em um só lugar.",
        294,
        219,
        36,
        "#f0ede6",
        "Space",
      );
      const cards = [
        ["Pedidos", "Organizados"],
        ["Clientes", "Conectados"],
        ["Rotina", "Simplificada"],
      ];
      cards.forEach((v, i) => {
        roundRect(c, 292 + i * 289, 253, 268, 127, 12, "#29241d");
        text(c, v[0], 313 + i * 289, 290, 21, "#ae9e85");
        text(c, v[1], 313 + i * 289, 339, 30, "#f0ede6", "Space");
      });
      roundRect(c, 292, 410, 840, 303, 14, "#211e19");
      text(c, "Acompanhe o seu negócio", 317, 454, 25, "#f0ede6", "Space");
      [50, 65, 45, 96, 82, 117, 102, 136, 122, 159, 143, 183].forEach(
        (v, i) => {
          roundRect(
            c,
            324 + i * 65,
            676 - v,
            38,
            v,
            4,
            i > 8 ? "#ff632b" : "#8b4d27",
          );
        },
      );
    }
  });
}
function uiTexture(title, subtitle, kind = 0) {
  return texture(
    (c, w, h) => {
      c.fillStyle = "#242019";
      c.fillRect(0, 0, w, h);
      text(c, title, 32, 63, 31, "#f0ede6", "Space");
      text(c, subtitle, 32, 106, 20, "#ab9d88");
      if (kind === 0) {
        roundRect(c, 32, 155, w - 64, 12, 6, "#423528");
        roundRect(c, 32, 155, w * 0.56, 12, 6, "#ff632b");
        roundRect(c, 32, 195, w - 64, 12, 6, "#423528");
        roundRect(c, 32, 195, w * 0.72, 12, 6, "#e78d4b");
      } else {
        c.strokeStyle = "#ff632b";
        c.lineWidth = 5;
        c.beginPath();
        c.moveTo(35, 225);
        c.bezierCurveTo(180, 220, 210, 180, 300, 195);
        c.bezierCurveTo(360, 210, 410, 140, 475, 155);
        c.stroke();
      }
    },
    512,
    272,
  );
}
function buildKnot() {
  knotRoot = new THREE.Group();
  scene.add(knotRoot);
  const paint = new THREE.MeshPhysicalMaterial({
    color: "#ff632b",
    metalness: 0.63,
    roughness: 0.22,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
    transparent: true,
  });
  const geometry = new THREE.TorusKnotGeometry(
    1.32,
    0.41,
    software ? 90 : mobile ? 150 : 220,
    software ? 18 : mobile ? 20 : 32,
    2,
    3,
  );
  knotMesh = new THREE.Mesh(geometry, paint);
  knotMesh.rotation.set(0.35, -0.4, 0.3);
  knotRoot.add(knotMesh);
  orbit = new THREE.Group();
  knotRoot.add(orbit);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.65, 0.006, 6, 160),
    material({ color: "#8c7050", metalness: 0.5, roughness: 0.4 }),
  );
  ring.rotation.set(1.05, 0.4, -0.3);
  orbit.add(ring);
  const ring2 = ring.clone();
  ring2.scale.setScalar(1.08);
  ring2.rotation.set(1.5, -0.5, 0.3);
  orbit.add(ring2);
  const pebbleMat = material({
    color: "#ffc091",
    metalness: 0.85,
    roughness: 0.25,
  });
  for (let i = 0; i < 4; i++) {
    const s = box(0.14, 0.14, 0.14, 0.035, pebbleMat);
    satellites.push(s);
    orbit.add(s);
  }
  const gradient = texture(
    (c, w, h) => {
      const g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      g.addColorStop(0, "#8a2b192d");
      g.addColorStop(0.5, "#5e20121b");
      g.addColorStop(1, "#00000000");
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
    },
    128,
    128,
  );
  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: gradient,
      transparent: true,
      depthWrite: false,
    }),
  );
  glow.scale.set(9, 9, 1);
  glow.position.z = -2;
  knotRoot.add(glow);
}
function buildBrowser() {
  browserRoot = new THREE.Group();
  scene.add(browserRoot);
  const frameMaterial = material({
    color: "#665644",
    metalness: 0.92,
    roughness: 0.27,
  });
  const backing = box(5.5, 3.57, 0.16, 0.12, frameMaterial);
  browserRoot.add(backing);
  websiteTexture = browserTexture();
  dashboardTexture = browserTexture(true);
  screen = new THREE.Mesh(
    new THREE.PlaneGeometry(5.34, 3.42),
    new THREE.MeshBasicMaterial({ map: websiteTexture, transparent: true }),
  );
  screen.position.z = 0.09;
  browserRoot.add(screen);
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.035, 0.5),
    frameMaterial,
  );
  base.position.set(0, -2.08, -0.08);
  browserRoot.add(base);
  const stem = box(0.2, 0.4, 0.12, 0.035, frameMaterial);
  stem.position.set(0, -1.9, -0.11);
  browserRoot.add(stem);
  [
    ["Pedidos", "Tudo em ordem.", 0],
    ["Sua rotina", "Mais clareza para decidir.", 1],
  ].forEach((data, i) => {
    const group = new THREE.Group();
    const frame = box(
      2.45,
      1.38,
      0.09,
      0.07,
      material({ color: "#a16c3e", metalness: 0.7, roughness: 0.3 }),
    );
    group.add(frame);
    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(2.34, 1.25),
      new THREE.MeshBasicMaterial({
        map: uiTexture(...data),
        transparent: true,
      }),
    );
    panel.position.z = 0.055;
    group.add(panel);
    group.userData.index = i;
    layers.push(group);
    browserRoot.add(group);
  });
  // Mobile view floats beside the browser in the presence chapter.
  const phone = new THREE.Group();
  phone.userData.phone = true;
  phone.add(box(1.12, 2.2, 0.12, 0.12, frameMaterial));
  const t = texture(
    (c, w, h) => {
      c.fillStyle = "#171613";
      c.fillRect(0, 0, w, h);
      roundRect(c, w / 2 - 32, 12, 64, 12, 6, "#050505");
      text(c, "Sua marca.", 24, 86, 29, "#f0ede6", "Space");
      text(c, "No seu ritmo.", 24, 128, 22, "#ff632b", "Space");
      roundRect(c, 24, 157, 208, 150, 15, "#4c2b1b");
      c.strokeStyle = "#ff632b";
      c.lineWidth = 16;
      c.beginPath();
      c.ellipse(130, 233, 53, 42, -0.6, 0, Math.PI * 2);
      c.stroke();
      text(c, "Em qualquer tela.", 24, 354, 22, "#c3b49e");
      roundRect(c, 24, 385, 208, 42, 21, "#ff632b");
      text(c, "Vamos conversar ↗", 45, 413, 18, "#14110e");
    },
    256,
    512,
  );
  const p = new THREE.Mesh(
    new THREE.PlaneGeometry(0.98, 2.01),
    new THREE.MeshBasicMaterial({ map: t, transparent: true }),
  );
  p.position.z = 0.07;
  phone.add(p);
  phone.position.set(2, -0.55, 1.3);
  phone.rotation.set(0.02, -0.14, -0.08);
  phone.name = "phone";
  browserRoot.add(phone);
}
function buildFlow() {
  flowRoot = new THREE.Group();
  scene.add(flowRoot);
  const coords = [
    new THREE.Vector3(-2.25, 0.8, 0),
    new THREE.Vector3(0, -0.2, 0.5),
    new THREE.Vector3(2.15, 0.8, -0.2),
  ];
  const titles = [
    ["Conversa", "Uma nova mensagem"],
    ["Inteligência", "Atendimento organizado"],
    ["Ação", "O próximo passo"],
  ];
  coords.forEach((v, i) => {
    const g = new THREE.Group();
    g.position.copy(v);
    g.rotation.y = i === 0 ? 0.18 : i === 2 ? -0.18 : 0;
    g.add(
      box(
        2,
        1.62,
        0.18,
        0.16,
        material({
          color: i === 1 ? "#a5572c" : "#554633",
          metalness: 0.75,
          roughness: 0.3,
        }),
      ),
    );
    const t = texture(
      (c, w, h) => {
        c.fillStyle = i === 1 ? "#ff632b" : "#211d16";
        c.fillRect(0, 0, w, h);
        const ink = i === 1 ? "#18120e" : "#f0ede6";
        text(c, ["↗", "✳", "✓"][i], 32, 80, 62, ink, "Space");
        text(c, titles[i][0], 30, 147, 35, ink, "Space");
        text(c, titles[i][1], 30, 190, 18, i === 1 ? "#542715" : "#b2a187");
      },
      400,
      280,
    );
    const f = new THREE.Mesh(
      new THREE.PlaneGeometry(1.86, 1.45),
      new THREE.MeshBasicMaterial({ map: t, transparent: true }),
    );
    f.position.z = 0.1;
    g.add(f);
    flowRoot.add(g);
  });
  for (let i = 0; i < 2; i++) {
    const a = coords[i].clone(),
      b = coords[i + 1].clone();
    a.y -= 0.9;
    b.y -= 0.9;
    const curve = new THREE.CatmullRomCurve3([
      a,
      new THREE.Vector3(lerp(a.x, b.x, 0.5), -1.5, 0.1),
      b,
    ]);
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 32, 0.018, 6, false),
      material({ color: "#ba683c", metalness: 0.4, roughness: 0.5 }),
    );
    flowRoot.add(tube);
    for (let j = 0; j < 3; j++) {
      const pulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.065, 10, 10),
        new THREE.MeshBasicMaterial({ color: "#ffd3a4", transparent: true }),
      );
      pulse.userData = { curve, phase: j / 3 };
      pulses.push(pulse);
      flowRoot.add(pulse);
    }
  }
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.4, 0.007, 5, 120),
    material({ color: "#755839", metalness: 0.4, roughness: 0.5 }),
  );
  ring.rotation.x = 1.35;
  ring.position.set(0, -1.5, -1);
  flowRoot.add(ring);
}
function opacity(group, value) {
  group.visible = value > 0.005;
  if (!group.visible) return;
  group.traverse((o) => {
    if (o.isMesh || o.isSprite) {
      const ms = Array.isArray(o.material) ? o.material : [o.material];
      ms.forEach((m) => {
        m.opacity = value;
        m.depthWrite = value > 0.85;
      });
    }
  });
}
function resize() {
  if (!renderer) return;
  mobile = innerWidth <= 700;
  viewWidth = renderer.canvas?.clientWidth || canvas.clientWidth || innerWidth;
  viewHeight =
    renderer.canvas?.clientHeight || canvas.clientHeight || innerHeight;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.35 : 1.65));
  renderer.setSize(viewWidth, viewHeight, false);
  camera.aspect = viewWidth / viewHeight;
  camera.position.z = mobile ? 13.5 : 12.5;
  camera.updateProjectionMatrix();
}
async function init() {
  if (initialized || failed) return;
  initialized = true;
  try {
    await Promise.race([
      document.fonts.ready,
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);
    mobile = innerWidth <= 700;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !mobile,
        alpha: true,
        powerPreference: "low-power",
      });
      renderer.setClearColor(0x0b0b0b, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
    } catch {
      software = true;
      const replacement = document.createElement("canvas");
      replacement.id = "sceneCanvas";
      canvas.replaceWith(replacement);
      renderer = new SoftwareRenderer(replacement);
      stage.dataset.renderer = "canvas";
    }
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, 1, 0.1, 70);
    if (!software) {
      pmrem = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      environment = pmrem.fromScene(room, 0.04);
      scene.environment = environment.texture;
      room.dispose();
      pmrem.dispose();
    }
    scene.add(new THREE.HemisphereLight("#f4d7b5", "#100a06", 2.3));
    const key = new THREE.DirectionalLight("#fff1db", 7);
    key.position.set(-4, 6, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight("#ff763a", 5);
    rim.position.set(5, -2, -4);
    scene.add(rim);
    const edge = new THREE.DirectionalLight("#dfedff", 4);
    edge.position.set(1, 5, -2);
    scene.add(edge);
    buildKnot();
    buildBrowser();
    buildFlow();
    resize();
    stage.classList.add("has-webgl");
    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      cancelAnimationFrame(frame);
      frame = 0;
      fallback();
    });
    requestTick();
  } catch (err) {
    console.warn("Modo visual simplificado ativado.", err);
    fallback();
  }
}
function render(now) {
  frame = 0;
  if (reduced || !visible || document.hidden || failed || !renderer) return;
  if (software && last && now - last < 32) {
    requestTick();
    return;
  }
  const dt = Math.min((now - (last || now)) / 1000, 0.05);
  last = now;
  clock += dt;
  const y = scrollY;
  const intro = clamp(y / Math.max(1, hero.offsetHeight * 0.95));
  const sp = clamp(
    (y - story.offsetTop) / Math.max(1, story.offsetHeight - innerHeight),
  );
  progress = lerp(progress, sp, 1 - Math.exp(-dt * 10));
  const toStory = smooth(0.13, 0.92, intro);
  const browserVisibility =
    smooth(0.25, 0.9, intro) * (1 - smooth(0.59, 0.7, progress));
  opacity(knotRoot, 1 - smooth(0.18, 0.82, intro));
  const fullWidth =
    2 *
    Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) *
    camera.position.z *
    camera.aspect;
  knotRoot.position.set(
    lerp(
      mobile ? 0 : fullWidth * 0.23,
      mobile ? 0 : -fullWidth * 0.23,
      toStory,
    ),
    lerp(mobile ? -2.35 : 0.15, mobile ? 2.05 : 0.1, toStory),
    0,
  );
  knotRoot.scale.setScalar(mobile ? 0.68 : 1.05);
  knotMesh.rotation.x = 0.35 + Math.sin(clock * 0.2) * 0.1 + intro * 0.9;
  knotMesh.rotation.y = -0.4 + clock * 0.13 + intro * 2.5;
  knotMesh.rotation.z = 0.3 + Math.sin(clock * 0.14) * 0.1;
  orbit.rotation.y = clock * 0.07;
  satellites.forEach((s, i) => {
    const angle = clock * 0.12 + (i * Math.PI) / 2;
    s.position.set(
      Math.cos(angle) * 2.65,
      Math.sin(angle) * 0.8,
      Math.sin(angle) * 2.1,
    );
    s.rotation.set(clock * 0.1 + i, clock * 0.14, clock * 0.2);
  });
  opacity(browserRoot, browserVisibility);
  const explode = smooth(0.25, 0.48, progress);
  browserRoot.position.set(
    mobile ? 0 : -fullWidth * 0.235,
    mobile ? 2.0 : 0.1,
    0,
  );
  browserRoot.scale.setScalar(mobile ? 0.57 : 0.93);
  browserRoot.rotation.set(
    lerp(0.06, 0.12, explode) + Math.sin(clock * 0.3) * 0.015,
    lerp(0.23, -0.13, explode) + Math.sin(clock * 0.18) * 0.025,
    lerp(-0.035, 0.025, explode),
  );
  const nextMode = progress > 0.31 ? "dashboard" : "site";
  if (nextMode !== screenMode) {
    screenMode = nextMode;
    screen.material.map =
      screenMode === "site" ? websiteTexture : dashboardTexture;
    screen.material.needsUpdate = true;
  }
  layers.forEach((layer, i) => {
    const alpha = explode * browserVisibility;
    opacity(layer, alpha);
    layer.position.set(
      i === 0 ? -1.7 : 2.0,
      lerp(i === 0 ? -0.6 : 0.5, i === 0 ? -1.2 : 1.0, explode),
      lerp(0.15, i === 0 ? 1.9 : 1.3, explode),
    );
    layer.rotation.set(0.02, i === 0 ? 0.08 : -0.1, i === 0 ? -0.05 : 0.05);
  });
  opacity(
    browserRoot.getObjectByName("phone"),
    (1 - explode) * browserVisibility,
  );
  opacity(flowRoot, smooth(0.6, 0.72, progress) * smooth(0.3, 0.9, intro));
  flowRoot.position.set(mobile ? 0 : -fullWidth * 0.235, mobile ? 2.2 : 0.2, 0);
  flowRoot.scale.setScalar(mobile ? 0.54 : 0.93);
  flowRoot.rotation.set(
    0.06,
    Math.sin(clock * 0.14) * 0.06,
    Math.sin(clock * 0.12) * 0.015,
  );
  pulses.forEach((p) =>
    p.position.copy(
      p.userData.curve.getPointAt((clock * 0.22 + p.userData.phase) % 1),
    ),
  );
  // Small, bounded cursor parallax only on devices with a fine pointer.
  camera.position.x = lerp(camera.position.x, pointer.x * 0.14, 0.04);
  camera.position.y = lerp(camera.position.y, pointer.y * 0.1, 0.04);
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
  requestTick();
}
function requestTick() {
  if (
    !frame &&
    initialized &&
    renderer &&
    !reduced &&
    visible &&
    !document.hidden &&
    !failed
  )
    frame = requestAnimationFrame(render);
}
const pointer = { x: 0, y: 0 };
if (matchMedia("(pointer: fine)").matches)
  addEventListener(
    "pointermove",
    (e) => {
      pointer.x = (e.clientX / innerWidth - 0.5) * 2;
      pointer.y = (0.5 - e.clientY / innerHeight) * 2;
    },
    { passive: true },
  );
addEventListener(
  "resize",
  () => {
    resize();
    requestTick();
  },
  { passive: true },
);
addEventListener("portfolio:motion", (e) => {
  reduced = e.detail.reduced;
  if (reduced) {
    cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
  } else {
    if (!initialized) init();
    else {
      resize();
      requestTick();
    }
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
  } else requestTick();
});
if ("IntersectionObserver" in window)
  new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      if (!visible) {
        cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
      } else requestTick();
    },
    { rootMargin: "80px" },
  ).observe(experience);
if (!reduced) init();
