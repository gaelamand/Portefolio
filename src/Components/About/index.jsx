import './styles.scss';
import Designgael from '../../assets/Designgael.png';


const About = () => (
  <section id='about' className="about">
    <h2 className="about-title"><span className='numbers-span'>01.</span> About me</h2>
    <div className="about-container">
      <div className="about-container-left">
        <p className="about-text">After achieving notable success in the field of Supply Chain, I developed a strong interest in information systems by taking part in an ERP transition at my first employer. This initial experience naturally led me to a role as an SAP Consultant, which I held for three years. Eager to strengthen my profile and gain a more technical dimension, I trained in JavaScript, a universal language of the web. I am currently a Business Central Consultant at SYD Digital Care, where I have been working for the past two years, mainly on the Purchasing, Sales, Inventory, and Production domains.</p>
        <p className="about-text about-text-highlight">I am now looking for a position as a Business Central Consultant, or more broadly in digital transformation within an international context.</p>
      </div>
      <div className="about-container-right">
        <img className="picture personal-picture" src={Designgael} alt="My picture" />
      </div>
    </div>
    <div className="about-skills">
      <div className="skill-card skill-card--sap">
        <div className="skill-card__header">
          <span className="skill-card__icon">◆</span>
          <h3 className="skill-card__title">SAP</h3>
        </div>
        <ul className="skill-card__list">
          <li className="skill-card__item">SAP ECC6</li>
          <li className="skill-card__item">SAP S/4 HANA</li>
          <li className="skill-card__item">SAP FIORI</li>
        </ul>
      </div>
      <div className="skill-card skill-card--microsoft">
        <div className="skill-card__header">
          <span className="skill-card__icon">◆</span>
          <h3 className="skill-card__title">Microsoft</h3>
        </div>
        <ul className="skill-card__list">
          <li className="skill-card__item">Business Central</li>
          <li className="skill-card__item">Power Automate</li>
          <li className="skill-card__item">Power Apps</li>
          <li className="skill-card__item">Copilot</li>
          <li className="skill-card__item">Copilot Studio</li>
          <li className="skill-card__item">Pack Office</li>
        </ul>
      </div>
      <div className="skill-card skill-card--other">
        <div className="skill-card__header">
          <span className="skill-card__icon">◆</span>
          <h3 className="skill-card__title">Last but not least</h3>
        </div>
        <ul className="skill-card__list skill-card__list--two-cols">
          <li className="skill-card__item">JIRA</li>
          <li className="skill-card__item">JDE/AS400</li>
          <li className="skill-card__item">Javascript</li>
          <li className="skill-card__item">REACT</li>
          <li className="skill-card__item">Express</li>
          <li className="skill-card__item">ChatGPT</li>
          <li className="skill-card__item">Claude</li>
          <li className="skill-card__item">Sharepoint</li>
          <li className="skill-card__item">Github</li>
          <li className="skill-card__item">VS Code</li>
          <li className="skill-card__item">Loop</li>
          <li className="skill-card__item">Figma</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
