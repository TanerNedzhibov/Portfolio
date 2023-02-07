import React from 'react'
import ProjectSlider from '../../Components/ProjectSlider'
import './Projects.css'

const Projects = () => {


  return (
    <section id='projectsPage'>
      <p>...that i used to created these</p>
      <h2>Projects</h2>
      <div className='projectsPageContainer'>
        <ProjectSlider />
      </div>
    </section>
  )
}

export default Projects
