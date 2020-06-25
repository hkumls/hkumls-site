module.exports = {
  pathPrefix: "/hkumls-site",
  siteMetadata: {
    title: `HKUMLS`,
    description: `HKU Machine Learning Society`,
    author: `@HKUMLS`,
  },
  plugins: [
    "gatsby-plugin-chakra-ui",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /SVGs/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/hkumlsLogo.png",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
