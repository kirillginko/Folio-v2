import React from "react"
import SEO from "../components/seo"
import Design from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import About from "../components/About/About"
import Mission from "../components/Mission/Mission"
import Grid from "../components/Grid/Grid"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Design />
    <Mission />
    <Grid />
    {/* <Skills /> */}
    {/* <About /> */}
  </>
)

export default IndexPage
