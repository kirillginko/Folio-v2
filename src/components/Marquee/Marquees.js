import React, { useContext } from "react"
import Marquee from "react-fast-marquee"
import styled from "styled-components"
import { CursorContext } from "../CustomCursor/CursorManager"

function Marquees() {
  const mouseContext = useContext(CursorContext)
  return (
    <>
      <MarqueeContainer
        data-scroll-section
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
    </>
  )
}

const MarqueeContainer = styled.div`
  position: relative;
  justify-content: center;
  margin: 10rem 1.5rem;
  margin-bottom: 10rem;
  height: 100vh;
  cursor: none;
`
const Element = styled.div`
  border-top: 2px solid blue;
`
const H1 = styled.h1`
  color: blue;
  font-family: Hatton;
  font-weight: Lighter;
  font-style: italic;
  border-bottom: 2px solid blue;
  font-size: 15rem;
  padding: 2rem;
`

export default Marquees
