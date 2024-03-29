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
      <TextContainer>
        <TopText>
          <H3>
            I SUPPORT IN BUILDING THE FULL CYCLE OF A DESIGN PROJECT. I
            SPECIALIZE IN WORKING WITH CLIENTS AND BRANDS IN BUILDING EVOKING
            USER-FRIENDLY EXPERIENCES.
          </H3>
          <SpanTop>↵</SpanTop>
        </TopText>
        <BottomText>
          <Span>↳</Span>
          <H3 style={{ textAlign: "end" }}>
            I LOVE CREATING EYE CATCHING DESIGN. MY SKILLS AND EXPERIECE HELPS
            ME UTLIIZE THE LASTEST TRENDS AND TECH.
          </H3>
        </BottomText>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  margin: 10rem 0rem;
`
const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: -100;
  height: 100vh;
  transform: translateY(-100%);
  margin: 0rem 1.5rem;
`
const TopText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10rem;
  padding-left: 3rem;
  @media (min-width: 1080px) {
    margin-top: 18vh;
    padding-left: 12vw;
  }
`
const BottomText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26rem;
  padding-right: 3rem;
  @media (min-width: 1080px) {
    margin-top: 22vh;
    padding-right: 12vw;
  }
`
const H3 = styled.div`
  font-size: calc(2.5vmax * 9 / 16);
  color: #0010ff;
  width: 10rem;
  @media (min-width: 1080px) {
    width: 20rem;
    line-height: 2rem;
  }
  @media (min-width: 1440px) {
    width: 30rem;
    line-height: 2.5rem;
  }
`
const Span = styled.div`
  font-size: calc(10.5vmax * 9 / 16);
  color: #0010ff;
  width: 10rem;
  padding-left: 8vw;
  padding-top: 5vh;
  @media (min-width: 1080px) {
    width: 20rem;
    line-height: 2rem;
    padding-left: 12vw;
    padding-top: 14vh;
  }
  @media (min-width: 1440px) {
    width: 30rem;
    line-height: 2.5rem;
    padding-left: 12vw;
    padding-top: 14vh;
  }
`
const SpanTop = styled.div`
  font-size: calc(10.5vmax * 9 / 16);
  color: #0010ff;
  width: 5vw;
  height: 5vh;
  padding-right: 18vw;
  padding-top: 1vh;
  transform: scaleY(-1);
  @media (min-width: 1080px) {
    width: 20vw;
    line-height: 2rem;
    padding-right: 16vw;
    padding-top: 4vh;
  }
  @media (min-width: 1440px) {
    width: 20rem;
    line-height: 2.5rem;
    padding-right: 18vw;
    padding-top: 4vh;
  }
`

export default IconGrid
