
import styled from 'styled-components';

export const TimelineContainer = styled.div`
  ::after {
    background-color: #e17b77;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }

  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;
`;

export const TimeLineItem = styled.div`
  :nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }

  :nth-child(odd) {
    .timeline-item-content {
      text-align: left;
      align-items: flex-start;

      @media only screen and (max-width: 767px) {
        padding: 15px 10px;
        text-align: center;
        align-items: center;
      }
    }

    .timeline-item-content::after {
      right: auto;
      left: -7.5px;
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .timeline-item-content .circle {
      right: auto;
      left: -50px;
    }
  }

  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;
  width: 50%;
`;

export const TimelineItemContent = styled.div`
  ::after {
    content: ' ';
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  position: relative;
  width: 400px;
  max-width: 70%;
  text-align: right;
  margin: 10px;

  @media only screen and (max-width: 767px) {
    padding: 15px 10px;
    text-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
  }
`;

export const TimelineTime = styled.time`
  color: #777;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
`;

export const TimelineItemText = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin: 15px 0;
  max-width: 250px;
`;

export const Circle = styled.span`
  background-color: #fff;
  border: 3px solid #e17b77;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -50px;
  width: 20px;
  height: 20px;
  z-index: 100;
`;