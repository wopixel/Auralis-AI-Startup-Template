import * as THREE from 'three';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import { PCD_FACE_POINTS, PCD_FACE_SCALE } from './pcd-face-data.js';

const canvas = document.querySelector('#hero-canvas');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !prefersReducedMotion) {
  const host = canvas.parentElement;
  const copy = document.querySelector('.hero-copy');
  const themeRoot = document.documentElement;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  const object = new THREE.Group();
  const cloudGroup = new THREE.Group();
  const fallbackGroup = new THREE.Group();
  const pointColor = new THREE.Color('#c34b9a');
  const fallbackMaterial = new THREE.PointsMaterial({ color: pointColor, size: 0.0055, transparent: true, opacity: 0.92, sizeAttenuation: true });
  let cloud;
  let cloudRadius = 1.9;
  let elapsed = 0;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  camera.position.set(0, 0.1, 10);
  // Edit these values in degrees; the animation below preserves this base rotation.
  const baseRotation = new THREE.Euler(
    THREE.MathUtils.degToRad(0),
    THREE.MathUtils.degToRad(-85),
    THREE.MathUtils.degToRad(0)
  );
  const hoverRotation = new THREE.Euler(
    THREE.MathUtils.degToRad(0),
    THREE.MathUtils.degToRad(0),
    THREE.MathUtils.degToRad(0)
  );
  const easedRotation = baseRotation.clone();
  object.rotation.copy(baseRotation);
  object.add(fallbackGroup, cloudGroup);
  scene.add(object);

  // The same PCD geometry is embedded for direct file:// previews where XHR is blocked.
  const embeddedGeometry = new THREE.BufferGeometry();
  const embeddedPositions = new Float32Array(PCD_FACE_POINTS.length);
  for (let index = 0; index < PCD_FACE_POINTS.length; index += 1) embeddedPositions[index] = PCD_FACE_POINTS[index] * PCD_FACE_SCALE;
  embeddedGeometry.setAttribute('position', new THREE.BufferAttribute(embeddedPositions, 3));
  embeddedGeometry.computeBoundingSphere();
  const embeddedPoints = new THREE.Points(embeddedGeometry, fallbackMaterial);
  embeddedPoints.scale.setScalar(12.6);
  cloudRadius = embeddedGeometry.boundingSphere.radius * embeddedPoints.scale.x;
  fallbackGroup.add(embeddedPoints);
  fallbackGroup.visible = true;

  const loader = new PCDLoader();
  loader.load(
    'assets/models/pcd/Zaghetto.pcd',
    (points) => {
      points.geometry.center();
      points.geometry.rotateX(Math.PI);
      points.name = 'Zaghetto point cloud';
      points.material.size = 0.0055;
      points.material.sizeAttenuation = true;
      points.material.transparent = true;
      points.material.opacity = 0.92;
      points.material.color.set(pointColor);
      points.scale.setScalar(12.6);
      points.geometry.computeBoundingSphere();
      cloudRadius = points.geometry.boundingSphere.radius * points.scale.x;
      cloudGroup.add(points);
      cloud = points;
      fallbackGroup.visible = false;
      resize();
    },
    undefined,
    () => {
      fallbackGroup.visible = true;
    }
  );

  const setTheme = () => {
    const light = themeRoot.dataset.theme === 'light';
    pointColor.set(light ? '#8e4f78' : '#ffffff');
    fallbackMaterial.color.copy(pointColor);
    fallbackMaterial.opacity = light ? 0.46 : 0.72;
    if (cloud) {
      cloud.material.color.copy(pointColor);
      cloud.material.opacity = light ? 0.82 : 0.92;
    }
  };
  setTheme();
  new MutationObserver(setTheme).observe(themeRoot, { attributes: true, attributeFilter: ['data-theme'] });

  const pointer = { x: 0, y: 0 };
  let targetX = 0;
  let targetY = 0;
  let isHoveringHero = false;
  const hero = document.querySelector('.hero--home') || host;

  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX / window.innerWidth - 0.5;
    pointer.y = event.clientY / window.innerHeight - 0.5;
  }, { passive: true });
  hero.addEventListener('pointerenter', () => { isHoveringHero = true; }, { passive: true });
  hero.addEventListener('pointerleave', () => { isHoveringHero = false; }, { passive: true });

  const resize = () => {
    const width = host.clientWidth || 600;
    const height = host.clientHeight || 500;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    object.scale.setScalar(width < 560 ? 0.78 : width < 1000 ? 0.9 : 1);
    const visibleHalfHeight = camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const visibleHalfWidth = visibleHalfHeight * camera.aspect;
    // Keep the cloud anchored to the right edge while accounting for its horizontal silhouette.
    const horizontalRadius = cloudRadius * object.scale.x * 0.82;
    const rightEdge = visibleHalfWidth - horizontalRadius - 0.08;
    const rightBias = width >= 1200 ? 1.65 : width >= 760 ? 1.2 : 1.05;
    object.position.x = width < 760 ? 1.05 : Math.max(0, Math.min(rightBias, rightEdge));
    if (copy && width < 760) {
      const copyStart = copy.offsetTop;
      const verticalRadius = cloudRadius * object.scale.x * 0.62;
      object.position.y = Math.max(0, visibleHalfHeight - verticalRadius - (copyStart * (visibleHalfHeight * 2) / height));
    } else if (copy && width >= 760) {
      const copyCenter = copy.offsetTop + copy.offsetHeight / 2;
      object.position.y = (height / 2 - copyCenter) * ((visibleHalfHeight * 2) / height);
    } else {
      object.position.y = 0;
    }
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const animate = () => {
    elapsed += 0.006;
    targetX += (pointer.y * 0.08 - targetX) * 0.035;
    targetY += (pointer.x * 0.11 - targetY) * 0.035;
    const rotationTarget = isHoveringHero ? hoverRotation : baseRotation;
    easedRotation.x += (rotationTarget.x - easedRotation.x) * 0.028;
    easedRotation.y += (rotationTarget.y - easedRotation.y) * 0.028;
    easedRotation.z += (rotationTarget.z - easedRotation.z) * 0.028;
    object.rotation.x = easedRotation.x + targetX * 0.12;
    object.rotation.y = easedRotation.y + targetY * (isHoveringHero ? 0.08 : 0.55);
    object.rotation.z = easedRotation.z + Math.sin(elapsed * 0.28) * 0.008;
    cloudGroup.rotation.z = Math.sin(elapsed * 0.5) * 0.012;
    fallbackGroup.rotation.z = Math.sin(elapsed * 0.5) * 0.012;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
}
