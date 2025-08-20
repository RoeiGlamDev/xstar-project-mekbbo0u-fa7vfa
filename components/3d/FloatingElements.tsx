import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const FloatingElement = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} /> {/* Sphere geometry for a floating effect */}
      <meshStandardMaterial color="#FF8C00" /> {/* Orange color for luxury feel */}
    </mesh>
  );
};

const FloatingElements = () => {
  return (
    <Canvas style={{ height: '100vh', background: 'white' }}>
      <ambientLight intensity={0.5} /> {/* Ambient light for soft illumination */}
      <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
      <FloatingElement />
      <OrbitControls /> {/* Allows for 3D rotation around the elements */}
    </Canvas>
  );
};

export default FloatingElements;