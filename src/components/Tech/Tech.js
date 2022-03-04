import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap, Power3, Linear } from "gsap"
import star from "../../svg/flower.svg"
import image1 from "../../images/gradient1.png"
import image2 from "../../images/gradient2.png"
import image3 from "../../images/gradient3.png"
import image4 from "../../images/gradient4.png"
import styled, { keyframes } from "styled-components"

const Tech = () => {
  useEffect(() => {
    const tl = gsap.timeline()
  }, [])

  return (
    <TechContainer data-scroll-section id="direction">
      <TechItems>
        <Span>
          <TechItem>
            <Item1>
              <Title>These are the tech I like to use</Title>
              <Flower src={star} />
            </Item1>
          </TechItem>
          <Line />
        </Span>
      </TechItems>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "57vw" }}>React</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "10vw" }}>Gatsby</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "47vw" }}>Next</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "20vw" }}>Threejs</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "2vw" }}>WebGL</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "45vw" }}>Express</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "28vw" }}>Node</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "45vw" }}>Figma</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "60vw" }}>gsap</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "0vw" }}>Framer Motion</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "7vw" }}>styled components</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "43vw" }}>Photoshop</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1 style={{ paddingLeft: "0vw" }}>Illustrator</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
    </TechContainer>
  )
}

const TechContainer = styled.div`
  margin: 0rem 1.5rem;
  margin-top: 40rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`
const TechItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: min-content;
  width: 100%;
`
const TechItem = styled.div`
  align-items: baseline;
  @media (max-width: 768px) {
    justify-content: center;
  }
`
const Item1 = styled.div`
  display: flex;
  font-family: "Neutral Face";
  font-weight: 600;
  font-size: 50px;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-size: 5rem;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const H1 = styled.h1`
  font-size: 8rem;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const P = styled.p`
  align-self: flex-start;
  padding-top: 25px;
  padding-left: 5px;
  font-family: "Neutral Face";
  font-weight: lighter;
  font-size: 15px;
  @media (max-width: 768px) {
    padding-top: 0px;
    padding-left: 0px;
  }
`
const Span = styled.span`
  overflow: hidden;
`

const Line = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
  transform-origin: left top;
`

const Rotate360 = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
`
const Flower = styled.img`
  margin: orem 1.5rem;
  top: -1rem;
  left: 77vw;
  width: 100px;
  height: 100px;
  animation: ${Rotate360} 10s linear infinite;
`
export default Tech
