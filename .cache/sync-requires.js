const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/areliajones/Documents/_repos/sam-jones-family/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/areliajones/Documents/_repos/sam-jones-family/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/areliajones/Documents/_repos/sam-jones-family/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/areliajones/Documents/_repos/sam-jones-family/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/areliajones/Documents/_repos/sam-jones-family/src/pages/page-2.js")))
}

