import React from "react"
import Layout from "../components/layout"
import img1 from "../assets/projects/1.jpg"

const Projects = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Projects</h1>
        <h2>
          Here are some of the epic projects I have been working on over the
          past years.
        </h2>
        <div className="projects-container">
          <Project title={"project1"} img={img1} />
        </div>
      </div>
    </Layout>
  )
}

interface ProjectProps {
  title: string
  img: any
}

const Project = ({ title, img }: ProjectProps) => {
  return (
    <div className="project">
      <h2 className="project-header">{title}</h2>
      <img className="project-image" src={img} />
    </div>
  )
}

export default Projects
