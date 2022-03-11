import React from "react"
import Marquee from "react-fast-marquee"
import styled from "styled-components"

function Marquees() {
  return (
    <>
      <MarqueeContainer data-scroll-section>
        <Element />
        <Marquee speed={120} gradient={false} pauseOnHover={true}>
          <H1>Lets Chat!</H1>
          <H1>Lets Chat!</H1>
        </Marquee>
        <Marquee
          speed={120}
          direction={"right"}
          gradient={false}
          pauseOnHover={true}
        >
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
  height: 50vh;
`
const Element = styled.div`
  border-top: 2px solid black;
`
const H1 = styled.h1`
  border-bottom: 2px solid black;
  font-size: 15rem;
  padding: 2rem;
`

export default Marquees
