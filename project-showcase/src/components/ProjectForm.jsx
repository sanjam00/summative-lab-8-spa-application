import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectForm({ onAddProjectSubmit, ...props }) {
    const [newProject, setNewProject] = useState({ name: "", description: "" });
    const [showForm, setShowForm] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        //generates a unique ID based on time stamp and a random number; used for key (found in ProjectList.jsx)
        let uniqueID = Date.now() + Math.random()

        //by  defining it as a variable, we ensure that the id is generated and added to the new project object
        const projectToSubmit = { ...newProject, id: uniqueID };
        onAddProjectSubmit(projectToSubmit);

        //clears the form after each submission
        setNewProject({ name: "", description: "" });
    }

    function handleFormHide() {
        setShowForm((prev) => !prev)
    }

    return (
        <div className="formContainer">
            <button onClick={handleFormHide}>{showForm ? "Collapse form" : "Expand form"}</button>

            <h2 id="form-title">Add Project:</h2>

            <AnimatePresence>
                {showForm && (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <label htmlFor="enter-name">Name of Project</label>
                        <input id="enter-name" type="text" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} />

                        <label htmlFor="enter-description">Description</label>
                        <textarea id="enter-description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />

                        <button>Add</button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProjectForm