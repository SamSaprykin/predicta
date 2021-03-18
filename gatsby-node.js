/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
    const { createFieldExtension, createTypes } = actions
    createFieldExtension({
      name: `defaultArray`,
      extend() {
        return {
          resolve(source, args, context, info) {
            if (source[info.fieldName] == null) {
              return []
            }
            return source[info.fieldName]
          },
        }
      },
    })
    const typeDefs = `
      type Site implements Node {
        siteMetadata: SiteMetadata
      }
      type SiteMetadata {
        menuLinks: [MenuLinks]!
      }
      type MenuLinks {
        name: String!
        link: String!
        subMenu: [SubMenu] @defaultArray
      }
      type SubMenu {
        name: String
        link: String
      }
    `
    createTypes(typeDefs)
  }