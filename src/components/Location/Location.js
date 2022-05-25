import React, { useEffect } from "react"
import styled from "styled-components"
import CircleType from "circletype"

function Location() {
  useEffect(() => {
    new CircleType(document.getElementById("circle"))
  }, [])
  return (
    <Container data-scroll-section>
      <ContentWrapper>
        <TextContainer>
          <H2
            data-scroll
            data-scroll-delay="0.18"
            data-scroll-speed="-.5"
            data-scroll-repeat
          >
            Currently
          </H2>
          <H2
            data-scroll
            data-scroll-delay="0.14"
            data-scroll-speed="-.5"
            data-scroll-repeat
            style={{ textAlign: "end" }}
          >
            Based In
          </H2>
          <BottomContent>
            <H2
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="-.5"
              data-scroll-repeat
              style={{ textAlign: "end" }}
            >
              NYC
            </H2>
            <CircleWrapper>
              <Circle id="circle">
                <div className="text">
                  Based in NYC . Based in NYC . Based in NYC . Based in NYC .
                </div>
              </Circle>
            </CircleWrapper>
          </BottomContent>
        </TextContainer>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0rem 1.5rem;
  margin-top: 20rem;
  margin-bottom: 20rem;
  border: 1px solid red;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: start;
  width: min-content;
  flex-direction: column;
  border: 1px solid blue;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* margin-left: 12rem; */
`
const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`
const H2 = styled.h2`
  font-size: calc(20vmax * 9 / 16);
  font-family: ivypresto-display, serif;
  position: relative;
  text-transform: uppercase;
  font-weight: 100;
  font-style: bold;
  padding-bottom: 2rem;
  @media (max-width: 1440px) {
    font-size: calc(10vmax * 9 / 16);
    padding-bottom: 2rem;
  }
`
const CircleWrapper = styled.div`
  position: relative;
  height: min-content;
  padding-right: 8rem;
  padding-left: 10rem;
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
    font-size: calc(1.5vmax * 9 / 16);
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
