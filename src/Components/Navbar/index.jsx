import './styles.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

const NAV_ITEMS = [
  { to: 'about', label: 'À propos' },
  { to: 'work', label: 'Expérience' },
  { to: 'projects', label: 'Réalisations' },
  { to: 'school', label: 'Formation' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {

  // BURGER MENU
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id='navbar' className="navbar">
      <nav className={`navbar-container ${showLinks ? "show-navbar" : "hide-nav"}`}>
        <Link onClick={scrollToTop} className='navbar-link__logo'>
          <p className='navbar-logo'>GA</p>
        </Link>
        <div className="navbar-right">
          <ol className="navbar-links">
            {NAV_ITEMS.map((item, index) => (
              <li className="navbar-item" key={item.to}>
                <ScrollLink
                  onClick={handleShowLinks}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="navbar-item-link">
                  <span className='navbar-span'>{index + 1}.  </span>{item.label}
                </ScrollLink>
              </li>
            ))}
          </ol>
          <button onClick={handleShowLinks} className='navbar-burger'>
            <span className='burger-bar'></span>
          </button>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
