import React from "react"
import styled from "styled-components"

function Skills() {
  return (
    <Container data-scroll-section>
      <SkillItem>
        <A>1</A>React
      </SkillItem>
      <SkillItem>
        <A>2</A>Gatsby
      </SkillItem>
      <SkillItem>
        <A>3</A>Threejs
      </SkillItem>
      <SkillItem>
        <A>4</A>WebGL
      </SkillItem>
      <SkillItem>
        <A>5</A>NextJs
      </SkillItem>
      <SkillItem>
        <A>6</A>Express
      </SkillItem>
      <SkillItem>
        <A>6</A>JavaScript
      </SkillItem>
      <SkillItem>
        <A>7</A>Nodejs
      </SkillItem>
      <SkillItem>
        <A>8</A>CSS
      </SkillItem>
      <SkillItem>
        <A>9</A>HTML
      </SkillItem>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border: 1px solid red;
  max-width: 100%;
  margin: 10rem 1.5rem;
`
const SkillItem = styled.h1`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  font-size: 5vw;
  padding-right: 1rem;
  margin-bottom: 1rem;
`
const A = styled.a`
  font-size: 2vw;
  padding-right: 0.5rem;
`

export default Skills
