import { useState } from 'react'
import ProjectForm from './components/ProjectForm';
import SearchFilter from './components/SearchFilter';
import ProjectList from './components/ProjectList';

import projects from './projectsData';

function App() {
  const [search, setSearch] = useState("")
  const [projectData, setprojectData] = useState(projects)

  function handleSearch(input) {
    setSearch(input);
  }

  function handleAddProject(newItem) {
    setprojectData((prev) => [...prev, newItem])
  }

  const filteredProjects = projectData.filter((proj) => {
    return proj.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <ProjectForm onAddProjectSubmit={handleAddProject} />
      <SearchFilter handleSearch={handleSearch} />
      <ProjectList projects={filteredProjects} handleSearch={handleSearch} />
    </>
  )
}

export default App
