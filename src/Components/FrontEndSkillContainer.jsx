import React from 'react'
import CSS from '../Pages/Skills/Images/CSS.png'
import HTML from '../Pages/Skills/Images/HTML.png'
import JS from '../Pages/Skills/Images/JS.png'
import Reactlogo from '../Pages/Skills/Images/Reactlogo.png'
import GitHub from '../Pages/Skills/Images/GitHub.png'
import MUIlogo from '../Pages/Skills/Images/MUIlogo.png'

const FrontEndSkillContainer = () => {
  return (
    <div>
    <div className='skillsContainer'>
        <div>
            <img alt='' src={JS} />
            <h5>JavaScript</h5>
            <h6>Expirienced</h6>
          </div>
          <div>
            <img alt='' src={HTML} />
            <h5>HTML</h5>
            <h6>Expirienced</h6>
          </div>
          <div>
            <img alt='' src={CSS} />
            <h5>CSS</h5>
            <h6>Expirienced</h6>
          </div>
          <div>
            <img alt='' src={Reactlogo} />
            <h5>React</h5>
            <h6>Expirienced</h6>
          </div>
          <div>
          <img alt='' src={GitHub} />
            <h5>GitHub</h5>
            <h6>Expirienced</h6>
          </div>
          <div>
          <img alt='' src={MUIlogo} />
            <h5>MUI</h5>
            <h6>Expirienced</h6>
          </div>
        </div>
        </div>
  )
}

export default FrontEndSkillContainer
