import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Gradient = ({ data }) => {
  const [numberOfGradients, setNumberOfGradients] = useState(1)
  const loadMore = () => {
    setNumberOfGradients(old => old + 1)
  }
  const gradients = new Array(numberOfGradients).fill(0)
  const gradientsRef = useRef()
  const loadNextBatch = () => {
    const gradientElement = gradientsRef.current as any
    if (
      gradientsRef.current &&
      window.innerHeight + document.documentElement.scrollTop ===
        gradientElement.offsetHeight
    ) {
      loadMore()
    }
  }
  useEffect(() => {
    window.onscroll = loadNextBatch
  }, [])
  return (
    <Layout>
      <div className="gradients" ref={gradientsRef}>
        {gradients.map((_, index) => (
          <div key={`gradient${index}`} style={{ position: "relative" }}>
            <SingleGradient index={index} data={data} />
            <div className="container-container">
              <div className="links-container">
                <div style={{ placeSelf: "start start" }}>
                  <Link to="/">
                    <h1 id="main-header">Amit Meena </h1>
                    <h3>Copywriter, Creative Director</h3>
                  </Link>
                </div>
                <div>
                  <Link to="/portfolio">
                    <h1>Portfolio </h1>
                  </Link>
                </div>

                <div>
                  <Link to="/brands">
                    <h1>Brands I have worked for </h1>
                  </Link>{" "}
                </div>

                <div>
                  <Link to="/contact">
                    <h1>Contact</h1>
                  </Link>{" "}
                </div>

                <div>
                  <Link to="/deepest-secrets">
                    <h1>My deepest secrets </h1>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

const SingleGradient = ({ index, data }: { index: number; data: any }) => {
  const { small, medium, large, xl } = data?.file
  const sources = [small.fluid]
  return (
    <div key={index} style={{ position: "relative" }}>
      <Img className="background-gradient" fluid={sources}></Img>

      {/* <div className="evening">
        
      </div>
      <div className="night">
        
      </div>
      <div className="morning">
        
      </div>
      <div className="evening">
       
      <div className="night">
        
      </div>
      <div className="morning"></div> */}
      {/* <div className="morning">
        <Link to="/contact">
          <h1>FORMER PSEPHOLOGIST</h1>
          <h4>
            (yes, it’s relevant. It means I was an election researcher who
            travelled across the country for months and talked to people,
            literally thousands of them. Could ‘data’ be more authentic?)
          </h4>
        </Link>
      </div> */}
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/gradient.jpeg" }) {
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

export default Gradient
