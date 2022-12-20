
// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
    <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=gatsby-testing-project"></script>
]

// const BodyAttributes = {
//   "data-theme": "dark"
// }


exports.onRenderBody = ({
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes
  }, pluginOptions) => {
    setHtmlAttributes(HtmlAttributes)
    setHeadComponents(HeadComponents)
    // setBodyAttributes(BodyAttributes)
  }