import React from "react"

import Hero from "../components/Index/Hero"
import WhatWeDo from "../components/Index/WhatWeDo"
import OurPortfolio from "../components/Index/OurPortfolio"
import OurBlog from "../components/Index/OurBlog"
import Pricing from "../components/Index/Pricing"
import Testimonials from "../components/Index/Testimonials"
import Contact from "../components/Index/Contact"

const IndexPage = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurPortfolio />
      <Testimonials />
      <OurBlog />
      <Pricing />
      <Contact />
    </>
  )
}

export default IndexPage
