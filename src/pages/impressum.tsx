import React, { useState } from "react"
import Layout from "../components/layout"
import Typewriter from "../components/typewriter"

const Impressum = () => {
  return (
    <Layout>
      <div className="container">
        <Typewriter />
        Impressum
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Impressum
