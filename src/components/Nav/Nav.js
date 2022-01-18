import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function Nav() {
  return (
    <NavContainer>
      <HeadLink to="/">
        <H2>Kirill Ginko</H2>
      </HeadLink>
      <NavItems>
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
  cursor: pointer;
  color: #fff;
`
const HeadLink = styled(Link)`
  font-size: 0.8rem;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`
const NavItems = styled.div`
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
  z-index: 20;
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
