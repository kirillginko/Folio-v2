import React from "react"
import SEO from "../components/seo"
import Design from "../components/Hero/Hero"
import Marquees from "../components/Marquee/Marquees"
import Contact from "../components/ContactMe/Contact"
import Distort from "../components/Distort/Distort"
import Skills from "../components/Skills/Skills"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Design />
      <Distort />
      <Skills />
      <Marquees />
      {/* <Contact /> */}
    </>
  )
}

export default IndexPage
