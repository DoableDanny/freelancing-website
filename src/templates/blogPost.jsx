import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Provide common components that can be used in mdx files without having to import.
const shortcodes = { Link }

export default function PageTemplate({ data: { mdx } }) {
  const image = getImage(mdx.frontmatter.feature_image)

  return (
    // The prose classes come from @tailwindcss/typography to style all of the HTML that comes from markdown.
    <div className="container mx-auto shadow-md rounded p-4 w-11/12 md:w-5/6 lg:w-4/6 xl:w-3/6 my-16">
      <article className="prose sm:prose-lg lg:prose-xl mx-auto">
        <h1 className="text-center">{mdx.frontmatter.title}</h1>
        <div className="mx-auto flex justify-center">
          <GatsbyImage image={image} alt={mdx.frontmatter.title} />
        </div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </div>
  )
}

// $id is passed in from gatsby-node.js
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        feature_image {
          childImageSharp {
            gatsbyImageData(width: 650, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
