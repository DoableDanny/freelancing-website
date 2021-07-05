import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Index/Hero"
import WhatWeDo from "../components/Index/WhatWeDo"
import OurPortfolio from "../components/Index/OurPortfolio"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <WhatWeDo />
      <OurPortfolio />
    </Layout>
  )
}

export default IndexPage
