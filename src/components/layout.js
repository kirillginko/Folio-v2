import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Scroll from "./locomotiveScroll"
import { motion, AnimatePresence } from "framer-motion"
import "./locomotive-scroll.css"
import noise from "./Noise/noise"
import Nav from "../components/Nav/Nav"
// import Loader from "../components/Loader"
import Footer from "../components/Footer/Footer"
import "./layout.css"

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

const Layout = ({ children, location }) => {
  // const [loading, setIsLoading] = useState(true)
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
      {/* {loading ? (
        <div>
          <Loader setIsLoading={setIsLoading} />
        </div>
      ) : (
        <> */}
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
      {/* </>
      )} */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
