import { motion } from 'framer-motion';
import Link from 'next/link';

function ContactItem({name,href,Icon,i}) {
  return (
      <Link href={href} passHref>
        <motion.a alt={name} animate={{y:[60,0],opacity:[0,1]}} transition={{delay:0.1*i}}  target='_blank' rel="noreferrer noopener" className='flex-col group rounded-2xl hover:font-medium text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 hover:text-gray-900 transform hover:shadow-xl hover:scale-105  flex items-center justify-center duration-300 ease-out transition-all  h-32 w-32 bg-white '>
          {Icon && <Icon />}
          {name}
        </motion.a>     
      </Link>
  )
}

export default ContactItem
