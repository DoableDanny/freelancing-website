import React from "react"

const Portfolio = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="container px-4 mx-auto text-lg">
        <div className="home-page-heading">
          <p className="my-5 text-base font-medium tracking-tight text-blue-500 uppercase">
            Our customers love our product
          </p>
          <h2 className="">Testimonials</h2>
          <p className="text-xl font-medium text-gray-500 my-6">
            Don't just take our word for it, read from our extensive list of
            case studies and customer testimonials.
          </p>
        </div>

        <div className="xl:grid xl:grid-cols-2 xl:gap-10">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = () => {
  return (
    <div className="bg-gray-50 rounded-lg py-8 mb-16 md:flex md:flex-row-reverse md:justify-around md:w-5/6 lg:w-4/6 xl:w-full mx-auto hover:bg-white hover:shadow-sm transition-all duration-300 ease">
      <div>
        <img
          className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0 mx-auto"
          src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
          alt=""
        />
      </div>
      <div className="relative text-center text-gray-500 font-medium md:text-left md:w-4/6 pl-12 flex flex-col">
        <svg
          className="absolute left-0 w-10 h-10 text-blue-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 125"
        >
          <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
        </svg>
        <p className="my-4">
          Fantastic work! The website looks amazing and we are already seeing
          more clients visit the garage.
        </p>
        <p>
          <span className="text-gray-800">Sandra Bullock</span> - CEO, Big
          Garage Company
        </p>
      </div>
    </div>
  )
}

export default Portfolio
