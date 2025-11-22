function ProjectCard({ project, ...props }) {
    return (
        <div className="card">
            <h2 id="name">{project.name}</h2>
            <p id="description">{project.description}</p>
        </div>
    )
}

export default ProjectCard