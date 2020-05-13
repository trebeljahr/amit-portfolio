require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Amit Meena Copywriter`,
    description: `Hi there, I am Amit Meena a millenial not so millenial who is copywriting for big agencies. This is my 
    portfolio, where you can take a look at all the cool stuff I am doing. `,
    author: `Amit Meena`,
  },
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Swantje Furtaks Website",
        short_name: "Swantje Furtaks Website",
        start_url: "/",
        background_color: "#19647E",
        theme_color: "#19647E",
        display: "standalone",
        icon: "src/assets/images/icon.jpeg",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
  ],
}
