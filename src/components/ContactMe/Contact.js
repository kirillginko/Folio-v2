import React from "react"
import MagneticButton from "../Buttons/Buttons"
import styled from "styled-components"

function Contact() {
  return (
    <Container data-scroll-section>
      <MagneticButton
        className="button-3"
        scale={2}
        tollerance={0.8}
        speed={0.3}
        borderRadius="50%"
        data-scroll
        data-scroll-speed="1.5"
      >
        Get In Touch!
      </MagneticButton>
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
  /* flex-direction: column;
  justify-content: center; */
  margin-bottom: 5rem;
  border: 1px solid red;
  top: 0;
  height: 100%;
  width: 100%;
  @media (max-width: 1440px) {
    margin-top: 30rem;
  }
`

export default Contact
