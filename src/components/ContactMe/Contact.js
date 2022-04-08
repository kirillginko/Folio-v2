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
      >
        Get In Touch!
      </MagneticButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
`

export default Contact
