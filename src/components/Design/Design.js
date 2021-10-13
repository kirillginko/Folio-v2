import React from "react"
import "./design.css"

function Designer() {
  return (
    <div id="js-scroll" class="main-page">
      <nav class="nav-main" data-scroll-section>
        <ul class="nav-list" id="direction">
          <li class="nav-list__item">
            <div
              class="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="8"
              data-scroll-delay="0.05"
            >
              <div class="item__container">
                <span class="item-first-title">Creative</span>
                <span class="arrow">*</span>
                <span class="item-second-title">Creative</span>
                <span class="arrow">*</span>
                <span class="item-third-title">Creative</span>
              </div>
            </div>
          </li>
          <li class="nav-list__item">
            <div
              class="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-5"
              data-scroll-delay="0.05"
            >
              <div class="item__container">
                <span class="item-first-title">Designer</span>
                <span class="arrow">*</span>
                <span class="item-second-title">Designer</span>
                <span class="arrow">*</span>
                <span class="item-third-title">Designer</span>
              </div>
            </div>
          </li>
          <li class="nav-list__item">
            <div
              class="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="8"
              data-scroll-delay="0.05"
            >
              <div class="item__container">
                <span class="item-first-title">And</span>
                <span class="arrow">*</span>
                <span class="item-second-title">And</span>
                <span class="arrow">*</span>
                <span class="item-third-title">And</span>
              </div>
            </div>
          </li>
          {/* <li class="nav-list__item">
              <div
                class="item__translate"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-target="#direction"
                data-scroll-speed="8"
                data-scroll-delay="0.1"
              >
                <div class="item__container">
                  <span class="item-first-title">Interactive</span>
                  <span class="arrow">*</span>
                  <span class="item-second-title">Interactive</span>
                  <span class="arrow">*</span>
                  <span class="item-third-title">Interactive</span>
                </div>
              </div>
            </li> */}
          <li class="nav-list__item">
            <div
              class="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="-8"
              data-scroll-delay="0.05"
            >
              <div class="item__container">
                <span class="item-first-title">Developer</span>
                <span class="arrow">*</span>
                <span class="item-second-title">Developer</span>
                <span class="arrow">*</span>
                <span class="item-third-title">Developer</span>
              </div>
            </div>
          </li>
          <li class="nav-list__item">
            <div
              class="item__translate"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-target="#direction"
              data-scroll-speed="10"
              data-scroll-delay=".01"
            >
              {/* <div class="item__container">
                  <span class="item-first-title">Contact</span>
                  <span class="arrow">→</span>
                  <span class="item-second-title">Contact</span>
                  <span class="arrow">→</span>
                  <span class="item-third-title">Contact</span>
                </div> */}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Designer
