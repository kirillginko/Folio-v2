import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()

  return (
    <>
      <FixedWrapper data-scroll-section>
        <ContentWrapper>
          <Content style={{ width: "15rem" }}>
            <Title style={{ textAlign: "left" }}>Contacts</Title>
            <StyledLink
              href="mailto:kirillginko@gmail.com?subject=Lets Make Something Cool!&body=Hi Kirill,"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Email: kirillginko@gmail.com
            </StyledLink>
            <H2>Phone: +301-512-4249</H2>
          </Content>
          <Content>
            <Title>Socials</Title>
            <StyledLink
              to="https://www.instagram.com/co_existenz/"
              target="_blank"
            >
              Instagram
            </StyledLink>
            <StyledLink to="https://www.github.com/kirillginko" target="_blank">
              Github
            </StyledLink>
            <StyledLink
              to="https://www.linkedin.com/in/kirill-ginko-a613433a/"
              target="_blank"
            >
              LinkdIn
            </StyledLink>
          </Content>
          <Content>
            <Title style={{ textAlign: "right" }}>Links</Title>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/projects">Work</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </Content>
        </ContentWrapper>
        <StyledFooter>
          <StyledText>&copy; {y}</StyledText>
          <StyledText>45.5017° N, 73.5673° W</StyledText>
        </StyledFooter>
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
  height: 12rem;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0rem 1.5rem;
`
const Content = styled.div`
  height: 9rem;
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
const StyledLink = styled(Link)`
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
const Globe = styled.img`
  display: relative;
  justify-content: flex;
  align-items: flex-end;
  background-color: red;
  height: 1rem;
  width: 1rem;
`
const StyledFooter = styled.div`
  display: flex;
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
