import projectData from "../data/projectData";

import PageHeading from "../components/elements/PageHeading";
import ProjectCard from "../components/elements/ProjectCard";
import { motion } from "framer-motion";

function projects() {
  return (
    <section className="p-4 ">
      <PageHeading>Projects</PageHeading>
      <div className="flex flex-col gap-8 items-center ">
        {projectData.map((project,i) => (
          <motion.div
            animate={{
              opacity: [0, 1],
              y: [60, 0],
            }}
            transition={{ delay: i * 0.1 }}
            className="w-full flex justify-center"
            key={project.id}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default projects;
