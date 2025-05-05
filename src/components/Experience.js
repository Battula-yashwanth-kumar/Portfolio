import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import left from "../assets/left.png";

const Experience = () => {
  return (
    <PaddingContainer
      id="Experience"
      top="10%"
      bottom="10%"
      responsiveRight="1rem"
      responsiveLeft="1rem"
    >
      <FadeImage src={left} left="0" width="inherit" />

      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        My Experience
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
      >
        Where <BlueText>I have worked</BlueText>
      </Heading>
      <PaddingContainer top="5%">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#191919", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #191919" }}
            date="Aug 2024- Present"
            iconStyle={{ background: "#88AB8E", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Product Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Aiden AI
            </h4>
            <p>
            Working as a Product Engineer in the TxTestmgmt Team, developing an advanced application for automated testing. The system intelligently generates test cases based on user stories and acceptance criteria, executes them automatically, and produces comprehensive test reports.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#191919", color: "#88AB8E" }}
            contentArrowStyle={{ borderRight: "7px solid  #191919" }}
            date="Jan 2024- Aug 2024"
            iconStyle={{ background: "#88AB8E", color: "#fff" }}
          >
             <h3 className="vertical-timeline-element-title">
              Software Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Aiden AI
            </h4>
            <p>
            I worked as a Software Developer Intern, where I wrote JUnit test cases for three repositories, achieving 90% test coverage. I played a key role in designing and developing the company website, contributing to both its structure and user experience. Additionally, I was involved in the full-stack development of two core company products: Technology Displacement (TechD), a platform that facilitates the migration of applications across different technology stacks, and TxTestMgmt (Tx), an automation testing tool that generates test cases from user stories and acceptance criteria, executes them, and produces detailed test reports.
               </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Experience;
