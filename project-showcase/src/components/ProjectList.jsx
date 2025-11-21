import ProjectCard from "./ProjectCard"

function ProjectList({ projects, ...props }) {


    return (
        <div className="cardsContainer">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />))}
        </div>
    )
}

export default ProjectList