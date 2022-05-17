import React, { useContext, useEffect } from "react"
import { CursorContext } from "../components/CustomCursor/CursorManager"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { LiquidDistortion } from "../components/Blotter/liquidDistortion"
import hoverEffect from "hover-effect"
import overlay from "../images/overlay.png"
import image from "../images/gradient3.png"
import image2 from "../images/selfie.jpg"

function About({ location }) {
  const mouseContext = useContext(CursorContext)
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(Image),
      intensity: 0.3,
      image1: image,
      image2: image2,
      displacementImage: overlay,
    })
  }, [])

  return (
    <AnimatePresence>
      <motion.main
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <ContentWrapper data-scroll-section>
          <TextWrapper>
            <LiquidDistortion text={"HELLO!"} />
            <Name
              onMouseEnter={() => {
                mouseContext.setSize("bigger")
              }}
              onMouseLeave={() => {
                mouseContext.setSize("small")
              }}
            >
              my name is Kirill
            </Name>
            <Description
              onMouseEnter={() => {
                mouseContext.setSize("big")
              }}
              onMouseLeave={() => {
                mouseContext.setSize("small")
              }}
            >
              My background is in art & design and I strive to bring more
              intuitivness, usability and a design-driven user-experience to
              every project I take on. I love to work on projects that
              incorporate a strong aesthetic while focusing on accessibility and
              utilizing the latest tech. When I’m not coding I like to explore
              sound-design and audio-recording.
            </Description>
          </TextWrapper>
          <Item
            data-scroll
            data-scroll-speed="1.8"
            onMouseEnter={() => {
              mouseContext.setSize("bigger")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            <Header>
              <Name2>The Developer</Name2>
              <Span>01/06</Span>
            </Header>
            <Image></Image>
            <BottomText>
              <BottomSpan>current (image)</BottomSpan>
            </BottomText>
          </Item>
        </ContentWrapper>
      </motion.main>
    </AnimatePresence>
  )
}
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

const ContentWrapper = styled.div`
  postion: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100vh;
  margin: 5rem 1.5rem;
  border: 1px solid purple;
  @media (max-width: 1280px) {
    height: 100%;
    flex-direction: column;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid blue;
  @media (max-width: 1200px) {
    height: 100%;
    width: 90vw;
    margin: 0rem 0rem;
  }
`
const Name = styled.h2`
  font-size: 5.8vw;
  margin-bottom: 2rem;
  color: #fff;
  text-align: left;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 19.4vw;
  }
`
const Description = styled.p`
  color: #fff;
  width: 60rem;
  /* padding: 0rem 2rem; */
  font-size: 1.5vw;
  text-align: left;
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 6vw;
    text-align: center;
  }
`

const Item = styled.div`
  position: relative;
  width: 48rem;
  margin-left: 4rem;
  margin-top: 10rem;
  cursor: pointer;
  @media (max-width: 1080px) {
    justify-content: flex-start;
    width: 28.1rem;
    margin-left: 0rem;
  }
`
const Header = styled.div`
  display: flex;
  color: var(--white);
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5vh;
  border-bottom: 1px dashed antiquewhite;
`
const Name2 = styled.div`
  width: 50%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`
const Span = styled.span`
  font-size: 1vh;
  font-weight: bold;
  text-transform: uppercase;
`
const Image = styled.div`
  position: relative;
  height: 48rem;
  background-color: gray;
  margin: 10px 0px;
  cursor: none;
  @media (max-width: 900px) {
    height: 25rem;
  }
`
const BottomText = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px dashed var(--white);
  padding-top: 5px;
`
const BottomSpan = styled.span`
  color: var(--white);
  font-size: 1vh;
  font-weight: bold;
  text-transform: uppercase;
`

export default About
