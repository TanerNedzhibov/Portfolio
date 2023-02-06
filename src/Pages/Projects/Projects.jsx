import React, { useState } from 'react'
import ImgContainer from '../../Components/ImgContainer'
import ProjectSlider from '../../Components/ProjectSlider'
import Test from '../../Components/Test'
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
