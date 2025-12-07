import React from "react";
import {
  EducationContainer,
  H1,
  EducationWrapper,
  P1,
  P2,
  H2,
  EducationCard,
  EducationInfo,
  Header,
  Num,
} from "./EducationElements";

const Education = () => {
  return (
    <>
      <EducationContainer>
        <H1>Education</H1>
        <EducationInfo>
          <EducationWrapper>
            <EducationCard>
              <Header>
                <H2>2017-2021</H2>
                <Num>01</Num>
              </Header>
              <P1>Federal Institute of Science and Technology (FISAT)</P1>
              <P2>BTech, Computer Science and Engineering</P2>
            </EducationCard>
            <EducationCard>
              <Header>
                <H2>2024-2025</H2>
                <Num>02</Num>
              </Header>
              <P1>University of Limerick</P1>
              <P2>MSc Software Engineering</P2>
            </EducationCard>
          </EducationWrapper>
        </EducationInfo>
      </EducationContainer>
    </>
  );
};

export default Education;
