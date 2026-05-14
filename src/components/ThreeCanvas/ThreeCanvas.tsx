'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // ── Floating geometric shapes ─────────────────────────────────────────────

    const shapes: THREE.Mesh[] = [];

    // Gradient-like material helper
    const makeMat = (color1: number, opacity = 0.8) =>
      new THREE.MeshStandardMaterial({
        color: color1,
        metalness: 0.6,
        roughness: 0.2,
        transparent: true,
        opacity,
      });

    // Large rotating torus
    const torusGeo = new THREE.TorusGeometry(1.4, 0.35, 32, 64);
    const torusMesh = new THREE.Mesh(torusGeo, makeMat(0x00d4ff, 0.5));
    torusMesh.position.set(2.5, 0.5, -1);
    scene.add(torusMesh);

    // Icosahedron center piece
    const icoGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const icoMesh = new THREE.Mesh(icoGeo, makeMat(0x7c3aed, 0.7));
    icoMesh.position.set(-2, 0, -1);
    scene.add(icoMesh);
    shapes.push(icoMesh);

    // Box top-right
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    const boxMesh = new THREE.Mesh(boxGeo, makeMat(0xf472b6, 0.6));
    boxMesh.position.set(3, -1.5, -2);
    scene.add(boxMesh);
    shapes.push(boxMesh);

    // Octahedron bottom-left
    const octaGeo = new THREE.OctahedronGeometry(0.8);
    const octaMesh = new THREE.Mesh(octaGeo, makeMat(0xfbbf24, 0.7));
    octaMesh.position.set(-3.5, -1.5, -1.5);
    scene.add(octaMesh);
    shapes.push(octaMesh);

    // Small torus knot
    const knotGeo = new THREE.TorusKnotGeometry(0.5, 0.15, 80, 16);
    const knotMesh = new THREE.Mesh(knotGeo, makeMat(0x00d4ff, 0.6));
    knotMesh.position.set(0.5, 2.5, -0.5);
    scene.add(knotMesh);
    shapes.push(knotMesh);

    // Small cone
    const coneGeo = new THREE.ConeGeometry(0.5, 1.2, 6);
    const coneMesh = new THREE.Mesh(coneGeo, makeMat(0xf97316, 0.65));
    coneMesh.position.set(-1, -2.5, -1);
    scene.add(coneMesh);
    shapes.push(coneMesh);

    // ── Particle field ────────────────────────────────────────────────────────
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Lights ────────────────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 3, 20);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 3, 20);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xf472b6, 2, 15);
    pointLight3.position.set(0, -3, 1);
    scene.add(pointLight3);

    // ── Mouse parallax ────────────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouse);

    // ── Animation ─────────────────────────────────────────────────────────────
    let frame = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame += 0.005;

      torusMesh.rotation.x = frame * 0.3;
      torusMesh.rotation.y = frame * 0.5;

      icoMesh.rotation.x = frame * 0.4;
      icoMesh.rotation.y = frame * 0.6;

      boxMesh.rotation.x = frame * 0.5;
      boxMesh.rotation.z = frame * 0.3;

      octaMesh.rotation.y = frame * 0.7;
      octaMesh.rotation.z = frame * 0.4;

      knotMesh.rotation.x = frame * 0.6;
      knotMesh.rotation.y = frame * 0.4;

      coneMesh.rotation.y = frame * 0.8;

      // Float each shape
      icoMesh.position.y = -0.3 + Math.sin(frame * 1.0) * 0.3;
      boxMesh.position.y = -1.5 + Math.sin(frame * 0.7 + 1) * 0.4;
      octaMesh.position.y = -1.5 + Math.sin(frame * 0.5 + 2) * 0.35;
      knotMesh.position.y = 2.5 + Math.sin(frame * 0.8 + 0.5) * 0.3;
      torusMesh.position.y = 0.5 + Math.sin(frame * 0.6 + 1.5) * 0.25;

      particles.rotation.y = frame * 0.05;

      // Mouse parallax on camera
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Pulsing lights
      pointLight1.intensity = 2.5 + Math.sin(frame * 2) * 0.5;
      pointLight2.intensity = 2.5 + Math.cos(frame * 1.5) * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────────────────────────
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}
