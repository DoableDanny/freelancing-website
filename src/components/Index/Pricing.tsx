import React from "react"

const Pricing = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="container m-auto">
        <div className="home-page-heading">
          <h2>
            <span className="text-blue-500">Our </span>Pricing
          </h2>
          <h3 className="font-extrabold text-5xl my-6">
            Simple, Transparent Pricing for Everyone
          </h3>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-11/12 sm:w-full mx-auto">
          <PricingCard
            title="Basic Plan"
            price="199"
            features={[
              "Awesome feature",
              "And another one",
              "And finally this one an all",
            ]}
          />
          <PricingCard
            title="Pro Plan"
            price="299"
            bannerTitle="MOST POPULAR"
            larger
            features={[
              "Awesome feature",
              "And another one",
              "And finally this one an all",
            ]}
          />
          <PricingCard
            title="Premium Plan"
            price={`50 / month`}
            features={[
              "Awesome feature",
              "And another one",
              "And finally this one an all",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

type CardProps = {
  title: string
  price: string
  bannerTitle?: string
  larger?: boolean
  features: string[]
}

const PricingCard = ({
  title,
  price,
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
        <h4 className="text-4xl font-bold flex items-center justify-center mb-10">
          <span className="text-gray-700 text-lg">£</span>
          {price}
        </h4>
        <p className="mb-8 text-gray-600 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          molestiae est provident quae.
        </p>

        <ul className="text-xl">
          {features.map(feature => (
            <li className="flex items-center mb-2">
              <div className="text-green-500 rounded-full fill-current ">
                <svg
                  className="w-6 h-6 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="ml-3 text-lg">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="mx-auto block bg-green-500 mt-12 text-white py-3 px-8 rounded hover:bg-blue-600 text-lg">
          SELECT THIS PLAN
        </button>
      </div>
    </div>
  )
}

export default Pricing
