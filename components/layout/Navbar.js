import DarkModeSwitch from "../elements/DarkModeSwitch";
import { CodeIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <header className=" sticky  z-10  top-0 left-0  w-screen py-4 px-4 backdrop-blur-xl border-b dark:border-gray-600 dark:backdrop-brightness-75 ">
      <nav className="flex justify-between mx-auto max-w-screen-md items-center dark:border-gray-400">
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed flex flex-col items-center justify-center z-20 w-screen h-screen inset-0 bg-gray-200 dark:bg-gray-800">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
              onClick={() => setOpen(false)}
              className="bg-gray-200 p-1 rounded-md dark:bg-gray-700 absolute top-8 right-8 ring-opacity-80 ring-gray-500 dark:ring-gray-200hover:ring-[2px]"
            >
              <XIcon className="h-8 w-8 dark:text-gray-400 text-gray-600" />
            </motion.button>
            <ul className="flex flex-col gap-12 text-center text-2xl font-light  tracking-widest uppercase">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  animate={{
                    opacity: [0, 1],
                    y: [-30, 0],
                  }}
              
                  transition={{ delay: i * 0.1 }}
                  className="group "
                >
                  <Link href={item.href}>
                    <a
                      onClick={() => setOpen(false)}
                      className=" hover:text-primary-500 dark:text-gray-400  hover:font-semibold  transition-all duration-100 ease-out p-2"
                    >
                      {item.name}
                    </a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <motion.a
              animate={{
                opacity: [0, 1],
                y: [-30, 0],
              }}
              exit={{
                opacity: 0,
                y: -30
              }}
              className="flex items-center text-xl  gap-2 font-bold"
            >
              <CodeIcon className="h-8 w-8" />
              Adarsh Patel
            </motion.a>
          </Link>
          <ul className="md:flex hidden gap-2 text-gray-600 dark:text-gray-400">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                animate={{
                  opacity: [0, 1],
                  y: [-30, 0],
                }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={item.href}>
                <a
                  className="hover:bg-gray-200 hover:text-gray-900  hover:font-medium dark:hover:text-gray-100 transition-all duration-100 ease-out dark:hover:bg-gray-800 p-2  rounded-md"
                >
                  {item.name}
                </a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeSwitch />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
            onClick={() => setOpen(true)}
            className="md:hidden bg-gray-200 p-1 rounded-md ring-opacity-80 ring-gray-500 dark:ring-gray-200 dark:bg-gray-700 hover:ring-[2px]"
          >
            <MenuIcon className="h-8 w-8  dark:text-gray-200 hover:text-primary-500 text-gray-600 " />
          </motion.button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
