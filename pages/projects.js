import projectData from "../data/projectData";
import LinkIcon from "@heroicons/react/solid/LinkIcon";
import Link from 'next/link'
function projects() {
  return (
    <section className="p-4 ">
      <h1 className="font-bold text-center sm:text-left text-2xl leading-loose tracking-wider uppercase mb-4">
        Projects
      </h1>
      <div className="flex flex-col gap-8 items-center ">
        {projectData.map((project) => (
          <div
            className="dark:hover:border-gray-100  border group max-w-xs sm:max-w-none w-full sm:items-center overflow-hidden border-gray-300 dark:border-gray-600 hover:border-gray-900 duration-300 ease-out transform hover:scale-[1.01] hover:shadow-xl transition-transform flex flex-col sm:flex-row  rounded-lg"
            key={project.id}
          >
            <div className="max-w-xs ">
                <img
                  src={project.img}
                  alt={project.title}
                  className=""
                />
            </div>
            <div className="grid gap-2 p-4">
              <h2 className="font-semibold text-gray-800 dark:text-gray-100 text-xl">
                {project.title}
              </h2>
              <ul className="flex gap-1">
                {project.tech.map((item) => (
                  <li key={item} className='tag' id={item.toLowerCase()}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm dark:text-gray-400 ">{project.description}</p>
              <div className="flex gap-2 mt-2 justify-between sm:justify-start">
                <Link href={project.link}  >
                  <a className="btn-icon" target='_blank' rel="noreferrer noopener" >
                    <LinkIcon className="w-5 h-5" /> View Website
                    </a>
                </Link>
                <Link href={project.github} className="btn-icon">
                <a className="btn-icon" target='_blank' rel="noreferrer noopener">
                  <GithubIcon className="w-5 h-5 fill-current" />
                  View Code
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default projects;

const GithubIcon = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
    />
  </svg>
);
