import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, image, url, titleTemplate }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            image={image}
            titleTemplate={titleTemplate}
            meta={[
              {
                property: `og:image`,
                content: image,
              },
              {
                property: `image`,
                content: image,
              },
              {
                name: `description`,
                content: description,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: description,
              },
              {
                property: `og:image`,
                content: image,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property:`og:url`,
                content: url,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: description,
              },
              {
                property: `twitter:image`,
                content: image,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`