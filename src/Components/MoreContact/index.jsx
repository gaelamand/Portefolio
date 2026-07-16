import './styles.scss';
import { AiFillLinkedin } from "react-icons/ai";
import { LINKEDIN_URL } from '../../data/links';

const Footer = () => {

  return (
    <footer id='footer' className='footer'>
      <div className='more-contact'>
        <ul className='networks-list'>
          <li className='networks-list__linkedin'>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <AiFillLinkedin className='more-contact__icon' />
            </a>
          </li>
        </ul>
      </div>
      <p className='footer-text'>Conçu &amp; développé par Gaël Amand</p>
    </footer>
  )
};

export default Footer;
