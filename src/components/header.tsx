import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet defer={false} defaultTitle="Amit Meena Copywriter">
      <link
        href="https://fonts.googleapis.com/css2?family=Jaldi&family=Karla&family=PT+Sans&family=Palanquin+Dark:wght@500&family=Yanone+Kaffeesatz&display=swap"
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
