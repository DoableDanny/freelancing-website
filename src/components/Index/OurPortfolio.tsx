import React from "react"
import Card from "../Card"

const OurPortfolio = () => {
  return (
    <section id="portfolio" className="py-12 text-gray-800">
      <div className="container px-4 m-auto">
        <h2 className="home-page-heading">
          <span className="text-blue-500">Our</span> Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Card
            title="Longton Garage"
            paragraph="This is the description for the card. This will need to be made up by myself. It will be around three sentences approximately in length. Probs not much more at least."
            btnText="Visit Site"
          />
          <Card
            title="Dresdon Garage"
            paragraph="This is the description for the card. This will need to be made up by myself. It will be around three sentences approximately in length. Probs not much more at least."
            btnText="Visit Site"
          />
          <Card
            title="Blythe Garage"
            paragraph="This is the description for the card. This will need to be made up by myself. It will be around three sentences approximately in length. Probs not much more at least."
            btnText="Visit Site"
          />
        </div>
      </div>
    </section>
  )
}

export default OurPortfolio
