import './styles.scss';
import WebDev from '../../assets/projects/web-development.png';
import oplayground from '../../assets/projects/oplayground.jpg';
import BTP from '../../assets/projects/BTP.png';
import Sushi from '../../assets/sushi-1.jpg';
import girls from '../../assets/projects/girlshead.png';
import MiaDC from '../../assets/MiaDC.jpg';
import Nico from '../../assets/projects/Nico.jpeg';

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
      <h2 className="projects-title"><span className='numbers-span'>03.</span> Hobbies</h2>
      <p>I am a tech enthusiast who loves exploring the latest innovations and experimenting with diverse projects. Discover the projects I have been working on in recent months and learn more by visiting them.</p>
      <p className="projects-description">O'playground was my final project at O'clock. This is a Minimum Viable Product. The main goal was to implement 2 CRUDs (profile creation and event management). Don't hesitate to test them.</p>
      <p className="projects-description projects-evolya-text"><span className="evolya-word">Evolya</span> is my biggest focus nowadays. I plan to launch it in beta test in a few days.</p>
      <svg className="evolya-arrow-svg" viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 5 C 10 5, 0 20, 10 35 C 20 50, 50 45, 65 35 C 80 25, 95 30, 110 45 C 125 60, 125 80, 125 95" stroke="#6B9E6E" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" fill="none" />
        <polygon points="120,90 125,100 130,90" fill="#6B9E6E" />
      </svg>
    </div>
    <div className='cards-container'>
      <div className="card-wrapper card-wrapper--rare">
        <div className='card-image-container evolia-bg'>
          <span className='evolia-letter'>E</span>
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Evolia</h3>
        <div className='card-tags'>
          <div className='card-tag react'>React <FaReact /></div>
          <div className='card-tag tailwind'>Tailwind <SiTailwindcss /></div>
          <div className='card-tag node'>NodeJS <FaNodeJs /></div>
          <div className='card-tag express'>Express <SiExpress /></div>
          <div className='card-tag postgre'>PostgreSQL <SiPostgresql /></div>
          <div className='card-tag claude'>Claude</div>
        </div>
        <p className='card-description'>A management application for content creators to handle brand partnerships, collaborations, and tax declarations.</p>
        <div className='card-links__oplayground'>
          <a href="https://www.evolya-app.com/" target="_blank">
            <div className='card-link card-link__oplayground github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
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
          <img className='troisblock-img' src={Sushi} alt="sushi chef" />
        </div>
        <p className='card-reference'>Client Project</p>
        <h3 className='card-title'>Sushi Chef</h3>
        <div className='card-tags'>
          <div className='card-tag javascript'>Javascript <SiJavascript /></div>
          <div className='card-tag react'>React <FaReact /></div>
          <div className='card-tag tailwind'>Tailwind <SiTailwindcss /></div>
          <div className='card-tag claude'>Claude</div>
        </div>
        <p className='card-description'>Website built for a client launching his career as a sushi chef. A clean and appetizing showcase to present his craft and services.</p>
        <div className='card-links__3block'>
          <a href="https://onaka.bzh/" target="_blank">
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
        <div className='card-image-container 3block'>
          <img className='troisblock-img' src={Nico} alt="3block" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Nicolas Dionnet</h3>
        <div className='card-tags'>
          <div className='card-tag react'> CMS Wordpress <FaReact /></div>
    
          
        </div>
        <p className='card-description'>This website has been build for a client. He wanted a colorful and soothing website for his hypnotherapy practice. </p>
        <div className='card-links__3block'>
          <a href="https://nicolasdionnet-hypnotherapie.fr/" target="_blank">
            <div className='card-link card-link__3block github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>  
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container 3block'>
          <img className='troisblock-img' src={MiaDC} alt="Mia Da Costa" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Mia Da Costa</h3>
        <div className='card-tags'>
          <div className='card-tag javascript'>Javascript <SiJavascript /></div>
          <div className='card-tag react'>React <FaReact /></div>
          <div className='card-tag tailwind'>Tailwind <SiTailwindcss /></div>
          <div className='card-tag claude'>Claude</div>
        </div>
        <p className='card-description'>Portfolio built for a Community and Strategy Brand Manager to showcase her expertise and projects.</p>
        <div className='card-links__3block'>
          <a href="https://www.miadacosta.com/" target="_blank">
            <div className='card-link card-link__3block github'>
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
