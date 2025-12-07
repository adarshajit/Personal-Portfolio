import styled from "styled-components";

export const ArtContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 300px 0 300px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0 20px;
  }
`;

export const H1 = styled.h1`
  font-size: 38px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
    margin: 0;
  }
`;

export const P = styled.p`
  font-size: 20px;
  color: #5e5e5e;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    display: flex;
    align-self: center;
    text-align: center;
    margin: 0;
  }
`;
export const ArtGrid = styled.div`
  display: grid;
  justify-items: center;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 50px;
  width: 100%;

  @media screen and (min-width: 1720px) {
    grid-gap: 20px;
  }
`;

export const ArtBox = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-in-out;
  border: 1px solid #e5e5e5ff;
  padding: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 768px) {
    max-width: 500px;
    max-height: 500px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 350px;
  height: auto;
  object-fit: contain;
  display: block;
  align-self: center;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 350px;
    margin: 10px 0;
  }
`;
