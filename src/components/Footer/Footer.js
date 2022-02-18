import React from "react"
import { media } from "../../styles/media"
import styled from "styled-components"

const FixedWrapper = styled.div`
  position: relative;
  background-color: #000000;
  height: 20vh;
  margin-top: 20rem;
`
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  text-transform: uppercase;
`
const StyledText = styled.span`
  color: #fff;
  font-size: 1rem;
  user-select: none;
  ${media.tablet`font-size: 16px;`};
`
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  display: inline-block;
  margin: 0 1.5rem;
  padding-top: 1rem;
`
const H1 = styled.h2`
  font-size: 0.9rem;
  color: #fff;
`
const H2 = styled.h2`
  font-size: 0.8rem;
  padding-top: 0.5rem;
  font-weight: 100;
  color: #fff;
`

const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()

  return (
    <>
      <FixedWrapper data-scroll-section>
        <ContentWrapper>
          <Content>
            <H1>Contact</H1>
            <H2>Email: kirillginko@gmail.com</H2>
            <H2>Phone: +301-512-4249</H2>
          </Content>
          <Content>
            <H1>Socials</H1>
            <H2>Instagram</H2>
            <H2>Github</H2>
            <H2>Behence</H2>
          </Content>
          <Content>
            <H1>Pages</H1>
            <H2>Home</H2>
            <H2>Work</H2>
            <H2>About</H2>
          </Content>
        </ContentWrapper>
        <StyledFooter>
          <small>
            <StyledText>&copy; {y}</StyledText>
          </small>
          <small>
            <StyledText>45.5017° N, 73.5673° W</StyledText>
          </small>
        </StyledFooter>
      </FixedWrapper>
    </>
  )
}

export default Footer
