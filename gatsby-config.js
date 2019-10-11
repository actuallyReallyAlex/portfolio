const path = require("path");

const config = {
  siteMetadata: {
    title: "Portfolio",
    author: "Alex Lee"
  },
  plugins: [
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        enabled: (() => ["production"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Comfortaa"]
        }
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-124507483-3",
      head: true
    }
  });
}

module.exports = config;
