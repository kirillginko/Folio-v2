import React, { useContext } from "react"
import { CursorContext } from "../CustomCursor/CursorManager"
import styled from "styled-components"

function Intro() {
  const mouseContext = useContext(CursorContext)

  const mouseEnterHandler = () => {
    mouseContext.setSize("bigger")
  }
  const mouseLeaveHandler = () => {
    mouseContext.setSize("small")
  }

  return (
    <Container data-scroll-section>
      <Target></Target>
      <Text onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <H2 data-scroll data-scroll-speed="1.5" data-scroll-delay=".5">
          Research & Strategy
        </H2>
      </Text>
      <Text>
        <H2
          data-scroll
          data-scroll-to=""
          data-scroll-speed="2.5"
          data-scroll-delay=".8"
          style={{ fontWeight: "100", fontStyle: "italic" }}
        >
          Visual Design
        </H2>
      </Text>
      <Text onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <H2 data-scroll data-scroll-speed="3.5" data-scroll-delay="1.2">
          Minimal
        </H2>
      </Text>
      <Text>
        <H2
          data-scroll
          data-scroll-to=""
          data-scroll-speed="4.5"
          data-scroll-delay="1.5"
          style={{ fontWeight: "100", fontStyle: "italic" }}
        >
          Full-Stack Development
        </H2>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80vh;
  width: 100vw;
  border: 1px solid red;
  margin-bottom: 35rem;
  margin-top: 30rem;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0rem 1.5rem;
  /* border: 1px solid red; */
  overflow: hidden;
`
const Target = styled.div`
  display: relative;
  height: 20rem;
  width: 100%;
`
const H2 = styled.h2`
  font-size: calc(15vmax * 9 / 16);
  text-transform: uppercase;
  padding: 10rem 0rem;
`
export default Intro
