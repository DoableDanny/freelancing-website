import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 py-40">
      <div className="container px-4 xl:px-16 mx-auto flex flex-wrap flex-col md:flex-row">
        {/* Left col */}
        <div className="flex flex-col items-center w-full text-center md:text-left md:items-start md:w-2/5">
          <h1 className="text-white font-serif text-5xl lg:text-6xl">
            Get more clients to your garage
          </h1>
          <p className="text-white text-xl lg:text-2xl mt-12">
            Make it easy for people to find you online with a modern
            professional website.
          </p>
          <a
            href="#contact"
            className="mt-12 bg-white shadow-lg rounded-full py-5 px-8 text-xl font-bold transform hover:scale-105 hover:underline transition ease-in-out duration-200 hover:shadow-inner focus:border-black border-2 text-gray-800"
          >
            Contact Us
          </a>
        </div>

        {/* Right col */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <StaticImage
            className="w-4/5"
            src="../../images/hero.png"
            alt="hero img"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
