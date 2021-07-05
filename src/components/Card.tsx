import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Card = ({ title, paragraph, btnText }) => {
  // Note: will likely need to switch to GatsbyImage and query in the data via staticQuery for dynamic images.
  return (
    <div className="rounded shadow-md max-w-xs overflow-hidden text-center mx-auto transform hover:scale-105 hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
      <StaticImage
        className="w-full h-32"
        src="../images/hero.png"
        alt="card img"
      />
      <div className="px-2">
        <h4 className="my-3 font-bold text-lg">{title}</h4>
        <p>{paragraph}</p>
        <button className="bg-green-300 rounded py-2 px-6 font-bold hover:bg-green-500 hover:text-white hover:shadow-inner shadow-md my-5">
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card
