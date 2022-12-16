/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const routes = [
//   // {
//   //   type: "article",
//   //   path: "/articles/:uid",
//   // },
//   // {
//   //   type: "page",
//   //   path: "/:uid",
//   // },
// ];

module.exports = {
  siteMetadata: {
    title: `gatsbyprismic`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        // schemas: {
        //   post: require("./src/schemas/articles.json"),
        // },
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // routes,
      },
    },
  ],
};
