import React from "react";
import {
  H1,
  P,
  TechContainer,
  SkillContainer,
  SkillIconWrapper,
  Icon,
  Img,
} from "./TechElements";
import {
  DiPython,
  DiJavascript1,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiIllustrator,
  DiPhotoshop,
} from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { ASSETS } from "@constants/assets";

const Tech = () => {
  return (
    <>
      <TechContainer>
        <H1>My Skills</H1>
        <P>Here are the tools and technologies that I use to get stuff done.</P>

        <SkillContainer>
          <IconContext.Provider value={{ size: "57px" }}>
            <SkillIconWrapper>
              <Icon>
                <DiPython />
              </Icon>
              <Icon>
                <DiJavascript1 />
              </Icon>
              <Icon>
                <DiGit />
              </Icon>
              <Icon>
                <DiHtml5 />
              </Icon>
              <Icon>
                <DiCss3 />
              </Icon>
              <Icon>
                <DiBootstrap />
              </Icon>
              <Icon>
                <DiReact />
              </Icon>
              <Icon>
                <DiNodejsSmall />
              </Icon>
              <Icon>
                <DiMongodb />
              </Icon>
              <Icon>
                <DiIllustrator />
              </Icon>

              <Icon>
                <DiPhotoshop />
              </Icon>

              <Icon>
                <CgFigma />
              </Icon>
            </SkillIconWrapper>
          </IconContext.Provider>
          <Img src={ASSETS.SKILL_IMG} />
        </SkillContainer>
      </TechContainer>
    </>
  );
};

export default Tech;
