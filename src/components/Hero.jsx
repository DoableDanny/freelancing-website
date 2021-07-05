import React from "react"

const Hero = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-blue-700 to-blue-500 py-52">
      <div className="container px-4 m-auto">
        <h1 className="text-white font-serif text-6xl">
          Get more clients to your garage
        </h1>
        <p className="text-white text-2xl mt-12">
          Make it easy for people to find you online with a modern professional
          website.
        </p>
        <button className="mt-12 bg-white rounded-full py-5 px-8 text-xl font-bold transform hover:scale-105 hover:underline transition ease-in-out duration-200">
          Give us a call
        </button>
      </div>
    </div>
  )
}

export default Hero
