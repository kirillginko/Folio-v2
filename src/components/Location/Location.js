import React, { useEffect } from "react"
import styled from "styled-components"
import CircleType from "circletype"

function Location() {
  useEffect(() => {
    new CircleType(document.getElementById("circle"))
  }, [])
  return (
    <Container data-scroll-section>
      <TopContent>
        <H2>Currently</H2>
      </TopContent>
      <TopContent style={{ justifyContent: "flex-start" }}>
        <H2>Based</H2>
      </TopContent>
      <TopContent style={{ justifyContent: "center" }}>
        <H2>in</H2>
      </TopContent>
      <TopContent style={{ justifyContent: "flex-end" }}>
        <H2>nyc</H2>
        <CircleWrapper>
          <Circle id="circle">
            <div className="text">
              Based in NYC . Based in NYC . Based in NYC . Based in NYC .
            </div>
          </Circle>
        </CircleWrapper>
      </TopContent>
    </Container>
  )
}

const Container = styled.div`
  position: relative
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  margin: 0rem 1.5rem;
  margin-top: 20rem;
  margin-bottom: 10rem;
  border: 1px solid red;
`
const TopContent = styled.div`
  position: relative;
  display: Flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  height: min-content;
  margin: 0rem 10rem;
  border: 1px solid red;
  @media (max-width: 1440px) {
    justify-content: center;
    margin: 0rem 0rem;
  }
`
const H2 = styled.h2`
  font-size: calc(17vmax * 9 / 16);
  /* font-family: ivypresto-display, serif; */
  position: relative;
  text-transform: uppercase;
  font-weight: 100;
  font-style: bold;
  padding-bottom: 2rem;
  @media (max-width: 1440px) {
    font-size: calc(15vmax * 9 / 16);
  }
`
const CircleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: min-content;
  margin: 0rem 15rem;
  border: 1px solid blue;
`
const Circle = styled.div`
  position: relative;
  top: 0;
  font-family: brother-1816, sans-serif;
  font-size: calc(1vmax * 9 / 16);
  font-weight: bold;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  height: min-content;
  animation: spin 14s linear infinite;
  color: #181bcc;
  @media (max-width: 1440px) {
    font-size: calc(2.5vmax * 9 / 16);
  }
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

export default Location
