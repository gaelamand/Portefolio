import './TimelineItem.scss';
import { FaHome } from "react-icons/fa";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item__content">
      <time>{data.date}</time>
      <h3>{data.title}</h3>
      <h4 className='school-place'><FaHome className='timeline-icon' />{data.school}</h4>
      <p>{data.text}</p>
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;
