import React from "react"
import { Link } from "gatsby"
import { media } from "../../styles/media"
import styled from "styled-components"

const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()

  const scrollToTop = () => {
    const rootElement = document.documentElement
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <FixedWrapper data-scroll-section>
        <ContentWrapper>
          <Content>
            <H1>Contact</H1>
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
            <H1>Socials</H1>
            <StyledLink
              to="https://www.instagram.com/co_existenz/"
              target="_blank"
            >
              Instagram
            </StyledLink>
            <StyledLink to="https://www.github.com/kirillginko" target="_blank">
              Github
            </StyledLink>
            <H2>Behence</H2>
          </Content>
          <Content>
            <H1>Pages</H1>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/projects">Work</StyledLink>
            <StyledLink to="/about">About</StyledLink>
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

const FixedWrapper = styled.div`
  position: relative;
  background-color: #000000;
  /* height: 20vh; */
  top: 0vh;
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
  @media (max-width: 1000px) {
    font-size: .8rem;
  }
  /* ${media.tablet`font-size: 16px;`}; */
`
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 1.5rem;
  @media (max-width: 500px) {
    display: grid;
    justify-content: space-between;
    align-content: center;
    grid-template-columns: repeat(3, 12.8rem);
  }
`

const Content = styled.div`
  display: inline-block;
  justify-content: center;
  /* margin: 0 1.5rem; */
  padding-top: 1rem;
`
const H1 = styled.h2`
  font-size: 0.9rem;
  color: #fff;
  padding-bottom: 0.5rem;
`
const StyledLink = styled(Link)`
  display: block;
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
  font-weight: 100;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #1937df;
  }
`
const H2 = styled.h2`
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
  font-weight: 100;
  color: #fff;
`

export default Footer
