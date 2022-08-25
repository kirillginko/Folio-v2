import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import Overflow from "../../styles/overflow"
import mixins from "../../styles/mixins"
import "../../styles/mixins"
import useRandomInterval from "../../hooks/useRandomInterval"
import styled from "styled-components"

const Loader = ({ setIsLoading }) => {
  const [percent, setPercent] = useState(0)
  let minMax = percent < 97 ? [10, 50] : [250, 500]

  let tl = gsap.timeline()
  let sectionContainer = useRef(null)
  let textRef = useRef(null)

  useEffect(() => {
    if (percent === 100) {
      tl.to(textRef, {
        opacity: 0,
        ease: "power4.in",
        duration: 1,
        delay: 0.4,
      }).to(sectionContainer, {
        height: 0,
        ease: "power4.inOut",
        duration: 1.2,
        onComplete: () => setIsLoading(false),
      })
    }
  }, [percent, tl, sectionContainer, textRef, setIsLoading])

  useRandomInterval(
    () => percent < 100 && setPercent(percent => percent + 1),
    ...minMax
  )

  return (
    <LoaderWrapper ref={el => (sectionContainer = el)}>
      <Overflow>
        <TextContainer>
          <Text ref={el => (textRef = el)}>
            Your experience is loading... <span>{percent}%</span>
          </Text>
        </TextContainer>
      </Overflow>
    </LoaderWrapper>
  )
}
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  background-color: var(--text);
  color: var(--background);
  ${mixins.flexCenter};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  text-align: center;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Text = styled.p`
  ${mixins.smallText};
  margin: 0;

  span {
    margin-left: 2vw;
  }
`

export default Loader
