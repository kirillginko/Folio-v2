import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { CursorContext } from "../CustomCursor/CursorManager"

function Nav() {
  const mouseContext = useContext(CursorContext)
  return (
    <NavContainer>
      <HeadLink
        to="/"
        onMouseEnter={() => {
          mouseContext.setSize("big")
        }}
        onMouseLeave={() => {
          mouseContext.setSize("small")
        }}
      >
        <H2>Kirill Ginko</H2>
      </HeadLink>
      <NavItems
        onMouseEnter={() => {
          mouseContext.setSize("big")
        }}
        onMouseLeave={() => {
          mouseContext.setSize("small")
        }}
      >
        <ul>
          <li>
            <NavLink to="/projects">
              <P>Work</P>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <P>About</P>
            </NavLink>
          </li>
        </ul>
      </NavItems>
    </NavContainer>
  )
}
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #fff;
  cursor: none;
`
const HeadLink = styled(Link)`
  font-size: 0.8rem;
  color: #fff;
  text-decoration: none;
  z-index: 10;
  &:hover {
    color: #000;
  }
`
const NavItems = styled.div`
  z-index: 10;
  ul > li {
    display: inline-block;
    font-size: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
  }
`
const NavLink = styled(Link)`
  font-size: 1.5em;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px dashed transparent;
  }
  &:hover {
    border-bottom: 1px dashed #000;
    color: #000;
  }
`
const H2 = styled.h2`
  border-bottom: 1px dashed transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-bottom: 1px dashed #000;
  }
`
const P = styled.p`
  border-bottom: 1px dashed transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-bottom: 1px dashed #000;
  }
`

export default Nav
