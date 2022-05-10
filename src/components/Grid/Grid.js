import React, { useEffect } from "react"
import { LiquidDistortion } from "../Blotter/liquidDistortion"
import styled from "styled-components"

function Grid() {
  return <LiquidDistortion text={"About"} data-scroll-section />
}

const Canvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 100%; */
  height: min-content;
  flex-direction: column;
  border: 1px solid red;
`
export default Grid
