import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

function FloatingImage({ textureUrl }: { textureUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [texture] = useState(() => new THREE.TextureLoader().load(textureUrl));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 1.2) * 0.2 + 0.2;
      meshRef.current.rotation.y = hovered ? Math.sin(t * 2) * 0.2 : 0;
      meshRef.current.scale.setScalar(hovered ? 1.08 : 1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[2.5, 2.5]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}

export default function Hero3DImage() {
  return (
    <div className="w-full h-[640px] md:h-[720px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 4, 2]} intensity={0.7} />
        <FloatingImage textureUrl="/src/assets/Pngtreeartificial.png" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
