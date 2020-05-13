import React, { useState } from "react"
import Layout from "../components/layout"

const Home = () => {
  const [loading, setLoading] = useState(true)
  return (
    <Layout color="white">
      <div className="container">Hi there this is the Home Page!</div>
    </Layout>
  )
}

export default Home
