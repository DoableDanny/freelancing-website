import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import "../styles/blog-post.module.css"

// Provide common components that can be used in mdx files without having to import.
const shortcodes = { Link }

export default function PageTemplate({ data: { mdx } }) {
  return (
    // The prose classes come from @tailwindcss/typography to style all of the HTML that comes from markdown.
    <article className="prose prose-lg lg:prose-xl">
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </article>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
