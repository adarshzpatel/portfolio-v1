import Link from "next/link";
import { CodeIcon, LinkIcon } from "@heroicons/react/outline";
function ProjectCard() {
  return (
    <div className=" flex flex-col md:flex-row  md:items-center p-4 border-2 rounded-xl">
      <img
        src="/assets/cryptoland.jpg"
        alt=""
        className="rounded-lg  mb-2"
      />
      <div className="flex-1">
        <Link href="#">
          <a className="text-2xl mb-2 font-bold group hover:text-blue-500 flex items-center gap-2">
            Cryptoland{" "}
            <span>
              <LinkIcon className="h-6 w-6 hidden group-hover:block" />
            </span>
          </a>
        </Link>
        <div className="flex gap-2 mb-2">
          <div className="tag react">React</div>
          <div className="tag redux">Redux</div>
          <div className="tag tailwind">Tailwind Css</div>
        </div>
        <div>
          <p className="text-gray-600 dark:gray-400 mb-2">
            View the full list of all active cryptocurrencies,exchanges,news and
            details.
          </p>
          <button className="hover:bg-gray-200 bg-gray-100 dark:hover:bg-gray-800 p-2 rounded font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2 ">
            Github{" "}
            <span>
              <CodeIcon className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
