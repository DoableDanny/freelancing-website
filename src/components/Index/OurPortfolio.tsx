import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

import Card from "../Card"

const OurPortfolio = () => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      image1: file(relativePath: { eq: "example-garage.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
      image2: file(relativePath: { eq: "example-garage-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
      image3: file(relativePath: { eq: "example-garage-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
    }
  `)

  return (
    <section id="portfolio" className="py-12 text-gray-800">
      <div className="container px-4 m-auto">
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
              title="Example Garage 1"
              paragraph="Your website will feature in one of these cards once it has been made!"
              imgSrc={getImage(data.image1)}
              btnText="Visit Site"
            />
          </Fade>

          <Fade left delay={200}>
            <Card
              title="Example Garage 2"
              paragraph="Your website will feature in one of these cards once it has been made!"
              imgSrc={getImage(data.image2)}
              btnText="Visit Site"
            />
          </Fade>

          <Fade left>
            <Card
              title="Example Garage 3"
              paragraph="Your website will feature in one of these cards once it has been made!"
              imgSrc={getImage(data.image3)}
              btnText="Visit Site"
            />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default OurPortfolio
