import React, { useContext } from "react"
import Marquee from "react-fast-marquee"
import styled from "styled-components"
import { CursorContext } from "../CustomCursor/CursorManager"

function Marquees() {
  const mouseContext = useContext(CursorContext)
  return (
    <Container>
      <MarqueeContainer
        data-scroll-section
        data-scroll
        data-scroll-speed="3"
        onMouseEnter={() => {
          mouseContext.setSize("big")
        }}
        onMouseLeave={() => {
          mouseContext.setSize("small")
        }}
      >
        <Element />
        <Marquee speed={120} gradient={false}>
          <H1>Lets Chat!</H1>
          <H1>Lets Chat!</H1>
          <H1>Lets Chat!</H1>
          <H1>Lets Chat!</H1>
        </Marquee>
        <Marquee speed={120} direction={"right"} gradient={false}>
          <H1>Lets Chat!</H1>
          <H1>Lets Chat!</H1>
          <H1>Lets Chat!</H1>
          <H1>Lets Chat!</H1>
        </Marquee>
      </MarqueeContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  border: 1px solid red;
  margin-bottom: 10rem;
  @media (max-width: 1440px) {
    /* margin-top: 20rem; */
  }
`

const MarqueeContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 10rem 1.5rem;
  cursor: none;
  height: min-content;
  @media (max-width: 1440px) {
    /* margin-top: 40rem;
    margin-bottom: 0rem; */
  }
`
const Element = styled.div`
  border-top: 2px solid black;
`
const H1 = styled.h1`
  font-weight: 600;
  font-style: italic;
  border-bottom: 2px solid black;
  font-size: 15rem;
  padding: 2rem;
`

export default Marquees
