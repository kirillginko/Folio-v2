import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Scroll from "./Locomotive/locomotiveScroll"
import { motion, AnimatePresence } from "framer-motion"
import "./Locomotive/locomotive-scroll.css"
import CustomCursor from "../components/CustomCursor/CustomCursor"
import CursorManager from "../components/CustomCursor/CursorManager"
import noise from "./Noise/noise"
import Nav from "../components/Nav/Nav"
import Loader from "../components/Loader/Loader"
import Footer from "../components/Footer/Footer"
import { GlobalStyles } from "../styles/GlobalStyles"
import "./layout.css"

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
      <canvas id="canvas" className="noise"></canvas>
      <Helmet>
        <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
      </Helmet>
      <GlobalStyles />
      {loading ? (
        <div>
          <Loader setIsLoading={setIsLoading} />
        </div>
      ) : (
        <>
          <CursorManager>
            <CustomCursor />
            <Scroll callbacks={location} />
            <AnimatePresence>
              <motion.main
                key={location}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Nav />
                {children}
                <Footer />
              </motion.main>
            </AnimatePresence>
          </CursorManager>
        </>
      )}
    </>
  )
}
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
