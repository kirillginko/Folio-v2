import React, { useRef, useReducer } from "react"
import cn from "classnames"
import Image from "./Image"
import Title from "./Title"
import Hash from "./Hash"
import animate from "./animate"

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE/OPACITY": {
      return {
        ...state,
        opacity: action.payload,
      }
    }
    case "MOUSE/ENTER": {
      return {
        ...state,
        active: true,
      }
    }
    case "MOUSE/LEAVE": {
      return {
        ...state,
        active: false,
      }
    }
    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload,
      }
    }
    case "CHANGE/ROTATION": {
      return {
        ...state,
        rotationPosition: action.payload,
      }
    }
    case "CHANGE/SCALE": {
      return {
        ...state,
        scale: action.payload,
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
  const easeMethod = "easeInOutCubic"

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

  const handleScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newScale, callback) => {
        dispatch({ type: "CHANGE/SCALE", payload: newScale })
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    })
  }

  const handleRotation = (currentRotation, duration) => {
    // random number between -15 and 15
    const newRotation =
      Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1)
    animate({
      fromValue: currentRotation,
      toValue: newRotation,
      onUpdate: (newRotation, callback) => {
        dispatch({ type: "CHANGE/ROTATION", payload: newRotation })
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    })
  }

  const handleMouseEnter = () => {
    // dispatch({ type: "CHANGE/OPACITY", payload: 1 })
    dispatch({ type: "MOUSE/ENTER" })
    handleOpacity(0, 1, 500)
    handleScale(0.8, 1, 500)
    handleRotation(state.rotationPosition, 500)

    listItem.current.addEventListener("mousemove", parallax)
  }

  const handleMouseLeave = () => {
    dispatch({ type: "CHANGE/OPACITY", payload: 0 })
    handleOpacity(1, 0, 800)
    handleScale(1, initialState.scale, 500)
    handleRotation(state.rotationPosition, 500)
    dispatch({ type: "MOUSE/LEAVE" })
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
        scale={state.scale}
        rotationPosition={state.rotationPosition}
      />

      <div className={cn("info__block", { "is-active": state.active })}>
        <p className="info__block_header">
          <span>
            <Hash />
            (0{itemIndex + 1})
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
