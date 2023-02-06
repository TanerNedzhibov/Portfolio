import React from 'react'
import './Skills.css'
import BackEndSkillContainer from '../../Components/BackEndSkillContainer'
import FrontEndSkillContainer from '../../Components/FrontEndSkillContainer'

const Skills = () => {
  const frondEndText = "<p> Front-end skills </p>"
  const backEndText = "<p> Back-end skills </p>"
  return (
    <section id='skillsPage'>
      <p>...and these are my</p>
      <h2>Skills</h2>
    <div className='pageContainer'>
      <div className='skillsCard1'>
        {frondEndText}
        <FrontEndSkillContainer />
      </div>
      <div className='skillsCard2'>
      {backEndText}
      <BackEndSkillContainer />
      </div>
    </div>
    </section>
  )
}

export default Skills
