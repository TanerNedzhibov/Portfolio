import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <nav className='navBar'>
        <ul>
          <li>
            <Link to="homePage" spy={true} smooth={true} offset={-100} duration={1300}>Home</Link>
          </li>
          <li>
            <Link to="skillsPage" spy={true} smooth={true} offset={-100} duration={1300}>Skills</Link>
          </li>
          <li>
            <Link to="projectsPage" spy={true} smooth={true} offset={-100} duration={1300}>Projects</Link>
          </li>
          <li>
            <Link to="contactPage" spy={true} smooth={true} offset={-100} duration={1300}>Contact</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
