import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet defer={false} defaultTitle="Amit Meena Copywriter">
      <link
        href="https://fonts.googleapis.com/css2?family=Palanquin:wght@100&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default Head
