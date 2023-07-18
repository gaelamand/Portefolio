import './styles.scss';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {

  return (
    <footer id='footer' className='footer'>
      <div className='more-contact'>
        <ul className='networks-list'>
          <li className='networks-list__github'>
          </li>
          <li className='networks-list__linkedin'>
            <a href="https://www.linkedin.com/in/ga%C3%ABl-amand-23a78610a/" target="_blank">
              <AiFillLinkedin className='more-contact__icon' />
            </a>
          </li>
        </ul>
      </div>
      <p className='footer-text'>Designed & Built by Gaël Amand</p>
    </footer>
  )
};

export default Footer;
