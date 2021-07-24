import React from "react"
import Fade from "react-reveal/Fade"

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 text-gray-800">
      <div className="container m-auto">
        <Fade>
          <div className="home-page-heading">
            <h2>
              <span className="text-blue-500">Our </span>Pricing
            </h2>
            <h3 className="font-extrabold text-5xl my-6">
              Simple, Transparent Pricing for Everyone
            </h3>
          </div>
        </Fade>

        <Fade left>
          <div className="flex flex-col md:flex-row justify-center items-center w-11/12 sm:w-full mx-auto">
            <PricingCard
              title="Basic Plan"
              price="199"
              description="A beautifully designed four-page website to give your business a professional image and drive more people to your garage."
              features={[
                "4 page website",
                "Custom colors, text & images",
                "SEO optimized",
              ]}
            />
            <PricingCard
              title="Pro Plan"
              price="299"
              description="Many people today prefer to book online rather than call. Cater for these people with a website with an online booking system."
              bannerTitle="MOST POPULAR"
              larger
              features={[
                "5 page website",
                "Take bookings online",
                "Custom colors, text & images",
                "SEO optimized",
              ]}
            />
            <PricingCard
              title="Premium Plan"
              price={`50 / month`}
              description="Run ads on Google for specific search terms to drive traffic away from your competitors and to your website."
              features={[
                "Google ads",
                "We'll run experiments to optimize your ads",
              ]}
            />
          </div>
        </Fade>
      </div>
    </section>
  )
}

type CardProps = {
  title: string
  price: string
  description: string
  bannerTitle?: string
  larger?: boolean
  features: string[]
}

const PricingCard = ({
  title,
  price,
  description,
  bannerTitle,
  larger,
  features,
}: CardProps) => {
  return (
    <div
      className={`rounded-lg shadow-md border-gray-100 border-2 mb-16 md:mb-0 max-w-xs overflow-hidden bg-white ${
        larger ? `transform scale-105 z-10 shadow-lg` : null
      }`}
    >
      {bannerTitle ? (
        <div className="bg-blue-600 py-2 text-white text-center">
          {bannerTitle}
        </div>
      ) : null}
      <div className="p-6">
        <h3 className="uppercase text-xl text-center mb-6">
          <span className="font-bold mr-2">{title.split(" ")[0]}</span>{" "}
          {title.split(" ")[1]}
        </h3>
        <h4 className="text-4xl font-bold flex items-center justify-center mb-10 text-center">
          £{price}
        </h4>
        <p className="mb-8 text-gray-600 text-sm">{description}</p>

        <ul>
          {features.map((feature, i) => (
            <li key={i} className="flex items-center mb-2">
              <div className="text-green-500 rounded-full fill-current">
                <svg
                  className="w-5 h-5 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mx-auto block bg-green-500 mt-12 text-white py-3 rounded hover:bg-blue-600 text-lg text-center"
        >
          CONTACT US
        </a>
      </div>
    </div>
  )
}

export default Pricing
