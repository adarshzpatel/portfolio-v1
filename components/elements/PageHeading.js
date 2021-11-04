import { motion } from "framer-motion"

function PageHeading({children}) {
  return (
    <motion.h1 animate={{
      opacity: [0, 1],
      y: [30, 0],
    }} className="font-bold text-center sm:text-left text-2xl leading-loose tracking-wider text-gray-700 dark:text-gray-200 uppercase mb-4">
      {children}
  </motion.h1>
  )
}

export default PageHeading
