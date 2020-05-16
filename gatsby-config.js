require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Amit Meena Copywriter`,
    description: `Hi there, I am Amit Meena a millenial not so millenial who is copywriting for big agencies. This is my 
    portfolio, where you can take a look at all the cool stuff I am doing. `,
    author: `Amit Meena`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
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
        name: "Amit Meena Copywriter",
        short_name: "Amit Meena Copywriter",
        start_url: "/",
        background_color: "#19647E",
        theme_color: "#19647E",
        display: "standalone",
        icon: "src/assets/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
