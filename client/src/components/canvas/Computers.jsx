import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [computerScale , setComputerScale] = useState(0.9)
  const [computerPosition , setComputerPosition] = useState([0, -2.25, -1.5])
  
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1480) {
        setComputerScale(.9); // Large screens
        setComputerPosition([0, -2.25, -6])
      } else if (window.innerWidth >= 1280) {
        setComputerScale(1); // Large screens
        setComputerPosition([0, -2.25, -6])
      } else if (window.innerWidth >= 1028) {
        setComputerScale(.8); // Large screens
        setComputerPosition([0, -2.25, -4.5])
      } else if (window.innerWidth >= 768) {
        setComputerScale(0.8); // Medium screens
        setComputerPosition([0, -2.25, -1.5])
      } else if (window.innerWidth >= 568) {
        setComputerScale(1); // Small screens
      } else {
        setComputerScale(0.8); // extra Small screens
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [computerScale]);

  return (
    <mesh>
      <hemisphereLight intensity={7} groundColor='black' />
      <spotLight
        position={[-40, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={computerScale}
        position={computerPosition}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
