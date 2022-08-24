import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { CursorContext } from "../CustomCursor/CursorManager"

const Footer = () => {
  const mouseContext = useContext(CursorContext)
  const d = new Date()
  const y = d.getFullYear()

  return (
    <>
      <FixedWrapper data-scroll-section>
        <ContentWrapper>
          <Content
            style={{ width: "15rem" }}
            onMouseEnter={() => {
              mouseContext.setSize("big")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            <Title style={{ textAlign: "left" }}>Contacts</Title>
            <StyledLink
              href="mailto:kirill@kirillginko.com?subject=Lets Make Something Cool!&body=Hi Kirill,"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Email: kirill@kirillginko.com
            </StyledLink>
            <H2>Phone: +301-512-4249</H2>
          </Content>
          <Content
            onMouseEnter={() => {
              mouseContext.setSize("big")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            <Title>Socials</Title>
            <StyledLink
              href="https://www.instagram.com/co_existenz/"
              target="_blank"
            >
              Instagram
            </StyledLink>
            <StyledLink
              href="https://www.github.com/kirillginko"
              target="_blank"
            >
              Github
            </StyledLink>
            <StyledLink
              href="https://www.linkedin.com/in/kirill-ginko-a613433a/"
              target="_blank"
            >
              LinkdIn
            </StyledLink>
          </Content>
          <Content
            onMouseEnter={() => {
              mouseContext.setSize("big")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            <Title style={{ textAlign: "right" }}>Links</Title>
            <StyledNav to="/">Home</StyledNav>
            <StyledNav to="/projects">Work</StyledNav>
            <StyledNav to="/about">About</StyledNav>
          </Content>
        </ContentWrapper>
        <StyledWrapper>
          <StyledFooter>
            <StyledText>&copy; {y}</StyledText>
            <StyledText>40.7128° N, 74.0060° W</StyledText>
          </StyledFooter>
        </StyledWrapper>
      </FixedWrapper>
    </>
  )
}

const FixedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 0;
  background-color: var(--black);
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0rem 1.5rem;
  margin-bottom: 2rem;
`
const Content = styled.div`
  height: 8rem;
  width: 12rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  &:nth-child(1) {
    text-align: left;
  }
  &:nth-child(3) {
    text-align: right;
  }
`
const StyledLink = styled.a`
  display: block;
  font-size: 0.8rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--blue);
  }
`
const StyledNav = styled(Link)`
  display: block;
  font-size: 0.8rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--blue);
  }
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4rem;
  margin-bottom: 0.5rem;
  width: 100%;
`
const Title = styled.h2`
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: var(--white);
  padding-bottom: 0.5rem;
`
const H2 = styled.h2`
  font-size: 0.8rem;
  font-weight: 100;
  text-transform: uppercase;
  color: var(--white);
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--blue);
  }
`
const StyledFooter = styled.div`
  display: flex;
  top: 0;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
`
const StyledText = styled.span`
  display: absolute;
  color: var(--white);
  font-size: 0.8rem;
  user-select: none;
`

export default Footer
