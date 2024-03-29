import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  return (
    <Layout color="black">
      <div className="desktop-container">
        <div id="projects-intro-text">
          {/* <h1>Portfolio</h1> */}
          <p>
            This is part of the webpage is still work in progress. I am working
            on gathering the materials to represent the work I have been doing
            over the last years at the moment. Meanwhile, you can look at some
            beautiful stock photos from Unsplash with some placeholder hover
            animations. 😉
          </p>
        </div>
        <div className="projects-container">
          {data?.allFile?.nodes?.map(toProjects)}
        </div>
      </div>
    </Layout>
  )
}

interface toProjectsProps {
  small: any
  medium: any
  large: any
  xl: any
}

const toProjects = (
  { small, medium, large, xl }: toProjectsProps,
  index: number
) => {
  const sources = [
    small.fluid,
    { ...medium.fluid, media: `(min-width: 500px)` },
    { ...large.fluid, media: `(min-width: 1000px)` },
    { ...xl.fluid, media: `(min-width: 2000px)` },
  ]
  return (
    <div key={`project-${index}`}>
      <Project title={`Project ${index + 1}`}>
        <Img className="project-image" fluid={sources}></Img>
      </Project>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      nodes {
        small: childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        medium: childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        large: childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        xl: childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

interface ProjectProps {
  title: string
  children: any
}

const Project = ({ title, children }: ProjectProps) => {
  return (
    <div className="project">
      {children}
      <div className="project-header-container">
        <h2 className="project-header">{title}</h2>
      </div>
    </div>
  )
}

export default Projects
