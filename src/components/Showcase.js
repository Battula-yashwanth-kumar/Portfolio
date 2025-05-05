import React from "react";
import { motion } from "framer-motion";
import {
  PaddingContainer,
  Heading,
  ParaText,
  FlexContainer,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import {
  StyledLink,
} from "../styles/Showcase.styled";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { TypeAnimation } from "react-type-animation";
import ScrollMouse from "./ScrollMouse";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="8%"
      top="12%"
      bottom="10%"
      responsiveTop="8rem"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      style={{
      }}
    >
      <FlexContainer align="center" justify="space-between">
        {/*left content */}
        <motion.div
          style={{ textAlign: "left" }}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            <span style={{
              'font-size': '2rem',
            }}>Hello, I'm </span><BlueText>Battula Yashwanth Kumar!</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            A{" "}
            <BlueText>
              <TypeAnimation
                sequence={[
                  "FullStack developer",
                  1000,
                  "Problem solver",
                  1000,
                  "Tech enthusiast",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </BlueText>
          </Heading>
          <Heading as="h3" size="h3" top="0.5rem" bottom="1rem">Based in India.</Heading>
          <ParaText as="p" top="1rem" bottom="3rem" style={{
            maxWidth: "80%",
          }}>

            I'm a Product Engineer currently working at AIden AI, with a Bachelor's degree in Information Technology from Manipal University. I'm always curious to learn more about new technologies and creative coding.
          </ParaText>


          {/* social icons */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="2rem">
              <StyledLink
                target="blank"
                href="https://www.linkedin.com/in/yashwanth-kumar-battula-0139a5246/"
              >
                <BsLinkedin />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink target="blank" href="https://github.com/Battula-yashwanth-kumar">
                <BsGithub />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink target="blank" href="https://leetcode.com/u/odqH0JErSR/">
                <SiLeetcode />
              </StyledLink>
            </IconContainer>
          </FlexContainer>

        </motion.div>

        {/* right content */}
        <FlexContainer
          as={motion.div}
          align="flex-end"
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"

        >
          {/* <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <Image src={showcaseImage} alt="profile" />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              top="-100px"
              left="30px"
              rotate="40deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: -360,
                scale: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              top="100px"
              right="-80px"
              rotate="10deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: -360,
                scale: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              bottom="10px"
              left="-90px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer> */}
        </FlexContainer>
      </FlexContainer>
      <ScrollMouse />
    </PaddingContainer>
  );
};

export default Showcase;
