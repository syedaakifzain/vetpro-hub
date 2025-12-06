import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';

interface PlaceholderModelProps {
  isHovered: boolean;
}

// Placeholder 3D model - a stylized animal/medical shape
const PlaceholderModel = ({ isHovered }: PlaceholderModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && !isHovered) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body - capsule shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <capsuleGeometry args={[0.8, 1.5, 16, 32]} />
        <meshStandardMaterial
          color="#22c55e"
          roughness={0.3}
          metalness={0.6}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Cross symbol */}
      <mesh position={[0, 0.5, 0.85]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.4, 1, 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.5, 0.85]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.4, 1, 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} />
      </mesh>

      {/* Decorative rings */}
      <mesh position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.08, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.08, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
};

const LoadingSpinner = () => (
  <Html center>
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  </Html>
);

interface ModelViewerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ModelViewer = ({ size = 'large', className = '' }: ModelViewerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'h-32 w-32',
    medium: 'h-48 w-48 md:h-64 md:w-64',
    large: 'h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <pointLight position={[0, 10, 0]} intensity={0.5} color="#22c55e" />
          
          <PlaceholderModel isHovered={isHovered} />
          
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={5}
            blur={2}
            far={4}
          />
          <Environment preset="city" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={!isHovered}
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;