import Link from 'next/link';

function ContactItem({name,href,Icon}) {
  return (
      <Link href={href}>
        <a alt={name} target='_blank' rel="noreferrer noopener" className='flex-col group rounded-2xl hover:font-medium text-gray-600 hover:text-gray-900 transform hover:shadow-xl hover:scale-105  flex items-center justify-center duration-300 ease-out transition-all  h-32 w-32 bg-white '>
          {Icon && <Icon />}
          {name}
        </a>     
      </Link>
  )
}

export default ContactItem
