import React, { useEffect, useContext } from "react"
// import { StaticImage } from "gatsby-plugin-image"
import hoverEffect from "hover-effect"
import image from "../../images/gradient3.png"
import image2 from "../../images/selfie.jpg"
import overlay from "../../images/overlay.png"
import styled from "styled-components"
import { CursorContext } from "../CustomCursor/CursorManager"
import { LiquidDistortion } from "../Blotter/liquidDistortion"

function Distort() {
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
    <>
      <AboutContainer data-scroll-section>
        <Title>
          <H2>ABOUT</H2>
          <Line />
        </Title>
        <MainContainer>
          <Item
            data-scroll
            data-scroll-speed="2.8"
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
          <About
            onMouseEnter={() => {
              mouseContext.setSize("bigger")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            <H1 data-scroll data-scroll-speed="1.8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              minima molestiae totam vitae nisi, tempora adipisci error eaque
              natus voluptatem!
            </H1>
          </About>
        </MainContainer>
      </AboutContainer>
    </>
  )
}
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  border: 1px solid blue;
  margin: 0rem 1.5rem;
  margin-bottom: 20rem;
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 20rem 2.5rem;
  z-index: 30;
  @media (max-width: 1440px) {
    flex-direction: column;
    margin: 30rem auto;
    margin-bottom: 30rem;
  }
`
const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 0vh;
  width: auto;
  top: 13rem;
  border: 1px solid red;
  margin: 5rem 2.5rem;
  margin-bottom: 10rem;
  @media (max-width: 1440px) {
    top: 25rem;
  }
`
const Line = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
  border: 2px solid black;
  height: 0px;
  width: calc(25vmax * 9 / 16);
  @media (max-width: 1440px) {
    width: calc(40vmax * 9 / 16);
  }
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 58rem;
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
  height: 58rem;
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
const About = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  text-align: left;
  margin: 0rem 1.5rem;
  @media (max-width: 1440px) {
    margin: 0rem 1.5rem;
    margin-top: 5rem;
    width: 95vw;
    text-align: center;
    padding-left: 0rem;
  }
`
const H1 = styled.h2`
  font-size: calc(7.1vmax * 9 / 16);
  text-transform: uppercase;
  @media (max-width: 1440px) {
    font-size: calc(7vmax * 9 / 16);
  }
`
const H2 = styled.h2`
  font-size: calc(7.1vmax * 9 / 16);
  text-transform: uppercase;
  @media (max-width: 1440px) {
    font-size: calc(12vmax * 9 / 16);
  }
`

export default Distort
