// External dependencies
import styled from 'styled-components';
// Internal dependencies
import Timeline from '../components/Timeline';

const Title = styled.h1`
  color: black;
  font-size: 2rem;
  margin: 30px 0 30px 0;
  letter-spacing: .5rem;
  text-align: center;
`;

const Vision = () => {
  return (
    <>
    <Title>Our History</Title>
      <Timeline />
    </>
  )
};

export default Vision;