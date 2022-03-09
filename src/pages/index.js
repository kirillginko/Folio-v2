import React, { useEffect } from "react"
import SEO from "../components/seo"
import Design from "../components/Hero/Hero"
import Tech from "../components/Tech/Tech"
import Button from "../components/Buttons/Buttons"
// import Skills from "../components/Skills/Skills"
// import About from "../components/About/About"
// import Project from "../components/Projects/Project"
// import Grid from "../components/Grid/Grid"

const IndexPage = () => {
  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      console.log("hello world")
    } else if (window.scrollY > 70) {
      console.log("goodbye")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <>
      <SEO title="Home" />
      <Design />
      <Tech />
      <Button />
    </>
  )
}

export default IndexPage
