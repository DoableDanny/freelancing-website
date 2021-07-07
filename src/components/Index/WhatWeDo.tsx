import React from "react"

const WhatWeDo = () => {
  return (
    <section id="about" className="py-12 text-gray-800">
      <div className="container px-4 mx-auto flex flex-col justify-center items-center">
        <div className="w-3/5">
          <h2 className="home-page-heading">
            <span className="text-blue-500">What</span> We Do
          </h2>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quam quidem necessitatibus perspiciatis nulla consectetur illum nemo
            dolorum, veniam, corrupti voluptatum molestiae quaerat quo sapiente
            laboriosam atque recusandae facilis tempora!
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-8 mt-20 text-center w-full">
          <InfoListItem />
          <InfoListItem />
          <InfoListItem />
        </ul>
      </div>
    </section>
  )
}

const InfoListItem = () => {
  return (
    <li className="w-3/6 md:w-4/6 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
      <h4 className="font-bold mb-2">Mobile First Design</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta totam
        aliquid ab ea asperiores itaque.
      </p>
    </li>
  )
}

export default WhatWeDo
