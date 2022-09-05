// internal dependencies
import timelineData from '../data/timelineData';
import {
  TimelineContainer,
  TimeLineItem,
  TimelineItemContent,
  TimelineTime,
  TimelineItemText,

  Circle
} from '../styles/componentStyles/TimelineStyles';

const TimelineItem = ({ data }) => {
  return<TimeLineItem>
    <TimelineItemContent className="timeline-item-content">
      <TimelineTime>{data.date}</TimelineTime>
      <TimelineItemText>{data.text}</TimelineItemText>
      <Circle className="circle" />
    </TimelineItemContent>
  </TimeLineItem>
};

const Timeline = () => (
  timelineData.length > 0 && (
    <TimelineContainer>
      {timelineData.map((data, index) => (
          <TimelineItem data={data} key={index} />
      ))}
    </TimelineContainer>
  )
);

export default Timeline;