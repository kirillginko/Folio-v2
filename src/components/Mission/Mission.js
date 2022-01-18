import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import selfie from "../../images/selfie.jpg"

function Mission() {
  return (
    <Container data-scroll-section id="scroll-direction">
      <Img>
        <StaticImage src="../../images/selfie.jpg" />
      </Img>
      <Goals>
        <H2Left>
          My goal is to provide companies, brands, and entrepreneurs with
          interactive digital products and create inspired user experiences that
          showcase strong brand identity.
        </H2Left>
        <H2Right>
          I'm Interested in UI, Typography, Branding, Photography, and bringing
          full concepts to life!
        </H2Right>
      </Goals>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`
const Goals = styled.div`
  display: flex;
  justify-content: space-between;
`
const H2Left = styled.div`
  font-size: calc(5vmax * 9 / 16);
  color: white;
  font-weight: 100;
  justify-content: flex-start;
  padding-left: 7rem;
  max-width: 60%;
  text-align: left;
  @media (max-width: 900px) {
    justify-content: center;
    max-width: 100%;
    padding-left: 1rem;
  }
  /* border: 1px solid blue; */
`
const H2Right = styled.div`
  font-size: calc(3vmax * 9 / 16);
  color: white;
  font-weight: 100;
  margin-top: 20rem;
  padding-right: 3rem;
  justify-content: flex-end;
  text-align: end;
  @media (max-width: 900px) {
    margin-top: 15rem;
    font-size: calc(5vmax * 9 / 16);
    justify-content: center;
    max-width: 100%;
    padding-right: 1rem;
  }
`
const Img = styled.div`
  position: absolute;
  top: -10%;
  right: 20%;
  max-width: 30rem;
  z-index: -10;
  @media (max-width: 900px) {
    right: 2.5rem;
    top: -10%;
    max-width: 20rem;
  }
`
export default Mission
