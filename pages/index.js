import { ArrowSmRightIcon } from "@heroicons/react/solid";
import { Canvas } from "@react-three/fiber";
import {
  MeshWobbleMaterial,
  OrbitControls,
  OrthographicCamera,
  Shadow,
  softShadows,
} from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightShadow } from "three";
const technologies = [
  "Javascript ( ES6+ )",
  "React",
  "Next.js",
  "Firebase",
  "TailwindCss",
  "Framer Motion",
];

function Box() {
  const ref = useRef();

  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <MeshWobbleMaterial
        attach="material"
      color='cyan'
        factor={1} // Strength, 0 disables the effect (default=1)
        speed={2} // Speed (default=1)
      />
    </mesh>
  );
}

export const HomePage = () => {
  return (
    <div className="p-4 ">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center">
        <div className="py-24">
          <h1 className="font-bold  leading-relaxed text-4xl">Adarsh Patel</h1>
          <p className="font-mono text-primary-500">Designer / Developer </p>
        </div>
        <div className="md:col-span-2 h-full">
          {/* Three Js */}
          <Canvas camera={{ position: [2, 2, 2] }}>
            <directionalLight position={[0, 10, 0]} />
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 10, 0]} />
            <OrbitControls />
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
          </Canvas>
        </div>
      </div>
      <div>
        <h1 className="uppercase font-bold  after:h-4 leading-loose text-2xl ">
          About Me
        </h1>
        <div className="text-gray-600 dark:text-gray-300  ">
          <p>
            Hello! I am{" "}
            <span className="dark:text-primary-400  border-primary-500 text-primary-500">
              Adarsh Patel
            </span>{" "}
            , a self-taught web developer who loves designing digital stuff that
            live on internet
          </p>

          <p className="pt-2">
            Currently I am a 2nd year student pursuing B.Tech in
            <span className="dark:text-primary-400 border-primary-500 text-primary-500">
              {" "}
              Computer Science
            </span>{" "}
            from{" "}
            <a
              className="border-b"
              href="https://www.soa.ac.in/iter"
              rel="noopener noreferrer"
              target="_blank"
            >
              {"Siksha 'O'​ Anusandhan University"}.
            </a>
          </p>
          <br />
          <p>Here are the few technologies I have working on recently : </p>
          <ul className="grid grid-cols-2 mt-2 max-w-md">
            {technologies.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ArrowSmRightIcon className="h-4 w-4 text-primary-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
