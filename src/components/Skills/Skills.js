import React from "react"
import "../Design/design.css"

function Skills() {
  return (
    <div className="contet-page" data-scroll-section>
      <div className="list-main">
        <ul className="list-main__books">
          <li
            className="list-main__item blur-effect item-0"
            data-scroll
            data-scroll-delay="0.8"
            data-scroll-speed=".05"
            data-scroll-call="item-1"
          >
            Skills:
          </li>
          <li
            className="list-main__item blur-effect item-1"
            data-scroll
            data-scroll-delay="0.8"
            data-scroll-speed=".05"
            data-scroll-call="item-1"
          >
            React
          </li>
          <li
            className="list-main__item blur-effect item-2"
            data-scroll
            data-scroll-delay="0.6"
            data-scroll-speed=".05"
            data-scroll-call="item-2"
          >
            Node.js
          </li>
          <li
            className="list-main__item blur-effect item-3"
            data-scroll
            data-scroll-delay="0.4"
            data-scroll-speed=".05"
            data-scroll-call="item-3"
          >
            HTML/CSS
          </li>
          <li
            className="list-main__item blur-effect item-4"
            data-scroll
            data-scroll-delay="0.2"
            data-scroll-speed=".05"
            data-scroll-call="item-4"
          >
            Javascript
          </li>
          <li
            className="list-main__item blur-effect item-5"
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed=".05"
            data-scroll-call="item-5"
          >
            Three.js
          </li>
          <li
            className="list-main__item blur-effect item-6"
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed=".05"
            data-scroll-call="item-6"
          >
            Photoshop
          </li>
          <li
            className="list-main__item blur-effect item-7"
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed=".05"
            data-scroll-call="item-7"
          >
            Figma
          </li>
          <li
            className="list-main__item blur-effect item-8"
            data-scroll
            data-scroll-delay="0.02"
            data-scroll-speed=".05"
            data-scroll-call="item-8"
          >
            Express
          </li>
        </ul>
      </div>
      <div class="list-description">
        <ul>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-1)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-2)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-3)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-4)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-5)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
