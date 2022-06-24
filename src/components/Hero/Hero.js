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
    <Container id="js-scroll">
      <Nav data-scroll-section>
        <NavUl id="direction">
          <li className="nav-list__item">
            <Item
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
            </Item>
          </li>
          <li className="nav-list__item">
            <Item
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
            </Item>
          </li>
          <li className="nav-list__item">
            <Item
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
            </Item>
          </li>
          <li className="nav-list__item">
            <Item
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
            </Item>
          </li>
          <li className="nav-list__item">
            <Item
              className="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="10"
              data-scroll-delay=".01"
            ></Item>
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
  margin-top: 15rem;
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
const Item = styled.div`
  left: -10%;
  position: relative;
  transform: translate3d(0, 0, 0);
`
export default Hero
