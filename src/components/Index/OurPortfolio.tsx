import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

import Card from "../Card"

const OurPortfolio = () => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      image1: file(relativePath: { eq: "rickshaw_website.JPG" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
      image2: file(relativePath: { eq: "project_partners_website.JPG" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
      image3: file(relativePath: { eq: "defusco_website.JPG" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
    }
  `)

  return (
    <section id="portfolio" className="my-12 text-gray-800">
      <div className="container px-4 mx-auto">
        <Fade>
          <div className="home-page-heading">
            <p className="my-5 text-base font-medium tracking-tight text-blue-500 uppercase">
              We take pride in our work
            </p>
            <h2>
              <span className="text-blue-500">Our</span> Portfolio
            </h2>
            <p className="text-xl font-medium text-gray-500 my-6">
              Check out the websites we've made for businesses just like yours.
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-3 gap-10">
          <Fade left delay={400}>
            <Card
              title="Media-pro Rickshaw"
              paragraph="A tuk tuk tour business based in London."
              imgSrc={getImage(data.image1)}
              btnText="Visit Site"
              gatsbyLinkUrl="https://mediapro-rickshaw.co.uk/"
            />
          </Fade>

          <Fade left delay={200}>
            <Card
              title="Project Partners"
              paragraph="A team of project delivery professionals that offer a range of unparalleled services to various sectors."
              imgSrc={getImage(data.image2)}
              btnText="Visit Site"
              gatsbyLinkUrl="https://project.partners/"
            />
          </Fade>

          <Fade left>
            <Card
              title="De fusco Copywriting"
              paragraph="A freelance copywriter looking to begin blogging, and showcasing his work online."
              imgSrc={getImage(data.image3)}
              btnText="Visit Site"
              gatsbyLinkUrl="https://defuscocopywriting.co.uk/"
            />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default OurPortfolio
