import { Loader, MeshWobbleMaterial, OrbitControls, OrthographicCamera, Shadow } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

function Box() {
  const boxRef = useRef(null);
  useFrame((state,delta)=>{ 
    const box = boxRef.current
    box.rotation.x +=0.01
    box.rotation.y +=0.01
    
    box.scale.y = box.scale.y < 1.5  ? box.scale.y + 0.01 : box.scale.y -0.01; 
    box.scale.x = box.scale.x < 1.5  ? box.scale.x + 0.01 : box.scale.x -0.01; 
  
    
  })
  return (
    <mesh ref={boxRef}  position={[0, 0, 0]}>
      <boxBufferGeometry  attach="geometry" args={[1, 1, 1]} />
      <meshDepthMaterial />
      <MeshWobbleMaterial
        attach="material"
        color="#22D3EE"
        factor={2} // Strength, 0 disables the effect 
        speed={2} // Speed (default=1)
      />
    </mesh>
  );
}

function ThreeJSModel() {
  return (
    <>
    <Canvas camera={{ position: [2, 2, 2] }}>
      <Suspense fallback={null}>
      <directionalLight  position={[10, 10, 10]} intensity={0.5} />
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 10, 0]} />
      <OrbitControls  />
      <Box />
      <Shadow
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
        color="black" // Color (default:black)
        colorStop={0} // First gradient-stop (default:0)
        opacity={0.4} // Alpha (default:0.5)
        fog={false} // Reacts to fog (default=false)
      />
      </Suspense>
    </Canvas>
    <Loader/>
    </>
  );
}

export default ThreeJSModel;
