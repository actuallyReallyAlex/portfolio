const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-case-study-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/templates/caseStudy.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/templates/blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/pages/index.js"))),
  "component---src-pages-works-js": hot(preferDefault(require("/Users/alex/Repos/portfolio/src/pages/works.js")))
}

