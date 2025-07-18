"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Animated gradient sphere with standard material
function GradientSphere({ position, scale = 1, color = "#3b7ff0" }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;

      // Add subtle floating motion
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={hovered ? "#609afa" : color}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// DNA-like helix structure
function HelixStructure() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 100; i++) {
      const angle = (i / 100) * Math.PI * 4;
      pts.push(
        new THREE.Vector3(
          Math.sin(angle) * 2,
          (i - 50) * 0.1,
          Math.cos(angle) * 2
        )
      );
    }
    return pts;
  }, []);

  const lineRef = useRef();

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={lineRef}>
      <mesh>
        <tubeGeometry
          args={[new THREE.CatmullRomCurve3(points), 100, 0.02, 8, false]}
        />
        <meshBasicMaterial color="#609afa" transparent opacity={0.5} />
      </mesh>
      {points
        .filter((_, i) => i % 10 === 0)
        .map((point, i) => (
          <mesh key={i} position={point}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#3b7ff0" transparent opacity={0.8} />
          </mesh>
        ))}
    </group>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const shapesRef = useRef();

  useFrame((state) => {
    if (shapesRef.current) {
      shapesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      shapesRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={shapesRef}>
      {/* Tetrahedron */}
      <mesh position={[-3, 1, -2]}>
        <tetrahedronGeometry args={[0.5]} />
        <meshStandardMaterial
          color="#1d4ed8"
          wireframe
          emissive="#1d4ed8"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Octahedron */}
      <mesh position={[3, -1, -1]}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial
          color="#609afa"
          wireframe
          emissive="#609afa"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Dodecahedron */}
      <mesh position={[0, 2, -3]}>
        <dodecahedronGeometry args={[0.6]} />
        <meshStandardMaterial
          color="#3b7ff0"
          wireframe
          emissive="#3b7ff0"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

// Particle field
function ParticleField() {
  const count = 150;
  const meshRef = useRef();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const color = new THREE.Color(
        `hsl(${210 + Math.random() * 30}, 70%, 50%)`
      );
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main scene component
export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#3b7ff0" />

        {/* Main elements */}
        <group rotation={[0, mousePosition.x * 0.1, 0]}>
          {/* Main spheres */}
          <GradientSphere position={[-3, 0, -2]} scale={1.5} />
          <GradientSphere position={[3, 1, -3]} scale={0.8} color="#609afa" />
          <GradientSphere position={[0, -2, -1]} scale={1} color="#1d4ed8" />

          {/* Helix structure */}
          <HelixStructure />

          {/* Floating shapes */}
          <FloatingShapes />

          {/* Particle field */}
          <ParticleField />
        </group>

        {/* Background fog for depth */}
        <fog attach="fog" args={["#000000", 5, 25]} />
      </Canvas>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-black/30 pointer-events-none" />
    </div>
  );
}
