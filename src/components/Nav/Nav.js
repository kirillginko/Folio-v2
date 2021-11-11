import React from "react"
import { Link } from "gatsby"
import "./nav.css"

function Nav() {
  return (
    <section className="nav">
      <Link to="/" className="nav__header">
        <h2 className="un">Kirill Ginko</h2>
      </Link>
      <div className="nav__items">
        <ul>
          <li>
            <Link to="/projects" className="nav__links">
              <p className="un">Work</p>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav__links">
              <p className="un"> About</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Nav
