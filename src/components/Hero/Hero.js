import React, { useContext } from "react"
import { CursorContext } from "../CustomCursor/CursorManager"
import "./hero.css"

function Hero() {
  const mouseContext = useContext(CursorContext)

  const mouseEnterHandler = () => {
    mouseContext.setSize("big")
  }
  const mouseLeaveHandler = () => {
    mouseContext.setSize("small")
  }

  return (
    <div id="js-scroll" className="main-page">
      <nav className="nav-main" data-scroll-section>
        <ul className="nav-list" id="direction">
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
        </ul>
      </nav>
    </div>
  )
}

export default Hero
