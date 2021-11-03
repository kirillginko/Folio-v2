import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Design from "../components/Design/Design"
import Contacts from "../components/Contacts/Contact"
import Skills from "../components/Skills/Skills"
import Project from "../components/ProjectItem/Project"
import About from "../components/About/About"
import CursorManager from "../components/CustomCursor/CursorManager"
import CustomCursor from "../components/CustomCursor/"

const IndexPage = () => (
  <CursorManager>
    <CustomCursor />
    <Layout>
      <SEO title="Home" />
      <Design />
      <Skills />
      <Project />
      <Contacts />
      <About />
    </Layout>
  </CursorManager>
)

export default IndexPage
