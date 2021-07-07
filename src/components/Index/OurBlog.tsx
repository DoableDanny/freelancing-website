import React from "react"
import Card from "../Card"

const OurBlog = () => {
  return (
    <section id="blog" className="py-12 text-gray-800">
      <div className="container px-4 mx-auto lg:w-5/6 xl:w-4/6">
        <h2 className="home-page-heading">
          <span className="text-blue-500">Our</span> Blog
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-0">
          <Card
            title="Why you are Losing Money by Not having a website"
            paragraph="One of the first things people do when looking for something is to Google it. If you don't have a website, people can't easily see what you do or how much you charge. Having a professional site makes a big differennce."
            btnText="Read"
          />
          <Card
            title="Why you are Losing Money by Not having a website"
            paragraph="One of the first things people do when looking for something is to Google it. If you don't have a website, people can't easily see what you do or how much you charge. Having a professional site makes a big differennce."
            btnText="Read"
          />
        </div>
      </div>
    </section>
  )
}

export default OurBlog
