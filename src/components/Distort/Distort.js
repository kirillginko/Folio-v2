import React, { useEffect } from "react"
// import { StaticImage } from "gatsby-plugin-image"
import hoverEffect from "hover-effect"
import image from "../../images/gradient3.png"
import image2 from "../../images/selfie.jpg"
import overlay from "../../images/overlay.png"
import styled from "styled-components"

function Distort() {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(Image),
      intensity: 0.3,
      image1: image,
      image2: image2,
      displacementImage: overlay,
    })
  }, [])
  return (
    <Container data-scroll-section>
      <Item data-scroll data-scroll-direction="vertical">
        <Header>
          <Name>The Developer</Name>
          <Span>01/06</Span>
        </Header>
        <Image></Image>
        <BottomText>
          <BottomSpan>current (image)</BottomSpan>
        </BottomText>
      </Item>
      <About>
        <H2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          minima molestiae totam vitae nisi, tempora adipisci error eaque natus
          voluptatem!
        </H2>
      </About>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 60vh;
  width: 100%;
  margin: 20rem auto;
  z-index: 30;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30rem;
  cursor: pointer;
`
const Header = styled.div`
  display: flex;
  color: antiquewhite;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5vh;
  border-bottom: 1px dashed antiquewhite;
`
const Name = styled.div`
  width: 50%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`
const Span = styled.span`
  font-size: 1vh;
  font-weight: bold;
  text-transform: uppercase;
`
const Image = styled.div`
  height: 25rem;
  background-color: gray;
  margin: 10px 0px;
`
const BottomText = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px dashed antiquewhite;
  padding-top: 5px;
`
const BottomSpan = styled.span`
  color: antiquewhite;
  font-size: 1vh;
  font-weight: bold;
  text-transform: uppercase;
`
const About = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  width: 65vw;
  text-align: left;
  margin: 1rem 1.5rem;
  padding-left: 5rem;
  @media (max-width: 1200px) {
    width: 95vw;
    padding-left: 0rem;
  }
`
const H2 = styled.h2`
  font-size: calc(8vmax * 9 / 16);
  @media (max-width: 1200px) {
    /* font-size: 10vw; */
  }
`

export default Distort
