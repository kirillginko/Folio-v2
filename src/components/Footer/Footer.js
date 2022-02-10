import React from "react"
import { media } from "../../styles/media"
import styled from "styled-components"

const FixedWrapper = styled.div`
  position: relative;
  background-color: #000000;
  margin-top: 10rem;
  height: 10vh;
  margin-top: 20rem;
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
