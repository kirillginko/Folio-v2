import React, { useEffect } from "react"
import styled from "styled-components"
import Bluebox from "../../images/blue.jpg"
import image2 from "../../images/selfie.jpg"
import hoverEffect from "hover-effect"
import overlay from "../../images/overlay.png"

function Intro() {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(Img),
      intensity: 0.3,
      image1: Bluebox,
      image2: image2,
      displacementImage: overlay,
    })
  }, [])
  return (
    <Container data-scroll-section>
      <TopContainer>
        <H2>FULL-STACK DEVELOPER</H2>
      </TopContainer>
      <Img></Img>
      <BottomContainer>
        <Span>↓</Span>
        <H3>I SUPPORT DESIGNERS AND AGENCIES WITH CREATIVE DEVELOPMENT</H3>
        <H2>Kirill Ginko</H2>
      </BottomContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid red;
  height: min-content;
  margin: 0rem 1.5rem;
`
const TopContainer = styled.div`
  display: inline-block;
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  border: 1px solid blue;
`
const H2 = styled.h2`
  font-size: 11rem;
  padding-bottom: 2rem;
`
const H3 = styled.h2`
  font-size: 2rem;
`
const Span = styled.span`
  height: 7rem;
  width: 20rem;
  font-size: 15rem;
  padding-left: 6rem;
  line-height: 3rem;
  margin-top: 3rem;
  border: 1px solid red;
  overflow: hidden;
`
const Img = styled.div`
  position: relative;
  height: 40rem;
  width: 40rem;
  background-color: gray;
  cursor: none;
`

export default Intro
