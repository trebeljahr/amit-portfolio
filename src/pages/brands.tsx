import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const shuffleArray = (inputArray: any[]) => {
  let outArray = [...inputArray]
  for (let i = outArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = outArray[i]
    outArray[i] = outArray[j]
    outArray[j] = temp
  }
  return outArray
}

const BrandsPage = ({ data }) => {
  const images = shuffleArray(data.allFile.edges)
  return (
    <Layout>
      <div className="brand-image-container">
        {images.map(({ node }: any, index: number) => {
          return (
            <Img
              className="brand-image"
              key={`brand-image-${index}`}
              imgStyle={{
                objectFit: "contain",
                filter:
                  "grayscale(100%) contrast(100%) invert() brightness(120%)",
              }}
              fluid={node.small.fluid}
            ></Img>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "brandlogoimages" } }) {
      edges {
        node {
          small: childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BrandsPage
