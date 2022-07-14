import React, { useEffect } from "react"
import "./imagetrail.css"

function ImageTrail() {
  useEffect(() => {
    const imgWrapper = document.querySelector(".img-wrapper")
    const allImages = [...imgWrapper.querySelectorAll("img")]

    let imgNum = 0
    // setting threshold to make a gab between images
    const threshold = 125

    let lastPosX, lastPosY, curPosX, curPosY
    let isCounting = true
    let startFromX, startFromY

    document.body.addEventListener("mousemove", function (e) {
      const [x, y] = [e.x, e.y]

      const hasCrossedThresHold = // Boolean value wheather the mouse has crossed the theshold or not
        x > startFromX + threshold ||
        x < startFromX - threshold ||
        y > startFromY + threshold ||
        y < startFromY - threshold

      if (hasCrossedThresHold) {
        // if it has calling showNextImage
        showNextImage(e)
        isCounting = true // changing the isCounting to true
      }

      if (isCounting) {
        // So that we can record the another point here again !!
        startFromX = x
        startFromY = y
      }

      isCounting = false // Changing the isCounting to false to not let recording the startFromX and
      //startFromY points on every mouse-move
    })

    function showNextImage(e) {
      const movingImage = allImages[imgNum]
      ;[curPosX, curPosY] = [e.x, e.y]

      movingImage.removeAttribute = "style"

      // Setting the position of image
      movingImage.style.left = `${curPosX}px`
      movingImage.style.top = `${curPosY}px`

      // making the image visibile here
      movingImage.classList.add("visible")

      // calculating a moving distance
      const movingDistanceX = ((curPosX - lastPosX || 0) * 80) / 100
      const movingDistanceY = ((curPosY - lastPosY || 0) * 80) / 100

      setTimeout(function () {
        // animating image towards the current position of mouse
        movingImage.style.left = `${lastPosX + movingDistanceX}px`
        movingImage.style.top = `${lastPosY + movingDistanceY}px`

        setTimeout(function () {
          movingImage.classList.add("grow-scale") // hiding image after 800ms

          setTimeout(function () {
            movingImage.classList.remove("visible", "grow-scale")
            movingImage.style = ""
          }, 600)
        }, 800)
      }, 10)

      imgNum++ // incresing num to show different image  each time

      if (imgNum === allImages.length - 1) {
        imgNum = 0
      }

      // Setting the last position values of image
      lastPosX = curPosX
      lastPosY = curPosY
    }
  }, [])

  return (
    <div className="content" data-scroll-section>
      <h3 className="content__title">Nice to meet you!</h3>
      <div className="img-wrapper">
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828284/gradient_8_amztsm.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828284/gradient_12_lojldm.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828284/gradient_7_uhfra6.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828284/gradient_11_bzdj6c.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828284/gradient_9_grl7xr.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828280/gradient_2_fwvars.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828279/gradient_6_raikg4.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828279/gradient_4_d9uv7h.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828279/gradient_3_s9z3f6.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828279/gradient_5_hxfnls.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828279/gradient_1_hbyhqu.png"
        />
        <img
          className="img-item"
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828284/gradient_8_amztsm.png"
        />
      </div>
    </div>
  )
}

export default ImageTrail
