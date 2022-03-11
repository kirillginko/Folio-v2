import React, { useEffect } from "react"
import SEO from "../components/seo"
import Design from "../components/Hero/Hero"
import Tech from "../components/Tech/Tech"
import Button from "../components/Buttons/Buttons"
import Marquees from "../components/Marquee/Marquees"
import Recognitions from "../components/Marquee1/Recognitions"
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
      <Button />
      <Marquees />
      {/* <Recognitions /> */}
    </>
  )
}

export default IndexPage
