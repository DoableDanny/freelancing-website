import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Index/Hero"
import WhatWeDo from "../components/Index/WhatWeDo"
import OurPortfolio from "../components/Index/OurPortfolio"
import OurBlog from "../components/Index/OurBlog"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <WhatWeDo />
      <OurPortfolio />
      <OurBlog />
    </Layout>
  )
}

export default IndexPage
