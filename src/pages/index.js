import React, { useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Design from "../components/Design/Design"
import Skills from "../components/Skills/Skills"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Design />
    <Skills />
    <About />
  </Layout>
)

export default IndexPage
