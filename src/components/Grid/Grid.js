import React, { useContext } from "react"
import { CursorContext } from "../CustomCursor/CursorManager"
import styled from "styled-components"
import gradient2 from "../../images/gradient2.png"

function Grid() {
  const mouseContext = useContext(CursorContext)

  const mouseEnterHandler = () => {
    mouseContext.setSize("bigger")
  }
  const mouseLeaveHandler = () => {
    mouseContext.setSize("small")
  }

  return (
    <Container data-scroll-section id="direction">
      <Title
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-target="#direction"
        data-scroll-speed="1"
        data-scroll-delay="0.5"
      >
        SKILLS
      </Title>
      <SkillsList>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.5"
        >
          React
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.5"
        >
          Node.js
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.5"
        >
          WebGL
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.5"
        >
          Three.js
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.5"
        >
          Express
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.1"
        >
          Ruby
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.1"
        >
          Photoshop
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.1"
        >
          Indesign
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.1"
        >
          Final Cut
        </GridItem>
        <GridItem
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-target="#direction"
          data-scroll-speed=".8"
          data-scroll-delay="0.1"
        >
          Figma
        </GridItem>
      </SkillsList>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  margin: 15rem 1.5rem;
  margin-top: 30rem;
  @media (max-width: 1480px) {
    margin-top: 5rem;
    height: 120vh;
  }
`
const SkillsList = styled.div`
  display: grid;
  justify-content: space-around;
  align-content: center;
  grid-template-columns: repeat(5, 20rem);
  grid-template-rows: repeat(4, 12rem);
  grid-gap: 1rem;
  @media (max-width: 1480px) {
    grid-template-columns: repeat(3, 20rem);
    grid-template-rows: repeat(4, 13.5rem);
  }
  @media (max-width: 980px) {
    justify-content: space-around;
    grid-template-rows: repeat(6, 15rem);
    grid-template-columns: repeat(2, 13.5rem);
  }
`
const GridItem = styled.div`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 2rem 2rem;
  background-color: rgba(151, 151, 151, 0);
  grid-column: span 1;
  border: 0.5px solid;
  background: linear-gradient(to bottom, #000 50%, #ffffff1d 50%);
  background-size: 100% 200%;
  background-position: bottom;
  transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1); */
  &:hover {
    /* background-color: blue; */
    transform: scale(1.1);
    background-position: top;
  }
  @media (max-width: 900px) {
    text-align: center;
    padding-top: 4rem;
  }
`
const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  color: blue;
  margin-bottom: 2rem;
`
const Image = styled.img`
  width: 300px;
  height: 300px;
`
export default Grid
