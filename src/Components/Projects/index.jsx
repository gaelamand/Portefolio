import './styles.scss';
import WebDev from '../../assets/projects/web-development.png';
import oplayground from '../../assets/projects/oplayground.jpg';
import BTP from '../../assets/projects/BTP.png';
import girls from '../../assets/projects/girlshead.png';

import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"  
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";

const Projects = () => (
  <section id='projects' className="projects">
    <div className='projects-header'>
      <h2 className="projects-title"><span className='numbers-span'>03.</span> Projects</h2>
      <p>Discover the projects I have been working on in recent weeks and learn more by visiting them !</p>
      <p className="projects-description">O'playgound was my endind project in O'clock. This is a Minimum Viable Product. The main goal was to implement 2 CRUD (profile creation and event management). Don't hesitate to test them !  3blocks is a prototype website for a friend. More projects are in Vuejs in the pipe !   </p>
    </div>
    <div className='cards-container'>
      <div className="card-wrapper">
        <div className='card-image-container oplayground'>
          <img className='oplayground-img' src={oplayground} alt="oplayground" />
        </div>
        <p className='card-reference'>School Project</p>
        <h3 className='card-title'>O'playground Website</h3>
        <div className='card-tags'>
          <div className='card-tag react'>React <FaReact /></div>
          <div className='card-tag tailwind'>Tailwind <SiTailwindcss /></div>
          <div className='card-tag node'>NodeJS <FaNodeJs /></div>
          <div className='card-tag express'>Express <SiExpress /></div>
          <div className='card-tag postgre'>PostgreSQL <SiPostgresql /></div>
        </div>
        <p className='card-description'>I held the position of React front-end developer for O'playground. A project that help people who look for a playground in any city in France and connect people.</p>
        <div className='card-links__oplayground'>
          <a href="https://oplayground.netlify.app/" target="_blank">
            <div className='card-link card-link__oplayground github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container 3block'>
          <img className='troisblock-img' src={BTP} alt="3block" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Lucie Amand</h3>
        <div className='card-tags'>
          <div className='card-tag react'> CMS by Hostinger <FaReact /></div>
    
          
        </div>
        <p className='card-description'>This website has been build for my sister. She is a construction professional and was looking to promote her projects. </p>
        <div className='card-links__3block'>
          <a href="https://www.lucieamand.fr/" target="_blank">
            <div className='card-link card-link__3block github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>  
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container portfolio'>
          <img className='portfolio-img' src={WebDev} alt="personnages portefolio" />
        </div>
        <p className='card-reference'>Portfolio</p>
        <h3 className='card-title'>This website</h3>
        <div className='card-tags'>
          <div className='card-tag html'>HTML <FaHtml5 /></div>
          <div className='card-tag scss'>SCSS <FaSass /></div>
          <div className='card-tag javascript'>Javascript <SiJavascript /></div>
          <div className='card-tag react'>React<FaReact /></div>
        </div>
        <p className='card-description'>This website is developed in React and includes interactive features to display my education, manage automatic scrolling through links/buttons, change the display of certain elements, and more !</p>
        <div className='card-links__portfolio'>
          <a href="#" onClick={() => alert("Come on bro...")}>
            <div className='card-link card-link__portfolio github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container portfolio'>
          <img className='portfolio1-img' src={girls} alt="personnages portefolio" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Big headed</h3>
        <div className='card-tags'>
          <div className='card-tag html'>HTML <FaHtml5 /></div>
          <div className='card-tag css'>CSS <FaSass /></div>
          <div className='card-tag javascript'>Javascript <SiJavascript /></div>
        </div>
        <p className='card-description'>Site created for a friend who is an Art Director applying for a job to showcase recommendations.</p>
        <div className='card-links__portfolio'>
          <a href="https://www.big-headed.fun/">
            <div className='card-link card-link__portfolio github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section >
);

export default Projects;
