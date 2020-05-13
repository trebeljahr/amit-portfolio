import React from "react"
import Layout from "../components/layout"
import img1 from "../assets/projects/1.jpg"
import img2 from "../assets/projects/2.jpg"
import img3 from "../assets/projects/3.jpg"
import img4 from "../assets/projects/4.jpg"
import img5 from "../assets/projects/5.jpg"

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
          <Project title={"Project 1"} img={img1} />
          <Project title={"Project 2"} img={img2} />
          <Project title={"Project 3"} img={img3} />
          <Project title={"Project 4"} img={img4} />
          <Project title={"Project 5"} img={img5} />
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
      <div className="project-header-container">
        <h2 className="project-header">{title}</h2>
      </div>
      <img className="project-image" src={img} />
    </div>
  )
}

export default Projects
