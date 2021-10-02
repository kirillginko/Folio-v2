import React from "react"
import "./nav.css"

function Nav() {
  return (
    <section className="nav">
      <div className="nav_header">
        <h2>Kirill Ginko</h2>
      </div>
      <div className="nav__items">
        <ul>
          <li>
            <h2>Work</h2>
          </li>
          <li>
            <h2>About</h2>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Nav
