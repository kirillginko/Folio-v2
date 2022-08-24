import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import styled from "styled-components"
import "./button.css"

const MagneticButton = ({
  children,
  className,
  speed = 1,
  tollerance = 0.8,
  scale = 1.2,
  debug = false,
  borderRadius = 0,
  ...props
}) => {
  const $root = useRef()
  const $item = useRef()
  const $hover = useRef()
  const rootBound = useRef()
  const itemBound = useRef()
  const diffBound = useRef({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    gsap.killTweensOf($item.current)
    gsap.set($hover.current, {
      scale: scale,
      borderRadius,
      background: debug ? "rgba(0, 125, 255, .4)" : "transparent",
    })

    rootBound.current = $root.current.getBoundingClientRect()
    itemBound.current = $item.current.getBoundingClientRect()
    diffBound.current.x =
      (rootBound.current.width * scale - rootBound.current.width) / 2
    diffBound.current.y =
      (rootBound.current.height * scale - rootBound.current.height) / 2
  }

  const handleMouseLeave = () => {
    gsap.killTweensOf($item.current)
    gsap.to($item.current, {
      x: 0,
      y: 0,
      ease: "elastic.out(1.1, .4)",
      duration: 1.2,
    })
    gsap.set($hover.current, {
      scale: 1,
    })
  }

  const handleMouseMove = e => {
    const x = e.clientX || e.touches[0].clientX
    const y = e.clientY || e.touches[0].clientY

    const maxX =
      ((rootBound.current.width - itemBound.current.width) / 2) * tollerance
    const maxY =
      ((rootBound.current.height - itemBound.current.height) / 2) * tollerance

    const newX = gsap.utils.mapRange(
      0,
      rootBound.current.width * scale,
      -maxX,
      maxX,
      x - rootBound.current.x + diffBound.current.x
    )

    const newY = gsap.utils.mapRange(
      0,
      rootBound.current.height * scale,
      -maxY,
      maxY,
      y - rootBound.current.y + diffBound.current.y
    )

    gsap.killTweensOf($item.current)
    gsap.to($item.current, {
      x: newX,
      y: newY,
      ease: "power3.out",
      duration: speed,
    })
  }

  return (
    <button
      ref={$root}
      className={`magnetic-button ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      {...props}
    >
      <span ref={$item} className="magnetic-button--item">
        {children}
      </span>
      <span ref={$hover} className="magnetic-button--hover" />
    </button>
  )
}

function Buttons() {
  return (
    <div className="App" data-scroll-section>
      <MagneticButton
        className="button-2"
        scale={2}
        tollerance={0.8}
        speed={0.3}
        borderRadius="50%"
        onClick={() => {
          console.log("click")
        }}
      >
        CONTACT
      </MagneticButton>
    </div>
  )
}

const Button1 = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  position: relative;
  z-index: 1;
  touch-action: none;
  background: #0c1ee8;
  color: white;
  border-radius: 30px;
  border: none;
  padding: 20px 40px;
  &:hover {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

export default Buttons
