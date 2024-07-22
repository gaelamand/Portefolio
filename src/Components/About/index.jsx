import './styles.scss';
import Designgael from '../../assets/Designgael.png';
import { MdRadioButtonChecked } from "react-icons/md";

const About = () => (
  <section id='about' className="about">
    <h2 className="about-title"><span className='numbers-span'>01.</span> About me</h2>
    <div className="about-container">
      <div className="about-container-left">
        <p className="about-text">After achieving notable success in the Supply Chain field, I developed an interest in information systems by participating in the ERP transition at my first employer. 
          This initial experience set me on the path to a role as an SAP consultant, which I held for three years. However, despite this extensive professional experience, I felt the need to diversify and enhance my technical skills. I naturally chose JavaScript, a widely used web language, to begin this upskilling. Currently in a role as an ERP Consultant that does not fully align with my aspirations, 
          I am determined to regain the interest I had 
          for this profession with SAP, within a Supply context that forms the foundation of my training.</p>
        <ul className="about-list">
          <li className="about-list-item"><MdRadioButtonChecked /> SAP ECC6</li>
          <li className="about-list-item"><MdRadioButtonChecked /> SAP S/4 HANA</li>
          <li className="about-list-item"><MdRadioButtonChecked /> SAP FIORI</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Business Central</li>
          <li className="about-list-item"><MdRadioButtonChecked /> JDE/AS400</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Javascript</li>
        </ul>
      </div>
      <div className="about-container-right">
        <img className="picture personal-picture" src={Designgael} alt="My picture" />
      </div>
    </div>
  </section>
);

export default About;
