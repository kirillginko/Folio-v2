import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Scroll from "./locomotiveScroll"
import "./locomotive-scroll.css"
import noise from "./Noise/noise"
import Nav from "../components/Nav/Nav"
import Loader from "../components/Loader"
import "./layout.css"

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location }) => {
  const [loading, setIsLoading] = useState(true)
  useEffect(() => {
    noise()
  }, [])
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <canvas id="canvas" class="noise"></canvas>
      {/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
      {loading ? (
        <div>
          <Loader setIsLoading={setIsLoading} />
        </div>
      ) : (
        <>
          <Scroll callbacks={location} />
          <div className="wrapper">
            <Nav />
            <main>{children}</main>
          </div>
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
