import React from "react"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Marquees from "../components/Marquee/Marquees"
import Contact from "../components/ContactMe/Contact"
import List from "../components/ListHover/List"
import Distort from "../components/Distort/Distort"
import Skills from "../components/Skills/Skills"
import Location from "../components/Location/Location"
import Intro from "../components/Intro/Intro"
import Buttons from "../components/Buttons/Buttons"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Intro />
      <Distort />
      <Location />
      <Skills />
      <List />
      <Marquees />
      {/* <Distort />
      <Location />
      <Skills />
      <Contact />
      <Buttons />
      <Marquees /> */}
    </>
  )
}

export default IndexPage
