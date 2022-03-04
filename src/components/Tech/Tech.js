import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap, Power3 } from "gsap"
import "./tech.css"
import image1 from "../../images/gradient1.png"
import image2 from "../../images/gradient2.png"
import image3 from "../../images/gradient3.png"
import image4 from "../../images/gradient4.png"
import styled from "styled-components"

const Tech = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(".sub-header", {
      y: -100,
      duration: 0.5,
      stagger: {
        amount: 0.4,
      },
    })
    tl.from(Line, {
      duration: 1,
      width: "0%",
      stagger: {
        amount: 2,
      },
    })
    tl.from(
      "h1,p",
      {
        y: 150,
        duration: 0.5,
        stagger: {
          amount: 2.5,
        },
      },
      "-=3"
    )
  }, [])

  return (
    <TechContainer data-scroll-section id="direction">
      <TechItems>
        <Span>
          <TechItem>
            <Item1>
              <Title>These are the tech I like to use</Title>
              <StaticImage src={image1} alt="Art" />
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
  margin: 20rem 1.5rem;
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

export default Tech
