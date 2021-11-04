import ContactItem from "../components/elements/ContactItem"
import PageHeading from "../components/elements/PageHeading"
import { MailIcon } from "@heroicons/react/solid"


const GithubIcon = ({...props}) =>(
  <svg
  {...props}
  className='h-16 w-16 text-gray-500 dark:group-hover:text-gray-50 transition-colors duration-300 ease-out group-hover:text-gray-800 fill-current'
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="current"
  width={24}
  height={24}
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
  />
</svg>
)

const TwitterIcon = ({...props}) => (
<svg
{...props}
className='h-16 w-16 text-gray-500 transition-colors duration-300 ease-out group-hover:text-blue-400 fill-current'
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="current"
  width={24}
  height={24}
>
  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
</svg>

)

const EmailIcon = ({...props}) => (
  <MailIcon className='h-16 w-16 text-gray-500 transition-colors duration-300 ease-out group-hover:text-purple-600 fill-current'/>
)
const LinkedInIcon = ({...props}) => (
<svg
  {...props}
  className='h-16 w-16 text-gray-500 transition-colors duration-300 ease-out group-hover:text-blue-700 fill-current'
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="current"
  width={24}
  height={24}
>
<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
</svg>
)




function contact() {
  return (
    <div className='p-4'>
    <PageHeading>Connect with me</PageHeading>
    <div className='text-gray-700'>
    </div>
    <div className='flex justify-center md:justify-start  gap-4 grid-cols-5 flex-wrap'>
   
      <ContactItem i={1} Icon={EmailIcon} name='Email' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvpbDSHfckMkwdwKcdzBhJrfjglqvrkWRsHcxgtXlhxKZmGXkxRCDRgjjlJFQQfZZZhwQB' />
    
     <ContactItem i={2} Icon={TwitterIcon} name='Twitter' href='https://twitter.com/adarshzpatel' />
     <ContactItem i={3}Icon={GithubIcon} name='Github' href='https://github.com/adarshzpatel' />
     <ContactItem i={4} Icon={LinkedInIcon} name='LinkedIn' href='https://www.linkedin.com/in/adarsh-patel-b08a741b8/' />

    </div>
    </div>
  )
}

export default contact
