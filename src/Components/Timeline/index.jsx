import './styles.scss';
import TimelineContainer from './TimelineContainer';

const Timeline = () => (
  <section id='school' className='school'>
    <div className='school-header'>
      <h2 className="school-title"><span className='numbers-span'>04.</span> Formation</h2>
      <p className='school-title__text'>Une formation de développeur greffée sur un parcours supply chain et ERP. C&apos;est ce croisement qui me permet de parler aussi bien à un DSI qu&apos;à un utilisateur métier.</p>
    </div>
    <TimelineContainer />
  </section>
)

export default Timeline
