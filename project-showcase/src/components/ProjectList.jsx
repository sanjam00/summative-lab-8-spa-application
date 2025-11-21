import ProjectCard from "./ProjectCard"

function ProjectList({ projects, ...props }) {
    const cards = projects.map((project, index) => {
        return <ProjectCard key={project.id} project={project} />
    })

    return (
        <div className="cardsContainer">
            {cards}
        </div>
    )
}

export default ProjectList