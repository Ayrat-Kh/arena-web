'use client';
import { Suspense } from 'react';
import { Physics, RigidBody } from '@react-three/rapier';
import { Canvas } from 'react-three-fiber';
import { Stats, OrbitControls } from '@react-three/drei';

export default function Home() {
  return (
    <Canvas camera={{ position: [15, 20, 15] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Suspense>
        <Physics debug>
          <RigidBody colliders="cuboid">
            <mesh position={[0, 50, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={'hotpink'} />
            </mesh>
          </RigidBody>

          <RigidBody type="fixed" colliders="cuboid">
            <mesh position={[0, -2, 0]}>
              <boxGeometry args={[10, 2, 10]} />
              <meshStandardMaterial color={'black'} />
            </mesh>
          </RigidBody>
        </Physics>
      </Suspense>

      <Stats />
      <OrbitControls />
    </Canvas>
  );
}
