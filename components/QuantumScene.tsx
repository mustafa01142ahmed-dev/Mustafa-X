/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Cone, Stars, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const SandParticle: React.FC<{ position: [number, number, number]; scale?: number }> = ({ position, scale = 1 }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.1;
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Sphere ref={ref} args={[0.1, 16, 16]} position={position} scale={scale}>
      <meshStandardMaterial
        color="#C5A059"
        roughness={0.8}
        metalness={0.2}
      />
    </Sphere>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
           {/* Abstract particles representing sands of time */}
           {Array.from({ length: 20 }).map((_, i) => (
             <SandParticle 
                key={i} 
                position={[
                  (Math.random() - 0.5) * 10, 
                  (Math.random() - 0.5) * 6, 
                  (Math.random() - 0.5) * 5
                ]} 
                scale={Math.random() * 1.5 + 0.5}
             />
           ))}
        </Float>

        <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#C5A059" />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export const QuantumComputerScene: React.FC = () => {
  // This is now a Pyramid Scene
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.5} penumbra={1} intensity={2} color="#FFD700" castShadow />
        <pointLight position={[-5, 2, -5]} intensity={0.5} color="#A52A2A" />
        <Environment preset="sunset" />
        
        <Float rotationIntensity={0.1} floatIntensity={0.2} speed={0.5}>
          <group rotation={[0, Math.PI / 4, 0]} position={[0, -0.5, 0]}>
            {/* Pyramid */}
            <Cone args={[1.8, 2.5, 4]} position={[0, 1.25, 0]}>
              <meshStandardMaterial 
                color="#C5A059" 
                metalness={0.3} 
                roughness={0.8}
                flatShading={true} 
              />
            </Cone>
            
            {/* Base */}
            <mesh position={[0, 0.1, 0]} rotation={[-Math.PI/2, 0, 0]}>
                <planeGeometry args={[4, 4]} />
                <meshStandardMaterial color="#E6C288" roughness={1} />
            </mesh>

            {/* Floating Elements representing knowledge */}
            <group position={[0, 3, 0]}>
                <Sphere args={[0.1]} position={[1, 0, 0]}>
                    <meshStandardMaterial color="#A52A2A" />
                </Sphere>
                <Sphere args={[0.1]} position={[-1, 0.2, 0.5]}>
                    <meshStandardMaterial color="#A52A2A" />
                </Sphere>
            </group>
          </group>
        </Float>
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}