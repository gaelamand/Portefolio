import './styles.scss';
import TimelineContainer from './TimelineContainer';

const Timeline = () => (
  <section id='school' className='school'>
    <div className='school-header'>
      <h2 className="school-title"><span className='numbers-span'>05.</span> School</h2>
      <p className='school-title__text'>Discover my previous trainings bellow. More details in my Resume.</p>
    </div>
    <TimelineContainer />
  </section>
)

export default Timeline