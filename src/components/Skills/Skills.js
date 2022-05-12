import React from "react"
import styled from "styled-components"

function Skills() {
  return (
    <Container data-scroll-section>
      <AboutTitle data-scroll data-scroll-speed="2.0">
        <H2>Skills</H2>
        <Line />
      </AboutTitle>
      <Title data-scroll data-scroll-speed="2.0">
        <H1>The Technologies I like to work with:</H1>
      </Title>
      <SkillsList>
        <SkillItem data-scroll data-scroll-speed="1.8">
          <A>1</A>React
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.8">
          <A>2</A>Gatsby
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.8">
          <A>3</A>Three.js
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.2">
          <A>4</A>WebGL
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.2">
          <A>5</A>Next.js
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.2">
          <A>6</A>Express
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.5">
          <A>6</A>Gsap
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.5">
          <A>6</A>Ruby
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.5">
          <A>6</A>Firebase
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.0">
          <A>6</A>P5.js
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.0">
          <A>7</A>JavaScript
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.0">
          <A>8</A>Nodejs
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.5">
          <A>9</A>Framer-Motion
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.5">
          <A>8</A>CSS
        </SkillItem>
        <SkillItem data-scroll data-scroll-speed="1.5">
          <A>9</A>HTML
        </SkillItem>
      </SkillsList>
    </Container>
  )
}

const Container = styled.div`
  margin: 20rem 1.5rem;
  max-width: 100%;
  height: 100vh;
  border: 1px solid red;
`
const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-start;
`
const SkillItem = styled.h1`
  display: flex;
  font-family: brother-1816, sans-serif;
  flex-direction: row;
  font-size: calc(10vmax * 9 / 16);
  padding-right: 1rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  &:nth-child(even) {
    font-family: ivypresto-display, serif;
    font-weight: 300;
    font-style: italic;
  }
  @media (max-width: 1440px) {
    padding-left: 0rem;
  }
`
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10rem;
  padding-bottom: 1rem;
  fontweight: 600;
`
const AboutTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 0vh;
  width: auto;
  border: 1px solid red;
  margin: 12rem 2.5rem;
  @media (max-width: 1440px) {
    top: 10rem;
  }
`
const Line = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
  border: 2px solid black;
  height: 0px;
  width: calc(24vmax * 9 / 16);
  @media (max-width: 1440px) {
    width: calc(30vmax * 9 / 16);
  }
`
const H1 = styled.h1`
  font-family: brother-1816, sans-serif;
  font-size: calc(4vmax * 9 / 16);
  font-weight: 600;
  border-bottom: 2px solid black;
  text-transform: uppercase;
  margin-left: 2rem;
  @media (max-width: 1440px) {
    font-size: 4vw;
    margin-left: 0rem;
  }
`
const H2 = styled.h2`
  font-size: calc(7.1vmax * 9 / 16);
  text-transform: uppercase;
  @media (max-width: 1440px) {
    font-size: calc(9vmax * 9 / 16);
  }
`
const A = styled.a`
  font-size: 2vw;
  font-family: brother-1816, sans-serif;
  padding-right: 0.5rem;
`

export default Skills
