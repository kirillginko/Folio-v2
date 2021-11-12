import React from "react"
import Distort from "../components/Distort/Distort"
import { motion, AnimatePresence } from "framer-motion"

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

function About({ location }) {
  return (
    <AnimatePresence>
      <motion.main
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Distort />
      </motion.main>
    </AnimatePresence>
  )
}

export default About
