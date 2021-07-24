import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import ResponsiveDesignIcon from "../../images/responsive-design-icon.svg"
import SEOIcon from "../../images/seo-icon.svg"
import OnlineShoppingIcon from "../../images/online-shopping-icon.svg"

const WhatWeDo = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const iconWidth = "w-20 h-auto mx-auto"

  return (
    <section id="about" className="py-12 text-gray-800">
      <div className="container px-4 mx-auto flex flex-col justify-center items-center">
        <Fade>
          <div className="w-4/5 lg:w-3/5">
            <div className="flex justify-center">
              <h2 className="home-page-heading">
                <span className="text-blue-500">What</span> We Do
              </h2>
            </div>

            <p className="text-lg text-center">
              {data.site.siteMetadata.title} is a Stoke, UK based web design
              company. We help garages{" "}
              <span className="font-bold">
                get more clients by launching affordable and scalable web design
                projects.
              </span>
            </p>
            <p className="text-lg text-center mt-8">
              We specialise in responsive web design and digital marketing to
              help get more people to your garage, and make you more money.
            </p>
          </div>
        </Fade>

        <ul className="grid md:grid-cols-3 gap-8 mt-20 text-center w-full">
          <Fade left delay={200}>
            <InfoListItem
              title="Mobile First Design"
              description="We design for mobiles first, then scale up to desktop, so your website will look amazing on all screen sizes."
              icon={<ResponsiveDesignIcon className={iconWidth} />}
            />
          </Fade>

          <Fade left delay={400}>
            <InfoListItem
              title="Optimization"
              description="We use proven Search Engine Optimization and Search Engine Marketing to ensure that your website ranks well on Google, driving traffic to your website."
              icon={<SEOIcon className={iconWidth} />}
            />
          </Fade>

          <Fade left>
            <InfoListItem
              title="Wordpress Experts"
              description="Whether you want a simple website, take bookings online, or sell your products and services online, we can get you setup!"
              icon={<OnlineShoppingIcon className={iconWidth} />}
            />
          </Fade>
        </ul>
      </div>
    </section>
  )
}

const InfoListItem = ({ title, description, icon }) => {
  return (
    <li className="w-4/6 md:w-5/6 mx-auto">
      {icon}
      <h4 className="font-bold mb-2 text-lg">{title}</h4>
      <p className="text-lg">{description}</p>
    </li>
  )
}

export default WhatWeDo
