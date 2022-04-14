import React, { useContext } from "react"
import { CursorContext } from "../CustomCursor/CursorManager"
import "./hero.css"
import styled from "styled-components"
function Hero() {
  const mouseContext = useContext(CursorContext)

  const mouseEnterHandler = () => {
    mouseContext.setSize("bigger")
  }
  const mouseLeaveHandler = () => {
    mouseContext.setSize("small")
  }

  return (
    <Container id="js-scroll" className="main-page">
      <Nav className="nav-main" data-scroll-section>
        <NavUl className="nav-list" id="direction">
          <li className="nav-list__item">
            <div
              className="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="8"
              data-scroll-delay="0.05"
            >
              <div
                className="item__container"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <span className="item-first-title">Creative</span>
                <span className="arrow">*</span>
                <span className="item-second-title">Creative</span>
                <span className="arrow">*</span>
                <span className="item-third-title">Creative</span>
              </div>
            </div>
          </li>
          <li className="nav-list__item">
            <div
              className="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-5"
              data-scroll-delay="0.05"
            >
              <div
                className="item__container"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <span className="item-first-title">Designer</span>
                <span className="arrow">*</span>
                <span className="item-second-title">Designer</span>
                <span className="arrow">*</span>
                <span className="item-third-title">Designer</span>
              </div>
            </div>
          </li>
          <li className="nav-list__item">
            <div
              className="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="8"
              data-scroll-delay="0.05"
            >
              <div
                className="item__container"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <span className="item-first-title">And</span>
                <span className="arrow">*</span>
                <span className="item-second-title">And</span>
                <span className="arrow">*</span>
                <span className="item-third-title">And</span>
              </div>
            </div>
          </li>
          <li className="nav-list__item">
            <div
              className="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-8"
              data-scroll-delay="0.05"
            >
              <div
                className="item__container"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <span className="item-first-title">Developer</span>
                <span className="arrow">*</span>
                <span className="item-second-title">Developer</span>
                <span className="arrow">*</span>
                <span className="item-third-title">Developer</span>
              </div>
            </div>
          </li>
          <li className="nav-list__item">
            <div
              className="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="10"
              data-scroll-delay=".01"
            ></div>
          </li>
        </NavUl>
      </Nav>
    </Container>
  )
}

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`
const Nav = styled.div`
  position: relative;
  font-size: calc(20vmax * 9 / 16);
  overflow-x: hidden;
  padding-top: 300px;
  text-transform: uppercase;
  font-weight: bold;
`
const NavUl = styled.ul``
const NavItem = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.5s;
  position: relative;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  transform: translate3d(0, 100%, 0);
  content: "";
  position: absolute;
  top: calc(50% - 10px);
  left: 50%;
  height: 10px;
  width: 100%;
  transform: scaleX(0);
  transition: transform 0.5s;
  background-color: rgba(0, 0, 0, 1);
  transform: scaleX(1);
  &:hover {
    opacity: 0.4;
  }
`

export default Hero
