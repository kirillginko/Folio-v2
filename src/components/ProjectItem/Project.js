import React from "react"
import "../../styles/projects.css"
import ProjectItem from "../ProjectItem/ProjectItem"
import pageData from "../../data"

function Project() {
  return (
    <div className="main__container" id="main__container" data-scroll-section>
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
