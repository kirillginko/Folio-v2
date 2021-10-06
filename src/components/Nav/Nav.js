import React from "react"
import "./nav.css"

function Nav() {
  return (
    <section className="nav">
      <div className="nav__header">
        <h2>Kirill Ginko</h2>
      </div>
      <div className="nav__items">
        <ul>
          <li>
            <h2 className="un">Work</h2>
          </li>
          <li>
            <h2 className="un">About</h2>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Nav
