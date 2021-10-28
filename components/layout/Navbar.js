import DarkModeSwitch from "../elements/DarkModeSwitch";

import { useRouter } from "next/dist/client/router";

import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const router = useRouter();
  return (
    <header className="fixed left-0  z-20 top-0 w-screen py-4 px-4 backdrop-blur-xl border-b dark:border-gray-600 dark:backdrop-brightness-75 ">
      <nav className="flex justify-between mx-auto max-w-screen-lg items-center dark:border-gray-400">
        {/* <h1 className=' text-xl font-bold flex items-center gap-2'> Adarsh Patel </h1> */}
        {/* <div className='flex gap-2'> */}
      
        <ul className="flex  gap-4 text-gray-600 dark:text-gray-400">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              animate={{
                opacity: [0, 1],
                y: [-30, 0],
              }}
              transition={{ delay: i * 0.1 }}
              className='group'
            >
              <a
                href={item.href}
                className="hover:border-b-2 hover:text-gray-900 hover:border-gray-500 hover:font-medium dark:hover:text-gray-100 transition-all duration-100 ease-out dark:hover:border-gray-200 p-2"
              >
                {item.name}
              </a>
          
            </motion.div>
          ))}
        </ul>

        <DarkModeSwitch />
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
