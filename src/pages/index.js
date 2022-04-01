import React from "react"
import SEO from "../components/seo"
import Design from "../components/Hero/Hero"
import Tech from "../components/Tech/Tech"
import Button from "../components/Buttons/Buttons"
import Marquees from "../components/Marquee/Marquees"
import Contact from "../components/ContactMe/Contact"
// import Skills from "../components/Skills/Skills"
// import About from "../components/About/About"
// import Project from "../components/Projects/Project"
// import Grid from "../components/Grid/Grid"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Design />
      <Tech />
      <Marquees />
      <Contact />
      {/* <Recognitions /> */}
    </>
  )
}

export default IndexPage
