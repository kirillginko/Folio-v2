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
        </Marquee>
        <Marquee speed={120} direction={"right"} gradient={false}>
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
  margin: 0 1.5rem;
  height: 53vh;
  cursor: none;
`
const Element = styled.div`
  border-top: 4px solid white;
`
const H1 = styled.h1`
  color: white;
  font-family: Hatton;
  font-weight: Lighter;
  border-bottom: 4px solid white;
  font-size: 12rem;
  padding: 2rem;
`

export default Marquees
