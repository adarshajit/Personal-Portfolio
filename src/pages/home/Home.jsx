
import {
  HomeContainer,
  HeroImg,
  HeroText,
  TextInfo,
  LandingWrapper,
  TextContainer,
  AvatarContainer,
  Button,
  ButtonContainer,
} from "./HomeElements";
import { ASSETS } from "@constants/assets";
import { Tech, Education, Organisations, Contact } from "./home-sections";
import { Footer } from "@components";

const Home = () => {
  document.title = "Adarsh Ajit - Home";

  return (
    <>
      <HomeContainer>
        <LandingWrapper>
          <AvatarContainer>
            <HeroImg src={ASSETS.DOODLE} />
          </AvatarContainer>

          <TextContainer>
            <HeroText>Hey There! 👋</HeroText>
            <TextInfo>
              Welcome to my space in the web. Thanks for coming by. Here you can
              learn about my journey so far.
            </TextInfo>
            <ButtonContainer>
              <a
                href="mailto:adarshajit@gmail.com?body=Hi%20Adarsh,"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Let's Talk</Button>
              </a>
              <a
                href="https://resume.io/r/9baJP8n7y"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Resume</Button>
              </a>
            </ButtonContainer>
          </TextContainer>
        </LandingWrapper>
        <Tech />
        <Education />
        <Organisations />
        <Contact />
        <Footer />
      </HomeContainer >
    </>
  );
};

export default Home;
