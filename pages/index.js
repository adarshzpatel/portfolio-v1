import { ArrowSmRightIcon } from "@heroicons/react/solid";
import ThreeJSModel from "../components/elements/ThreeJSModel";
import Sparkles from '../components/sparkles/Sparkles'
const technologies = [
  "Javascript ( ES6+ )",
  "React",
  "Next.js",
  "Firebase",
  "TailwindCss",
  "Framer Motion",
];



export const HomePage = () => {
  return (
    
    <div className="p-4 relative">
      <div className='absolute top-32 right-24 md:right-48 bg-primary-600 bg-blend-screen h-24 w-24  rounded-full blur-3xl ' />
      <div className='absolute -bottom-16 -left-8 md:right-44 bg-primary-600 bg-blend-   h-24 w-24  rounded-full blur-3xl ' />
      <div className="grid grid-cols-2 md:grid-cols-3  items-center">
        <div className="py-40 whitespace-nowrap">
          <h1 className="font-bold  leading-relaxed text-4xl"><Sparkles>Adarsh Patel</Sparkles></h1>
          <p className="font-mono text-primary-500">Designer / Developer </p>
        </div>
        <div className="md:col-span-2 h-full">
          {/* Three Js */}
          <ThreeJSModel />
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
          <h1 className="uppercase mt-8 font-bold  after:h-4 leading-loose text-2xl ">
          Skills & Technologies
        </h1>
          <p>Here are the few technologies I have working on recently : </p>
          <ul className="grid grid-cols-2 font-mono mt-2 max-w-md">
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
