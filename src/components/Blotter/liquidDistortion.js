import React from "react"
import { LiquidDistortionText } from "react-text-fun"
export const LiquidDistortion = ({ text }) => {
  return (
    <>
      <LiquidDistortionText
        text={text}
        fontFamily="questrial"
        fontStyle="italic"
        fontWeight={600}
        fontSize={100}
        fill="black"
        speed={0.2}
        volatility={0.05}
        paddingLeft={40}
        paddingRight={40}
      />
    </>
  )
}
