import './styles.scss';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { BsCode } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { DiScrum } from "react-icons/di";
import { FaListOl } from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si"
import { AiFillFileWord } from "react-icons/ai";
import { AiFillFileExcel } from "react-icons/ai";
import { SiSap } from "react-icons/si";


const Skills = () => {

  return (
    <section id='skills' className='skills'>
      <h2 className='skills-title'><span className='numbers-span'>04.</span>Web Skills</h2>
      {/* MAIN LANGUAGES */}
      <h3 className='languages-title'>Web development languages</h3>
      <div className='skills-container'>
        <div className='skill skill-html'>
          <AiFillHtml5 className='skill-icon skill-icon__html' />
          <p className='skill-name'>HTML</p>
        </div>
        <div className='skill skill-css'>
          <DiCss3 className='skill-icon skill-icon__css' />
          <p className='skill-name'>CSS</p>
        </div>
        <div className='skill skill-js'>
          <SiJavascript className='skill-icon skill-icon__js' />
          <p className='skill-name'>Javascript</p>
        </div>
        <div className='skill skill-sql'>
          <FaDatabase className='skill-icon skill-icon__sql' />
          <p className='skill-name'>SQL</p>
        </div>
      </div>
      {/* SECOND LANGUAGES */}
      <h3 className='languages-title'>Frameworks/librairies and other development technos</h3>
      {/* FIRST ROW */}
      <div className='skills-container'>
        <div className='skill skill-react'>
          <FaReact className='skill-icon skill-icon__react' />
          <p className='skill-name'>React</p>
        </div>
        <div className='skill skill-redux'>
          <SiRedux className='skill-icon skill-icon__redux' />
          <p className='skill-name'>Redux</p>
        </div>
        <div className='skill skill-node'>
          <FaNodeJs className='skill-icon skill-icon__node' />
          <p className='skill-name'>NodeJS</p>
        </div>
        <div className='skill skill-express'>
          <SiExpress className='skill-icon skill-icon__express' />
          <p className='skill-name'>ExpressJS</p>
        </div>
      </div>
      {/* 2ND ROW */}
      <div className='skills-container'>
        <div className='skill skill-postgre'>
          <SiPostgresql className='skill-icon skill-icon__postgre' />
          <p className='skill-name'>PostgreSQL</p>
        </div>
        <div className='skill skill-sequelize'>
          <SiSequelize className='skill-icon skill-icon__sequelize' />
          <p className='skill-name'>Sequelize</p>
        </div>
        <div className='skill skill-api'>
          <AiFillApi className='skill-icon skill-icon__api' />
          <p className='skill-name'>API</p>
        </div>
        <div className='skill skill-ejs'>
          <BsCode className='skill-icon skill-icon__ejs' />
          <p className='skill-name'>EJS</p>
        </div>
      </div>
      {/* 3RD ROW */}
      <div className='skills-container'>
        <div className='skill skill-scss'>
          <FaSass className='skill-icon skill-icon__scss' />
          <p className='skill-name'>SCSS</p>
        </div>
        <div className='skill skill-git'>
          <BsGit className='skill-icon skill-icon__git' />
          <p className='skill-name'>Git</p>
        </div>
        <div className='skill skill-github'>
          <AiFillGithub className='skill-icon skill-icon__github' />
          <p className='skill-name'>Github</p>
        </div>
        <div className='skill skill-tailwind'>
          <SiTailwindcss className='skill-icon skill-icon__tailwind' />
          <p className='skill-name'>Tailwind</p>
        </div>
      </div>
      {/* OTHER SKILLS */}
      <h3 className='languages-title'>Other skills</h3>
      <div className='skills-container'>
        <div className='skill skill-project'>
          <GoSettings className='skill-icon skill-icon__project' />
          <p className='skill-name'>Project management</p>
        </div>
        <div className='skill skill-icon__scrum'>
          <DiScrum className='skill-icon skill-icon__scrum' />
          <p className='skill-name'>SCRUM</p>
        </div>
        <div className='skill skill-figma'>
          <FaFigma className='skill-icon skill-icon__figma' />
          <p className='skill-name'>Figma</p>
        </div>
        <div className='skill skill-excel'>
          <AiFillFileExcel className='skill-icon skill-icon__excel' />
          <p className='skill-name'>Pack office</p>
        </div>
        <div className='skill skill-sap'>
          <SiSap className='skill-icon skill-icon__sap' />
          <p className='skill-name'>SAP</p>
        </div>
      </div>
    </section>
  )
}

export default Skills