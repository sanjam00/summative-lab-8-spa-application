import { useState } from 'react'
import ProjectForm from './components/ProjectForm';
import SearchFilter from './components/SearchFilter';
import ProjectList from './components/ProjectList';

import projects from './projectsData';

function App() {

  return (
    <>
      <ProjectForm />
      <SearchFilter />
      <ProjectList projects={projects} />

    </>
  )
}

export default App
