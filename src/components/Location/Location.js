import React, { useEffect } from "react"
import styled from "styled-components"
import CircleType from "circletype"

function Location() {
  useEffect(() => {
    new CircleType(document.getElementById("circle"))
  }, [])
  return (
    <Container data-scroll-section>
      <Content>
        <H2>Currently</H2>
      </Content>
      <Content style={{ justifyContent: "flex-start" }}>
        <H2>Based</H2>
      </Content>
      <Content>
        <CircleWrapper>
          <Circle id="circle">
            <div className="text">
              Based in NYC . Based in NYC . Based in NYC . Based in NYC .
            </div>
          </Circle>
        </CircleWrapper>
        <LowerContent>
          <H2>In</H2>
          <LowerText>
            <H2>NYC</H2>
          </LowerText>
        </LowerContent>
      </Content>
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
  margin-top: 60rem;
  margin-bottom: 10rem;
  /* border: 1px solid red; */
`
const Content = styled.div`
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
    flex-direction: column;
    margin: 0rem 0rem;
  }
`
const LowerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  width: 100%;
  @media (max-width: 1440px) {
    justify-content: row;
    text-align: center;
`
const LowerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: end;
  width: 100%;
  /* border: 1px solid lime; */
  @media (max-width: 1440px) {
    justify-content: row;
    text-align: center;
  }
`
const H2 = styled.h2`
  font-size: calc(17vmax * 9 / 16);
  position: relative;
  text-transform: uppercase;
  font-weight: 100;
  font-style: bold;
  padding-bottom: 2rem;
  @media (max-width: 1440px) {
    font-size: calc(10vmax * 9 / 16);
  }
`
const CircleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: min-content;
  width: 100%;
  @media (min-width: 2040px) {
    left: 15rem;
    /* width: 50%; */
  }
  @media (max-width: 1440px) {
    justify-content: center;
    text-align: center;
  }
`
const Circle = styled.div`
  position: relative;
  top: 0;
  font-family: brother-1816, sans-serif;
  font-size: calc(1vmax * 25 / 16);
  font-weight: bold;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  height: min-content;
  animation: spin 14s linear infinite;
  color: #181bcc;
  @media (max-width: 1440px) {
    font-size: calc(2.5vmax * 9 / 16);
    left: 0;
  }
  @media (min-width: 1440px) {
    font-size: calc(2.5vmax * 9 / 16);
    left: 15rem;
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
