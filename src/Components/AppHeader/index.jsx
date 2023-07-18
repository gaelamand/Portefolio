import { useState } from 'react';
import Navbar from '../Navbar';
import './styles.scss';

const AppHeader = () => {

  // Navbar Color on scroll
  const [isBackground, setIsBackground] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setIsBackground(true)
    } else {
      setIsBackground(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header className={isBackground ? 'header header-background' : 'header'}>
      <Navbar />
    </header>
  )
};

export default AppHeader;
