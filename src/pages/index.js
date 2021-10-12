import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Design from "../components/Design/Design"
import Contacts from "../components/Contacts/Contact"
import Skills from "../components/Skills/Skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Design />
    <Skills />
    <Contacts />
  </Layout>
)

export default IndexPage
