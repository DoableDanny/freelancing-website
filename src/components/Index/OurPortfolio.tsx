import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const OurPortfolio = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="container px-4 m-auto">
        <h4 className="home-page-heading">
          <span className="text-blue-500">Our</span> Portfolio
        </h4>

        <div className="grid md:grid-cols-3 gap-10">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

const Card = () => {
  return (
    <div className="rounded shadow-md max-w-xs overflow-hidden text-center mx-auto transform hover:scale-105 hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
      <StaticImage
        className="w-full h-32"
        src="../images/hero.png"
        alt="card img"
      />
      <div className="px-2">
        <h4 className="my-3 font-bold">Longton Garage</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
          velit inventore libero repellat magnam facere! Libero impedit nemo
          corrupti deserunt.
        </p>
        <button className="bg-green-300 rounded p-2 hover:bg-green-500 hover:text-white hover:shadow-inner shadow-md my-5">
          Visit Site
        </button>
      </div>
    </div>
  )
}

export default OurPortfolio
