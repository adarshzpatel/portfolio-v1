import projectData from "../data/projectData";

import PageHeading from "../components/elements/PageHeading";
import ProjectCard from "../components/elements/ProjectCard";

function projects() {
  return (
    <section className="p-4 ">
     <PageHeading>Projects</PageHeading>
      <div className="flex flex-col gap-8 items-center ">
        {projectData.map((project) => (
         <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
}

export default projects;
