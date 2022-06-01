import React from "react"
import styled from "styled-components"

function Intro() {
  return (
    <Container data-scroll-section>
      <Text>
        <H2 data-scroll data-scroll-speed="1.5" data-scroll-delay=".5">
          Discover
        </H2>
      </Text>
      <Text>
        <H2
          data-scroll
          data-scroll-speed="2.5"
          data-scroll-delay=".8"
          style={{ fontWeight: "100", fontStyle: "italic" }}
        >
          The best in
        </H2>
      </Text>
      <Text>
        <H2 data-scroll data-scroll-speed="3.5" data-scroll-delay="1.2">
          Minimal
        </H2>
      </Text>
      <Text>
        <H2
          data-scroll
          data-scroll-speed="4.5"
          data-scroll-delay="1.5"
          style={{ fontWeight: "100", fontStyle: "italic" }}
        >
          Design
        </H2>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: min-content;
  width: 100vw;
  border: 1px solid red;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0rem 1.5rem;
  border: 1px solid red;
  overflow: hidden;
`
const H2 = styled.h2`
  font-size: calc(15vmax * 9 / 16);
`
export default Intro
