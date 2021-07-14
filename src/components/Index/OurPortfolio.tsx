import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Card from "../Card"

const OurPortfolio = () => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      image1: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
      image2: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
    }
  `)

  return (
    <section id="portfolio" className="py-12 text-gray-800">
      <div className="container px-4 m-auto">
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

        <div className="grid md:grid-cols-3 gap-10">
          <Card
            title="Longton Garage"
            paragraph="This is the description for the card. This will need to be made up by myself. It will be around three sentences approximately in length. Probs not much more at least."
            imgSrc={getImage(data.image1)}
            btnText="Visit Site"
          />
          <Card
            title="Dresdon Garage"
            paragraph="This is the description for the card. This will need to be made up by myself. It will be around three sentences approximately in length. Probs not much more at least."
            imgSrc={getImage(data.image2)}
            btnText="Visit Site"
          />
          <Card
            title="Blythe Garage"
            paragraph="This is the description for the card. This will need to be made up by myself. It will be around three sentences approximately in length. Probs not much more at least."
            imgSrc={getImage(data.image1)}
            btnText="Visit Site"
          />
        </div>
      </div>
    </section>
  )
}

export default OurPortfolio
