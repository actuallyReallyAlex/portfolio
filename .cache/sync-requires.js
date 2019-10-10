const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-case-study-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/templates/caseStudy.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/pages/index.js")))
}

