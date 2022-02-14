import React, { useContext } from "react"
import { CursorContext } from "../components/CustomCursor/CursorManager"

const cursorHandlers = () => {
  const mouseContext = useContext(CursorContext)

  const mouseEnterHandler = () => {
    mouseContext.setSize("big")
  }
  const mouseLeaveHandler = () => {
    mouseContext.setSize("small")
  }
}
