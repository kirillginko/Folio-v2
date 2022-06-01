import React from "react"
import "./style.css"
import ProjectItem from "./ProjectItem"
import pageData from "../../data"

function Project() {
  return (
    <div className="main__container" id="main__container" data-scroll-section>
      <h1 className="projects__title">Works</h1>
      <ul>
        {[
          pageData.map((project, index) => (
            <ProjectItem key={index} project={project} itemIndex={index} />
          )),
        ]}
      </ul>
    </div>
  )
}

export default Project
