// external dependencies
import styled from 'styled-components';
import { Link } from "react-router-dom";
// internal dependencies
import connecticutCodersPhoto from '../../images/CC.png'; 

export const PhotoContainer = styled.div`
  background-image: url(${connecticutCodersPhoto});
  height: 40vh;
  width: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  filter: brightness(90%);
  border-radius: 50px;
  margin: 0 auto;
`;

export const MarketingContainer = styled.div`
  margin: 0 0 100px 0;
  padding: 30px 20px;
`;

export const MarketingMessage = styled.p`
  font-size: 1.4rem;
  line-height: 3rem;
  letter-spacing: .3rem;
  text-align: center;
`;

export const Keyword = styled.h1`
  color: black;
  font-size: 3rem;
  margin: 30px 0 40px 0;
`;

export const LearnMore = styled(Link)`
  :hover {
    color: #26004d;
    background-color: #ffffff;
    border: 2px solid #1a0033;
  }   

  color: white;  
  font-size: 1.5rem;
  text-decoration: none;
  background-color: #1a0033;
  border-radius: 5px;
  margin-right: 20px;
  padding: 10px 30px;
  float: right;
`;