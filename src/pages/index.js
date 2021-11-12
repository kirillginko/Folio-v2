import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"
import SEO from "../components/seo"
import Design from "../components/Design/Design"
import Skills from "../components/Skills/Skills"
import About from "../components/About/About"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Design />
    <Skills />
    <About />
  </>
)

export default IndexPage
