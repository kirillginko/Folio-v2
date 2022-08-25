import React, { useEffect, useContext } from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import "./icongrid.css"
import { CursorContext } from "../CustomCursor/CursorManager"

function IconGrid() {
  const mouseContext = useContext(CursorContext)
  useEffect(() => {
    // Define an object that will be used to draw plus signs
    var Plus = function () {
      this.x = 0
      this.y = 0

      this.top = 0
      this.left = 0

      this.height = 0
      this.width = 0
      this.scale = 1
    }

    //Add draw method to the object
    Plus.prototype.draw = function (ctx, x, y) {
      ctx.save()
      ctx.beginPath()
      ctx.setTransform(
        this.scale,
        0,
        0,
        this.scale,
        this.left + this.x,
        this.top + this.y
      )
      ctx.lineWidth = 2

      ctx.moveTo(0, -this.height / 2)
      ctx.lineTo(0, this.height / 2)

      ctx.moveTo(-this.width / 2, 0)
      ctx.lineTo(this.width / 2, 0)

      ctx.stroke()
      ctx.closePath()
      ctx.restore()
    }

    var c = document.getElementById("c")
    var context = c.getContext("2d")
    var signs = []
    var mouse = { x: 0, y: 0 }
    var gridLength = 9
    var mouseOver = false
    var mouseMoved = false

    c.width = window.innerWidth
    c.height = window.innerHeight

    // Create sign grid using 2D array
    for (var i = 0; i < gridLength; i++) {
      signs[i] = []
      for (var j = 0; j < gridLength; j++) {
        var min = Math.min(c.width, c.height)
        signs[i][j] = new Plus()
        signs[i][j].left = (c.width / (gridLength + 1)) * (i + 1)
        signs[i][j].top = (c.height / (gridLength + 1)) * (j + 1)
        signs[i][j].width = min / 50
        signs[i][j].height = min / 50
      }
    }

    // Use GSAP ticker to call draw function on every frame that will draw signs to the canvas
    // You can use requestAnimationFrame as well
    gsap.ticker.add(draw)

    function draw() {
      context.clearRect(0, 0, c.width, c.height)

      if (mouseOver && mouseMoved) {
        calculateSigns()
        mouseMoved = false
      }

      for (var i = 0; i < gridLength; i++) {
        for (var j = 0; j < gridLength; j++) {
          var sign = signs[i][j]
          sign.draw(context)
        }
      }
    }

    function calculateSigns() {
      for (var i = 0; i < gridLength; i++) {
        for (var j = 0; j < gridLength; j++) {
          var sign = signs[i][j]
          var hyp = Math.min(c.width, c.height) / (gridLength + 1) / 2
          var d = dist([sign.left, sign.top], [mouse.x, mouse.y])
          var ax = mouse.x - sign.left
          var ay = mouse.y - sign.top
          var angle = Math.atan2(ay, ax)
          if (d < hyp + sign.width) {
            hyp = d
            gsap.to(sign, 0.3, { scale: 2 })
          } else {
            gsap.to(sign, 0.3, { scale: 1 })
          }

          gsap.to(sign, 0.3, {
            x: Math.cos(angle) * hyp,
            y: Math.sin(angle) * hyp,
          })
        }
      }
    }

    c.addEventListener("mousemove", mouseMove)
    c.addEventListener("touchmove", mouseMove)

    function mouseMove(e) {
      if (e.targetTouches && e.targetTouches[0]) {
        e = e.targetTouches[0]
      }
      var rect = c.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouseMoved = true
    }

    c.addEventListener("mouseenter", function () {
      mouseOver = true
    })

    c.addEventListener("touchstart", function (e) {
      mouseOver = true
      mouseMove(e)
    })

    c.addEventListener("mouseleave", mouseLeave)
    c.addEventListener("touchend", mouseLeave)

    function mouseLeave() {
      mouseOver = false

      for (var i = 0; i < gridLength; i++) {
        for (var j = 0; j < gridLength; j++) {
          var sign = signs[i][j]
          if (!mouseOver) {
            gsap.to(sign, 0.3, { x: 0, y: 0, scale: 1 })
          }
        }
      }
    }

    window.addEventListener("resize", function () {
      c.width = window.innerWidth
      c.height = window.innerHeight
      for (var i = 0; i < gridLength; i++) {
        for (var j = 0; j < gridLength; j++) {
          var min = Math.min(c.width, c.height)
          var sign = signs[i][j]
          sign.left = (c.width / (gridLength + 1)) * (i + 1)
          sign.top = (c.height / (gridLength + 1)) * (j + 1)
          sign.width = min / 50
          sign.height = min / 50
        }
      }
    })

    function dist([x1, y1], [x2, y2]) {
      var dx = x1 - x2
      var dy = y1 - y2
      return Math.sqrt(dx * dx + dy * dy) || 1
    }
  }, [])
  return (
    <Container data-scroll-section>
      <TextContainer>
        <H3 data-scroll data-scroll-speed="1.5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quod
          laudantium, totam cupiditate aliquam necessitatibus dignissimos maxime
          tenetur architecto. Excepturi?
        </H3>
      </TextContainer>
      <BottomText>
        <H3 data-scroll data-scroll-speed="1.5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          adipisci provident architecto vel quibusdam accusamus pariatur dolor
          ut neque asperiores!
        </H3>
      </BottomText>
      <canvas
        id="c"
        data-scroll
        data-scroll-speed="1"
        onMouseEnter={() => {
          mouseContext.setSize("bigger")
        }}
        onMouseLeave={() => {
          mouseContext.setSize("small")
        }}
      ></canvas>
    </Container>
  )
}

const Container = styled.div`
  margin: 10rem 0rem;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  @media (max-width: 1080px) {
    top: 25rem;
    left: 4rem;
    width: 10rem;
  }
  @media (min-width: 1080px) {
    top: 30rem;
    left: 15rem;
    width: 25rem;
  }
  @media (min-width: 2160px) {
    top: 39rem;
    left: 20rem;
    width: 30rem;
  }
`
const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  @media (max-width: 1080px) {
    top: 50rem;
    left: 18rem;
    width: 10rem;
  }
  @media (min-width: 1080px) {
    top: 54rem;
    left: 86rem;
    width: 25rem;
  }
  @media (min-width: 2160px) {
    top: 69rem;
    left: 115rem;
    width: 30rem;
  }
`
const H3 = styled.div`
  font-size: calc(2.5vmax * 9 / 16);
  color: white;
  z-index: -1000;
`

export default IconGrid
