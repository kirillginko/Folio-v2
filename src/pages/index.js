import React from "react"
import SEO from "../components/seo"
import Design from "../components/Hero/Hero"
import Tech from "../components/Tech/Tech"
import Button from "../components/Buttons/Buttons"
import Marquees from "../components/Marquee/Marquees"
import Contact from "../components/ContactMe/Contact"
import Distort from "../components/Distort/Distort"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Design />
      <Distort />
      <Marquees />
      <Contact />
      {/* <Tech />
      <Marquees />
      <Contact /> */}
      {/* <Recognitions /> */}
    </>
  )
}

export default IndexPage
