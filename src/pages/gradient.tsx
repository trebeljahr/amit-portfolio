import React from "react"
import Layout from "../components/layout"

const Gradient = () => {
  return (
    <Layout>
      <div className="gradient-bottom">
        <h1>Amit Meena</h1>
      </div>
      <div className="gradient-top">
        <h2>Copywriter, Creative Director</h2>
      </div>
      <div className="gradient-bottom">
        <p>
          FORMER PSEPHOLOGIST (yes, it’s relevant. It means I was an election
          researcher who travelled across the country for months and talked to
          people, literally thousands of them. Could ‘data’ be more authentic?)
        </p>
      </div>
      <div className="gradient-top">
        <p>Portfolio</p>
      </div>
      <div className="gradient-bottom">
        <p>My deepest secrets</p>
      </div>
      <div className="gradient-top">
        <p>Brands I have worked for</p>
      </div>
      <div className="gradient-bottom">
        <p>Contact</p>
      </div>
      <div className="gradient-top">
        <p>About</p>
      </div>
    </Layout>
  )
}

export default Gradient
