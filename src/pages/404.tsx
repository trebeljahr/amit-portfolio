import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ErrorPage = ({ data }) => {
  const sources = [
    data.file.small.fluid,
    { ...data.file.medium.fluid, media: "min-width: 500px" },
    { ...data.file.large.fluid, media: "min-width: 1000px" },
    { ...data.file.xl.fluid, media: "min-width: 2000px" },
  ]
  return (
    <Layout>
      <div className="container">
        <h1 id="error-page-header">404 Oh no. </h1>
        <div className="error-page-image">
          <Img fluid={sources}></Img>
        </div>
        <p id="error-page-text">
          Seems like you got lost. <br /> Maybe try another path huh?
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/forest.jpg" }) {
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
`
export default ErrorPage
