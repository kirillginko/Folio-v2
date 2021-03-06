import React from "react"
import List from "../components/ListHover/List"
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

function projects({ location }) {
  return (
    <AnimatePresence>
      <motion.main
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <List />
      </motion.main>
    </AnimatePresence>
  )
}

export default projects
