import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

const Orb = ({ position, color, size = 1 }: { position: [number, number, number]; color: string; size?: number }) => (
  <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.8}>
    <mesh position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <MeshDistortMaterial color={color} roughness={0.15} metalness={0.85} distort={0.35} speed={2.2} />
    </mesh>
  </Float>
);

const HeroScene = () => (
  <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#60A5FA" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#0EA5E9" />
        <Orb position={[-2.5, 1, -2]} color="#2563EB" size={1.2} />
        <Orb position={[2.5, -0.5, -3]} color="#0EA5E9" size={0.9} />
        <Orb position={[0, 2, -4]} color="#1D4ED8" size={0.7} />
        <Orb position={[-1, -2, -2]} color="#38BDF8" size={0.5} />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene;
