// internal dependencies
import {
  PhotoContainer,
  MarketingContainer,
  MarketingMessage,
  Keyword,
  LearnMore
} from '../styles/pagestyles/HomeStyles';

const Home = () => {
  return (
    <>
      <PhotoContainer />

      <MarketingContainer>
        <MarketingMessage>The O(1) Software Network is one of the world's fastest growing nonprofit, educational social platforms enabling aspiring and established Software Engineers to...</MarketingMessage>
        <Keyword>Explore.</Keyword>
        <Keyword>Learn.</Keyword>
        <Keyword>Connect.</Keyword>

        <LearnMore to="/about">More Info</LearnMore>
      </MarketingContainer>
    </>
  );
};

export default Home;

{/* <ul>
<li>Build relationships with other software engineers in the industry.</li>
<li>Learn to code and explore advanced topics with other engineers.</li>
<li>Join an interactive and fun community of software engineers.</li>
</ul> */}