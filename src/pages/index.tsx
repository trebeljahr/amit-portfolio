import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { debounce } from "lodash"

const Gradient = () => {
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
    window.onscroll = debounce(loadNextBatch, 50)
  }, [])
  return (
    <Layout>
      <div className="gradients" ref={gradientsRef}>
        {gradients.map((_, index) => (
          <div key={`gradient${index}`}>
            <SingleGradient index={index} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

const SingleGradient = ({ index }: { index: number }) => {
  return (
    <>
      <div className="evening">
        <Link to="/projects">
          <h1>Amit Meena </h1>
        </Link>
      </div>
      <div className="night">
        <Link to="/projects">
          <h1>Copywriter, Creative Director</h1>
        </Link>
      </div>
      <div className="morning">
        <Link to="/projects">
          <h1>Portfolio </h1>
        </Link>
      </div>
      <div className="evening">
        <Link to="/deepest-secrets">
          <h1>My deepest secrets </h1>
        </Link>
      </div>
      <div className="night">
        <Link to="/brands">
          <h1>Brands I have worked for </h1>
        </Link>
      </div>
      <div className="morning">
        <Link to="/contact">
          <h1>Contact </h1>
        </Link>
      </div>
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
    </>
  )
}

export default Gradient
