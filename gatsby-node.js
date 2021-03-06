exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    
    const docTemplate = require.resolve(`./src/templates/docTemplate.js`);
    
    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
    
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: docTemplate,
            context: {
                path: node.frontmatter.path,
            },
        })
    })
}
