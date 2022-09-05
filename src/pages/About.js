// internal dependencies
import {
  FeatureContainer,
  FeatureHeader,
  FeatureDetails,
  FeatureLinkSC,
  FeatureLinkA,
  FeatureHeader2,
  Underline,
  Bold,
  StateLink,
  StateText,
  CurrentMembers,
  MemberNumber
} from '../styles/pagestyles/AboutStyles';

const About = () => {
  return (
    <>
      <FeatureContainer>
        <FeatureHeader>Vision</FeatureHeader>
        <FeatureDetails>The O(1) Software Network's vision is to provide free computer science education to the world.</FeatureDetails>
        <FeatureLinkSC to="/vision">Timeline</FeatureLinkSC>
      </FeatureContainer>

      <FeatureContainer>
        <FeatureHeader>Events</FeatureHeader>
        <FeatureHeader2>In-person Events</FeatureHeader2>
        <FeatureDetails>We're currently hosting <Bold>IN-PERSON</Bold> events in <Underline>8 U.S. States</Underline>.</FeatureDetails>
        <FeatureHeader2>Virtual Events</FeatureHeader2>
        <FeatureDetails>We're currently hosting <Bold>26 VIRTUAL</Bold> events <Underline>per month</Underline> including:</FeatureDetails>

        <FeatureDetails>Click below for information about state-specific events:</FeatureDetails>
          
        <StateLink href="https://www.meetup.com/new-york-html5-meetup-group/" rel="noreferrer" target="_blank">
          <StateText>New York</StateText>
        </StateLink>

        <StateLink href="https://www.meetup.com/central-connecticut-coders/" rel="noreferrer" target="_blank">
          <StateText>Connecticut</StateText>
        </StateLink>

        <StateLink href="https://www.meetup.com/florida-codes/" rel="noreferrer" target="_blank">
          <StateText>Florida</StateText>
        </StateLink>

        <StateLink href="https://www.meetup.com/arizona-codes/" rel="noreferrer" target="_blank">
          <StateText>Arizona</StateText>
        </StateLink>

        <StateLink href="https://www.meetup.com/dallas-codes/" rel="noreferrer" target="_blank">
          <StateText>Dallas, TX</StateText>
        </StateLink>

        <StateLink href="https://www.meetup.com/dallas-codes/" rel="noreferrer" target="_blank">
          <StateText>Austin, TX</StateText>
        </StateLink>

        <StateLink href="https://www.meetup.com/rhode-island-codes/" rel="noreferrer" target="_blank">
          <StateText>Rhode Island</StateText>
        </StateLink>

        <StateLink href="https://www.meetup.com/new-mexico-codes/" rel="noreferrer" target="_blank">
        <StateText>New Mexico</StateText>
        </StateLink>

      </FeatureContainer>
      
      <FeatureContainer>
        <FeatureHeader>Community</FeatureHeader>
        <CurrentMembers>Current Total Members: <MemberNumber>3,094</MemberNumber></CurrentMembers>
        <FeatureHeader2>Discord</FeatureHeader2>
        <FeatureDetails>Our Discord community allows software engineers to connect, collaborate, team up and network with other software engineers from around the U.S. and the world.</FeatureDetails>
        <FeatureDetails>Join our core Discord platform to attend our experimental events, share your portfolio for some feedback, ask for help on coding problems you're stuck on and so much more.</FeatureDetails>
        <FeatureLinkA href="https://discord.gg/nyRbpQFafZ" rel="noreferrer" target="_blank">Discord</FeatureLinkA>
      </FeatureContainer>
      
    </>
  );
};

export default About;