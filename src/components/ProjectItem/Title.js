import React from "react"

export default function Title({ title, handleMouseEnter, handleMouseLeave }) {
  return (
    <div
      className="title__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="menu__title">{title}</h1>
    </div>
  )
}
