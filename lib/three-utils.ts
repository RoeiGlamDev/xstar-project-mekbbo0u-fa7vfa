import * as THREE from 'three'; // Importing Three.js
import { Canvas } from '@react-three/fiber'; // Importing React Three Fiber
import { useEffect, useRef } from 'react'; // Importing React hooks

const ThreeUtils = () => {
  const meshRef = useRef<THREE.Mesh>(null); // Reference for the mesh

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (meshRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize x
        const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize y
        meshRef.current.rotation.x = y * Math.PI; // Rotate mesh based on mouse position
        meshRef.current.rotation.y = x * Math.PI; // Rotate mesh based on mouse position
      }
    };

    window.addEventListener('mousemove', handleMouseMove); // Add mouse move event listener

    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Clean up event listener
    };
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} /> {/* Ambient light for soft illumination */}
      <pointLight position={[10, 10, 10]} /> {/* Point light for highlights */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} /> {/* Box geometry for 3D effect */}
        <meshStandardMaterial color={'#FFA500'} /> {/* Orange color for luxury effect */}
      </mesh>
    </Canvas>
  );
};

export default ThreeUtils; // Exporting the component as default