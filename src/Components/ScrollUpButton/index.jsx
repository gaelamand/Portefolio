import './styles.scss';
import { useState } from 'react';
import { ImArrowUp2 } from "react-icons/im";

const ScrollUpButton = () => {

  // Navbar Color on scroll
  const [isScrollUp, setIsScrollUp] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setIsScrollUp(true)
    } else {
      setIsScrollUp(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div onClick={scrollToTop} className={isScrollUp ? 'scrollup-button' : 'scrollup'}><ImArrowUp2 /></div>
  )
};

export default ScrollUpButton;
