import React from 'react'
import Navbar from '../../Components/Navbar';
import './Home.css' 
import { Link } from 'react-scroll'
import profilePic from '../Home/Images/profilePic.png'
import TanerNedzhibov from './TanerNedzhibov.pdf'
import textDecoration from '../Home/Images/textDecoration.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Home = () => {
  
  const helloText = "<p> Hello! I am Taner Nedzhibov, a front-end developer </p>"

  return (
    <section id='homePage'>
      <Navbar /> <br></br>
      <div className='homePageContainer'>
        <div className='pageDecoration'>
          <img id='decorImg1' alt='' src={textDecoration} />
          <img id='decorImg2' alt='' src={textDecoration} />
        </div>
        <div className='socialMedia'>
          <a href='https://github.com/TanerNedzhibov'> <GitHubIcon fontSize='small' /> </a> 
          <Link to="contactPage" spy={true} smooth={true} offset={-100} duration={1300}><EmailIcon fontSize='small'  /></Link>
        </div>
        <div className='profilePicContainer'>
          <img className='homePageProfile' alt='' src={profilePic}></img>
          <p>{helloText}</p>
        </div>
        <div className='homePageButtons'>
          <a className='downloadBtn' download href={TanerNedzhibov}>Download CV</a>
          <Link className='letsTalkBtn' to="contactPage" spy={true} smooth={true} offset={-100} duration={1300}>Let's talk</Link>
        </div>
      </div>

    </section>
    )
}

export default Home
