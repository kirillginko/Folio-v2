import React, { useRef, useReducer } from "react"
import Image from "./Image"
import Title from "./Title"
import Hash from "./Hash"
import animate from "./animate"

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE/OPACITY": {
      return {
        ...state,
        opacity: action.payload,
      }
    }
    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload,
      }
    }
    default: {
      throw new Error()
    }
  }
}

export default function ProjectItem({ project, itemIndex }) {
  const listItem = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState)
  const easeMethod = "linear"

  const parallax = event => {
    const speed = -5
    const x = (window.innerWidth - event.pageX * speed) / 100
    const y = (window.innerHeight - event.pageY * speed) / 100
    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } })
  }

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE/OPACITY", payload: newOpacity })
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    })
  }

  const handleMouseEnter = () => {
    dispatch({ type: "CHANGE/OPACITY", payload: 1 })
    // handleOpacity(0, 1, 500)

    listItem.current.addEventListener("mousemove", parallax)
  }

  const handleMouseLeave = () => {
    dispatch({ type: "CHANGE/OPACITY", payload: 0 })
    // handleOpacity(1, 0, 100)
    dispatch({ type: "MOUSE/COORDINATES", payload: initialState.parallaxPos })

    listItem.current.removeEventListener("mousemove", parallax)
  }
  return (
    <li className="project__item_container" ref={listItem}>
      <Title
        title={project.title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Image
        url={project.url}
        opacity={state.opacity}
        parallaxPos={state.parallaxPos}
      />

      <div className="info__block">
        <p className="info__block_header">
          <span>
            <Hash />0{itemIndex}
          </span>
        </p>
        {project.info.map(element => (
          <p key={element}>
            <span>{element}</span>
          </p>
        ))}
      </div>
    </li>
  )
}
