import React from "react"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Marquees from "../components/Marquee/Marquees"
import Distort from "../components/Distort/Distort"
import Skills from "../components/Skills/Skills"
import Location from "../components/Location/Location"
import Intro from "../components/Intro/Intro"
import ImageTrail from "../components/ImageTrail/ImageTrail"
import Buttons from "../components/Buttons/Buttons"
import IconGrid from "../components/IconGrid/IconGrid"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <IconGrid />
      <ImageTrail />
      <Distort />
      <Location />
      <Skills />
      <Marquees />
      <Buttons />
    </>
  )
}

export default IndexPage
