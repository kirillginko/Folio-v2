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
    <TechContainer data-scroll-section>
      <TechItems>
        <Span>
          <TechItem>
            <Item1>
              <H1>
                These are the tech <Space1 /> I like <Space1 />
                to use
              </H1>
              <P>2022</P>
            </Item1>
          </TechItem>
          <Line />
        </Span>
      </TechItems>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>React</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Gatsby</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Next</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Threejs</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>WebGL</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Express</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Node</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Figma</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Framer Motion</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>gsap</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>styled components</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Photoshop</H1>
            <P>2022</P>
          </Item1>
        </TechItem>
        <Line />
      </Span>
      <Span>
        <TechItem>
          <Item1>
            <Space2 />
            <H1>Illustrator</H1>
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
`
const Item1 = styled.div`
  display: flex;
  font-family: "Neutral Face";
  font-weight: 600;
  font-size: 50px;
  text-transform: uppercase;
`
const Space1 = styled.span`
  padding-right: 10rem;
  @media (max-width: 768px) {
    padding-right: 0rem;
  }
`
const Space2 = styled.span`
  padding-right: 55rem;
  @media (max-width: 768px) {
    padding-right: 15rem;
  }
`
const H1 = styled.h1`
  font-size: 8rem;
  padding: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 3rem;
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
const ImgSpan = styled.span`
  height: 80px;
  margin: 0px 2px;
  margin-left: -100px;
  transform-origin: left;
  object-fit: contain;
  transition: all 0.45s cubic-bezier(0.39, 0.575, 0.565, 1);
`
const Gradient = styled.img`
  height: 80px;
  /* margin: 0px 2px;
  margin-left: -100px;
  transform-origin: left;
  object-fit: contain;
  transition: all 0.45s cubic-bezier(0.39, 0.575, 0.565, 1);
  $:hover {
    margin-left: 2px;
  } */
`
const Line = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
  transform-origin: left top;
`

export default Tech
