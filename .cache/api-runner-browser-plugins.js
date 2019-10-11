module.exports = [
  {
    plugin: require("/Users/alex/Repos/portfolio/node_modules/gatsby-plugin-sentry/gatsby-browser.js"),
    options: {
      plugins: [],
      dsn: "https://5a28f5da01f34b0283639b079218978e@sentry.io/1492278",
      environment: "development",
      enabled: false
    }
  },
  {
    plugin: require("/Users/alex/Repos/portfolio/node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js"),
    options: { plugins: [], google: { families: ["Comfortaa"] } }
  }
];
