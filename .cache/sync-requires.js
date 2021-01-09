const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/pages/404.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/pages/thanks.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/templates/about-page.js"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/templates/blog-list.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/templates/blog-post.js"))),
  "component---src-templates-contact-page-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/templates/contact-page.js"))),
  "component---src-templates-index-page-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/templates/index-page.js"))),
  "component---src-templates-youtube-js": hot(preferDefault(require("/home/thor/Development/gatsby/vovochicopimenta/src/templates/youtube.js")))
}

