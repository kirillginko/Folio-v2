import React from "react"
import Layout from "../components/layout"
import "../styles/projects.css"
import ProjectItem from "../components/ProjectItem/ProjectItem"
import pageData from "../data"

function Projects() {
  return (
    <>
      <Layout>
        <div
          className="main__container"
          id="main__container"
          data-scroll-section
        >
          <ul>
            {[
              pageData.map((project, index) => (
                <ProjectItem key={index} project={project} itemIndex={index} />
              )),
            ]}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default Projects
