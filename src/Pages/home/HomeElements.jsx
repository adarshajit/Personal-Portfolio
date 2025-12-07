import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 500px 0 500px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const LandingWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  min-height: 400px;
  height: auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 40px 0;
    flex-direction: column;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;

  @media screen and (max-width: 768px) {
    padding: 20px 0 0 50px;
  }

  @media screen and (max-width: 350px) {
    padding: 0 14px 0 14px;
    max-width: 270px;
    max-height: 270px;
  }
`;

export const HeroImg = styled.img`
  align-items: center;
  height: 350px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  @media screen and (max-width: 350px) {
    padding: 20px 0 0 20px;
  }
`;

export const TextContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 50px;
  max-width: 700px;
  width: 100%;
  gap: 10px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    height: auto;
  }

  @media screen and (max-width: 350px) {
    padding: 0 14px;
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;

export const HeroText = styled.h1`
  font-size: 46px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const TextInfo = styled.p`
  font-size: 19px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  margin: 24px 24px 0 0;
  width: 140px;
  height: 57px;
  font-size: 17px;
  color: #fff;
  border: none;
  text-decoration: none;
  border-radius: 32px;
  background-color: #7c4dff;
  border: 3px solid #000;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #641eff;
    cursor: pointer;
  }
`;
