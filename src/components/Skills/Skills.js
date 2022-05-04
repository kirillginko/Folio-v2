import React from "react"
import styled from "styled-components"

function Skills() {
  return (
    <Container data-scroll-section>
      <Title>
        <H1>The Technologies I like to work with:</H1>
      </Title>
      <SkillsList>
        <SkillItem>
          <A>1</A>React
        </SkillItem>
        <SkillItem>
          <A>2</A>Gatsby
        </SkillItem>
        <SkillItem>
          <A>3</A>Three.js
        </SkillItem>
        <SkillItem>
          <A>4</A>WebGL
        </SkillItem>
        <SkillItem>
          <A>5</A>Next.js
        </SkillItem>
        <SkillItem>
          <A>6</A>Express
        </SkillItem>
        <SkillItem>
          <A>6</A>Gsap
        </SkillItem>
        <SkillItem>
          <A>6</A>Ruby
        </SkillItem>
        <SkillItem>
          <A>6</A>Firebase
        </SkillItem>
        <SkillItem>
          <A>6</A>P5.js
        </SkillItem>
        <SkillItem>
          <A>7</A>JavaScript
        </SkillItem>
        <SkillItem>
          <A>8</A>Nodejs
        </SkillItem>
        <SkillItem>
          <A>9</A>Framer-Motion
        </SkillItem>
        <SkillItem>
          <A>8</A>CSS
        </SkillItem>
        <SkillItem>
          <A>9</A>HTML
        </SkillItem>
      </SkillsList>
    </Container>
  )
}

const Container = styled.div`
  margin: 10rem 1.5rem;
  max-width: 100%;
`
const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-start;
  /* border: 1px solid red; */
`
const SkillItem = styled.h1`
  display: flex;
  font-family: brother-1816, sans-serif;
  flex-direction: row;
  font-size: 6vw;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  &:nth-child(even) {
    font-family: ivypresto-display, serif;
    font-weight: 300;
    font-style: italic;
  }
`
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1rem;
  /* border: 1px solid blue; */
`
const H1 = styled.h1`
  font-family: brother-1816, sans-serif;
  font-size: 3vw;
  font-weight: 600;
  border-bottom: 4px solid black;
  text-transform: uppercase;
  margin-left: 2.5rem;
`
const A = styled.a`
  font-size: 2vw;
  font-family: brother-1816, sans-serif;
  padding-right: 0.5rem;
`

export default Skills
