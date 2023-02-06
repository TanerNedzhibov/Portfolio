import React from 'react'
import Sql from '../Pages/Skills/Images/Sql.png'
import Nodejs from '../Pages/Skills/Images/Nodejs.png'

const BackEndSkillContainer = () => {
  return (
    <div>
    <div className='skillsContainer'>
      <div>
        <img alt='' src={Nodejs} />
        <h5>Nodejs</h5>
        <h6>Basic</h6>
      </div>
      <div>
        <img alt='' src={Sql} />
        <h5>SQL</h5>
        <h6>Basic</h6>
      </div>
    </div>
    </div>
  )
}

export default BackEndSkillContainer
