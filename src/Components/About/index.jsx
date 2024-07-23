import './styles.scss';
import Designgael from '../../assets/Designgael.png';
import { MdRadioButtonChecked } from "react-icons/md";

const About = () => (
  <section id='about' className="about">
    <h2 className="about-title"><span className='numbers-span'>01.</span> About me</h2>
    <div className="about-container">
      <div className="about-container-left">
        <p className="about-text">After achieving notable success in the Supply Chain field, I developed a keen interest in information systems through my participation in an ERP transition at my first employer. This initial experience set me on the path to becoming an SAP consultant, a role I held for three years. Despite this extensive professional experience, I felt the need to diversify and enhance my technical skills. Naturally, I chose JavaScript, a widely used web language, to begin this upskilling. Currently, I am in an ERP Consultant role that does not fully align with my aspirations.</p>
        <ul className="about-list">
          <li className="about-list-item"><MdRadioButtonChecked /> SAP ECC6</li>
          <li className="about-list-item"><MdRadioButtonChecked /> SAP S/4 HANA</li>
          <li className="about-list-item"><MdRadioButtonChecked /> SAP FIORI</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Business Central</li>
          <li className="about-list-item"><MdRadioButtonChecked /> JDE/AS400</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Javascript</li>
          <li className="about-list-item"><MdRadioButtonChecked /> REACT</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Node.js</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Express</li>
          <li className="about-list-item"><MdRadioButtonChecked /> PostgreSQL</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Power automate</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Automa</li>
        </ul>
      </div>
      <div className="about-container-right">
        <img className="picture personal-picture" src={Designgael} alt="My picture" />
      </div>
    </div>
  </section>
);

export default About;
