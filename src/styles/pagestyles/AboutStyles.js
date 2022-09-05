import { Link } from "react-router-dom";
import styled from 'styled-components';

export const FeatureContainer = styled.div`
  margin: 40px 20px;
`;

export const FeatureHeader = styled.h1`
  color: black;
  font-size: 3rem;
  margin: 30px 0 30px 0;
  letter-spacing: .5rem;
`;

export const FeatureDetails = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  letter-spacing: .2rem;
  margin-bottom: 40px;
`;

export const FeatureLinkSC = styled(Link)`
  :hover {
    color: #26004d;
    background-color: #ffffff;
    border: 2px solid #26004d;
  }   

  color: white;  
  font-size: 1.4rem;
  text-decoration: none;
  letter-spacing: 0.3rem;
  background-color: #26004d;
  border-radius: 5px;
  margin-left: 180px;
  padding: 10px 20px;
`;

export const FeatureLinkA = styled.a`
  :hover {
    color: #26004d;
    background-color: #ffffff;
    border: 2px solid #26004d;
  }   

  color: white;  
  font-size: 1.4rem;
  text-decoration: none;
  letter-spacing: 0.3rem;
  background-color: #26004d;
  border-radius: 5px;
  margin-left: 180px;
  padding: 10px 20px;
`;

export const FeatureHeader2 = styled.h2`
  color: #400080;
  font-size: 2.2rem;
  margin-bottom: 25px;
`;

export const Underline = styled.span`
  text-decoration: underline;
`;

export const Bold = styled.span`
  font-weight: 800;
`;

export const StateLink = styled.a`
  text-decoration: none;
`;

export const StateText = styled.span`
  :hover {
    color: #26004d;
    background-color: #ffffff;
    filter: brightness(95%);
  }   

  color: #330066;  
  font-size: 1.7rem;
  border: 1px solid black;
  border-radius: 5px;
  letter-spacing: 0.2rem;
  height: 200px;
  width: 200px;
  margin: 0 10px 20px 0;
  padding: 10px;
  display: inline-block;
`;

export const CurrentMembers = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  margin: 40px 0;
`;

export const MemberNumber = styled.span`
  font-weight: 800;
`;