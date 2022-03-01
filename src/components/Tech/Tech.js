import React, { useEffect } from "react"
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
            </Item1>
          </TechItem>
          <Line />
        </Span>
      </TechItems>
      <Span>
        <TechItem>
          <Item1>
            <H1
              style={{ paddingLeft: "57vw" }}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.05"
            >
              React
            </H1>
            <P
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.05"
            >
              2022
            </P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1
              style={{ paddingLeft: "10vw" }}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="1"
              data-scroll-delay="0.10"
            >
              Gatsby
            </H1>
            <P
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="1"
              data-scroll-delay="0.10"
            >
              2022
            </P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1
              style={{ paddingLeft: "47vw" }}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.15"
            >
              Next
            </H1>
            <P
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.15"
            >
              2022
            </P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1
              style={{ paddingLeft: "20vw" }}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="1"
              data-scroll-delay="0.05"
            >
              Threejs
            </H1>
            <P
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="1"
              data-scroll-delay="0.05"
            >
              2022
            </P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1
              style={{ paddingLeft: "2vw" }}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.25"
            >
              WebGL
            </H1>
            <P
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.25"
            >
              2022
            </P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1
              style={{ paddingLeft: "54vw" }}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="1"
              data-scroll-delay="0.15"
            >
              Express
            </H1>
            <P
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="1"
              data-scroll-delay="0.15"
            >
              2022
            </P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <H1
              style={{ paddingLeft: "28vw" }}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.15"
            >
              Node
            </H1>
            <P
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-2"
              data-scroll-delay="0.15"
            >
              2022
            </P>
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
            <H1 style={{ paddingLeft: "53vw" }}>Photoshop</H1>
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
