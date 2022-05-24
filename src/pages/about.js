import React, { useContext, useEffect, useState } from "react"
import { CursorContext } from "../components/CustomCursor/CursorManager"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { LiquidDistortion } from "../components/Blotter/liquidDistortion"
import hoverEffect from "hover-effect"
import overlay from "../images/overlay.png"
import image from "../images/gradient3.png"
import image2 from "../images/selfie.jpg"

function About({ location }) {
  const [isMobile, setMobile] = useState(window.innerHeight > 1450)
  const updateText = () => {
    setMobile(window.innerHeight > 1450)
  }
  const mouseContext = useContext(CursorContext)
  useEffect(() => {
    console.log("hello")
    window.addEventListener("resize", updateText)
    return () => window.removeEventListener("resize", updateText)
  }, [setMobile])

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
        <AboutContainer data-scroll-section>
          <Title
            data-scroll
            data-scroll-speed="2.0"
            onMouseEnter={() => {
              mouseContext.setSize("bigger")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            <LiquidDistortion text={"HELLO"} fontSize={400} />
          </Title>
          <Mobile
            data-scroll
            data-scroll-speed="3.8"
            onMouseEnter={() => {
              mouseContext.setSize("bigger")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            Hello
          </Mobile>
          <MainContainer>
            <AboutText
              onMouseEnter={() => {
                mouseContext.setSize("bigger")
              }}
              onMouseLeave={() => {
                mouseContext.setSize("small")
              }}
            >
              <H1 data-scroll data-scroll-speed="1.8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt minima molestiae totam vitae nisi, tempora adipisci
                error eaque natus voluptatem!
              </H1>
            </AboutText>
            <Item
              data-scroll
              data-scroll-speed="3.8"
              onMouseEnter={() => {
                mouseContext.setSize("bigger")
              }}
              onMouseLeave={() => {
                mouseContext.setSize("small")
              }}
            >
              <Header>
                <Name>The Developer</Name>
                <Span>01/06</Span>
              </Header>
              <Image></Image>
              <BottomText>
                <BottomSpan>current (image)</BottomSpan>
              </BottomText>
            </Item>
          </MainContainer>
        </AboutContainer>
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

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  border: 1px solid blue;
  margin: 15rem 1.5rem;
  margin-bottom: 20rem;
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 20rem 2.5rem;
  @media (max-width: 1440px) {
    flex-direction: column;
    margin: 0rem auto;
    margin-bottom: 0rem;
  }
`
const Title = styled.div`
  position: relative;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  height: 0vh;
  width: auto;
  top: 13rem;
  margin-left: 12rem;
  border: 1px solid red;
  @media (max-width: 1440px) {
    margin-left: -3rem;
    text-align: left;
    justify-content: left;
    display: none;
    top: 13rem;
  }
`
const Mobile = styled.h2`
  font-size: calc(19vmax * 9 / 16);
  text-align: center;
  text-transform: uppercase;
  margin-top: 10rem;
  @media (min-width: 1440px) {
    display: none;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 48rem;
  cursor: pointer;
  @media (max-width: 900px) {
    justify-content: flex-start;
    width: 28.1rem;
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
const Name = styled.div`
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
const AboutText = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  text-align: left;
  margin: 0rem 1.5rem;
  @media (max-width: 1440px) {
    margin: 0rem 1.5rem;
    width: 95vw;
    text-align: center;
    padding-left: 0rem;
  }
`
const H1 = styled.h2`
  font-size: calc(5.1vmax * 9 / 16);
  text-transform: uppercase;
  @media (max-width: 1440px) {
    font-size: calc(7vmax * 9 / 16);
  }
`

export default About
