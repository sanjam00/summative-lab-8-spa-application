function ProjectForm(props) {
    return (
        <div className="formContainer">
            <h2 id="form-title">Add Project:</h2>
            <form>
                <label htmlFor="enter-name">Name of Project</label>
                <input id="enter-name" type="text" />

                <label htmlFor="enter-description">Description</label>
                <textarea id="enter-description" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default ProjectForm