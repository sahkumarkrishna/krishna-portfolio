import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const ThreeBackground = ({ isHomePage = false }) => {
  return (
    <div className="fixed inset-0 -z-10 hidden md:block">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Stars 
          radius={150} 
          depth={80} 
          count={isHomePage ? 3000 : 2000} 
          factor={isHomePage ? 8 : 6} 
          saturation={0} 
          fade 
          speed={isHomePage ? 2 : 1} 
        />
        {isHomePage && (
          <>
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} intensity={0.3} color="#06b6d4" />
            <pointLight position={[-10, -10, -10]} intensity={0.2} color="#3b82f6" />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;