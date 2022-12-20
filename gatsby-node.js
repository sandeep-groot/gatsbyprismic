exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allPrismicPost {
        edges {
          node {
            uid
            type
            url
          }
        }
      }
    }
  `);

  data.allPrismicPost.edges.forEach((edge) => {
    const slug = edge.node.uid;

    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    });
  });
};
