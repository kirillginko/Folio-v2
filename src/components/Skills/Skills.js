import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCertificate } from "@fortawesome/free-solid-svg-icons"
import "../Skills/skills.css"

function Skills() {
  useEffect(() => {}, [])
  return (
    <div className="content-page" data-scroll-section>
      <div
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-target="#direction"
        data-scroll-speed="-2"
        data-scroll-delay=".05"
      >
        <FontAwesomeIcon icon={faCertificate} className="svg" />
      </div>
      <div
        className="list-interests"
        data-scroll
        // data-scroll-direction="vertical"
        // data-scroll-target="#direction"
        // data-scroll-speed="2"
        // data-scroll-delay=".05"
      ></div>
      <div className="list-main">
        <ul className="list-main__books">
          <li
            className="list-main__item blur-effect item-0"
            data-scroll
            data-scroll-delay="1"
            data-scroll-speed=".05"
            data-scroll-call="item-0"
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
    </div>
  )
}

export default Skills
