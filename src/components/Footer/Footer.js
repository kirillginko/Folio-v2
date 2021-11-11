import React from "react"
import { media } from "../../styles/media"
import styled from "styled-components"

const FixedWrapper = styled.div`
  position: relative;
  background-color: #000000;
`
const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 1.5rem;
  padding-top: 1rem;
  /* padding: 0rem 1.5rem; */
  background-color: #000000;
`
const Links = styled.div`
  ul {
    display: relative;
    flex-direction: column;
  }
  a {
    display: block;
    padding: 1rem 0rem;
    padding-left: 0.5rem;
    color: #ffff;
    font-size: 0.6rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #fff;
  }
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #bd2f2f;
`
const Contacts = styled.div`
  color: #fff;
  background-color: #2f49bd;
`
const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 1rem; */
  background-color: #bd572f;
  h2 {
    padding: 0.5rem;
  }
  p {
    padding: 0.5rem;
  }
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 2rem 0rem; */
  padding: 2rem 1.5rem;
  text-transform: uppercase;
`
const StyledText = styled.span`
  color: #fff;
  font-size: 1rem;
  user-select: none;
  ${media.tablet`font-size: 16px;`};
`

const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()

  return (
    <>
      <FixedWrapper data-scroll-section>
        {/* <ContactsWrapper>
          <Links>
            <ul>
              <p>Contacts</p>
              <a href="/">Email: kirillginko@gmail.com</a>
              <a href="/">Github</a>
              <a href="/">Instagram</a>
              <a href="/">Dribbble</a>
            </ul>
          </Links>
          <Contacts>
            <ul>
              <p>Social</p>
              <a href="/">facebook</a>
            </ul>
          </Contacts>
          <Pages>
            <h2>Links</h2>
            <p>Home</p>
            <p>Projects</p>
            <p>About</p>
          </Pages>
        </ContactsWrapper> */}
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
