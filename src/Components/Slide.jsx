import React from 'react'


const Slide = ({appName, appImg, gitHubLink, pageNum}) => {

  
  return (
    <div>
        <div className='slide'>
            <img alt='' src={appImg}/>
            <p>{appName}</p>
            <button className='slideBtn'>GitHub</button>
            <button className='slideBtn'>View</button>
        </div>
    </div>
  )
}

export default Slide
