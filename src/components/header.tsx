import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet defer={false} defaultTitle="Amit Meena Copywriter">
      <link
        href="https://fonts.googleapis.com/css2?family=Palanquin:wght@100&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/ef7381bf93.js"
        crossOrigin="anonymous"
      ></script>
    </Helmet>
  )
}

export default Head
