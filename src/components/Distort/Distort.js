import React, { useEffect } from "react"
// import { StaticImage } from "gatsby-plugin-image"
import "./distort.css"
import hoverEffect from "hover-effect"
import image from "../../images/image.jpg"
import image2 from "../../images/image2.jpg"
import overlay from "../../images/overlay.png"

function Distort() {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".item-image"),
      intensity: 0.3,
      image1: image,
      image2: image2,
      displacementImage: overlay,
    })
  })
  return (
    <div className="container__distort" data-scroll-section>
      <div
        className="item"
        data-scroll
        data-scroll-direction="vertical"
        // data-scroll-target="#direction"
        data-scroll-speed="2"
        data-scroll-delay="0.05"
      >
        <div className="item-header">
          <div className="item-header-heading">Lofi Player</div>
          <div className="item-header-heading2">01/06</div>
        </div>
        <div className="item-image"></div>
        <div className="item-footer">
          <div className="item-footer-quote">Lofi Hip-hop React Player</div>
        </div>
      </div>
    </div>
  )
}

export default Distort
