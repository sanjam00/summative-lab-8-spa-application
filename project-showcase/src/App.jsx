import { useState } from 'react'
import ProjectForm from './components/ProjectForm';
import SearchFilter from './components/SearchFilter';
import ProjectList from './components/ProjectList';

import projects from './projectsData';

function App() {
  const [search, setSearch] = useState("")

  function handleSearch(input) {
    setSearch(input);
  }

  const filteredProjects = projects.filter((proj) => {
    return proj.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <ProjectForm />
      <SearchFilter handleSearch={handleSearch} />
      <ProjectList projects={filteredProjects} handleSearch={handleSearch} />

    </>
  )
}

export default App
