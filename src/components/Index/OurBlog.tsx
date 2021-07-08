import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Card from "../Card"

const OurBlog = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
      allMdx(limit: 3) {
        edges {
          node {
            frontmatter {
              title
              slug
              excerpt
              feature_image {
                childrenImageSharp {
                  gatsbyImageData(width: 350, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="blog" className="py-12 text-gray-800">
      <div className="container px-4 mx-auto lg:w-5/6 xl:w-4/6">
        <h2 className="home-page-heading">
          <span className="text-blue-500">Our</span> Blog
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-0">
          {data.allMdx.edges.map((edge, i) => {
            const frontmatter = edge.node.frontmatter

            return (
              <Card
                imgSrc={
                  frontmatter.feature_image.childrenImageSharp[0]
                    .gatsbyImageData
                }
                title={frontmatter.title}
                paragraph={frontmatter.excerpt}
                gatsbyLinkUrl={frontmatter.slug}
                btnText="Read"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurBlog
