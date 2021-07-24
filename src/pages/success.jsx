import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from "react-reveal/Zoom"

const Success = () => {
  return (
    <div className="container mx-auto my-16 text-center">
      <h2 className="text-3xl">Great Success!</h2>
      <p className="text-lg mt-10 mb-6">
        Your message was sent successfully. We will get back to you within 24
        hours.
      </p>
      <p className="text-lg">Speak to you soon!</p>
      <Zoom right delay={500}>
        <StaticImage
          className="w-5/6 md:w-4/6 lg:w-3/6 mt-8"
          src="../images/thumbs-up.jpg"
          alt="thumbs up"
        />
      </Zoom>
    </div>
  )
}

export default Success
