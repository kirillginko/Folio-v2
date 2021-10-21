import React, { useEffect } from "react"
import styled from "styled-components"
import CircleType from "circletype"

const FixedWrapper = styled.div`
  position: relative;
  /* background-color: red; */
  width: 100vw;
  height: 20vh;
`
const AboutHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  /* background-color: #ffffff; */
`
const Circle = styled.div`
  font-size: 2.5vmin;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  animation: spin 14s linear infinite;
  color: #181bcc;
  /* filter: blur(0.6px); */
  .text:after {
    content: ".";
    visibility: hidden;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
const AboutText = styled.div``

function About() {
  useEffect(() => {
    let circ = new CircleType(document.getElementById("circle"))
  }, [])
  return (
    <FixedWrapper data-scroll-section>
      <AboutHeader>
        <Circle id="circle">
          <div className="text">Making.Cool.Stuff.In.Montreal. </div>
        </Circle>
        {/* <AboutText>
          <h2>
            My focus is to create unique digital products that bring a
            user-friendy, design-driven interactive experience to companies and
            brands.
          </h2>
        </AboutText> */}
      </AboutHeader>
    </FixedWrapper>
  )
}

export default About
