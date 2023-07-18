import './styles.scss';
import Resume from '../../assets/resume.png';
import { useState } from 'react';

const ResumeModal = () => {

  const [isOpen, setIsOpen] = useState(true);
  const handleClick = event => {
    setIsOpen(current => !current)
  }

  return (
    <div className={isOpen ? 'resume-image__container' : 'image-container__full'}>
      <img className="resume-image" onClick={handleClick} src={Resume} alt="" />
    </div>
  )
};

export default ResumeModal;
