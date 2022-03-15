import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

import Fade from "react-reveal/Fade"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialImagesQuery {
      image1: file(relativePath: { eq: "profile_alex_horne.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
      image2: file(relativePath: { eq: "profile_defusco.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
      image3: file(relativePath: { eq: "profile_huw.JPG" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 350)
        }
      }
    }
  `)

  return (
    <section className="py-12 text-gray-800">
      <div className="container px-4 mx-auto text-lg">
        <Fade>
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
        </Fade>

        <div>
          <Fade left>
            <TestimonialCard
              review="At Project Partners we have used Danny on two occasions now.  Most recently I engaged with him to support the build of our internal SharePoint site.
              Danny delivered against our requirements, asked questions, researched and self taught where needed.
              Danny was patient, responsive, provided training and created training videos where needed.  He keep us up to date with daily progress reports.
              We are very pleased with the new look of our SharePoint site and have since launched internally to all of our Partners.
              Thank-you Danny for your help and support and we look forward to working together again in the future."
              reviewerName="Alex Horne"
              businessName="Project Partners"
              imgSrc={getImage(data.image1)}
            />
          </Fade>
          <div className="xl:flex xl:gap-10">
            <Fade left>
              <TestimonialCard
                review="I enjoyed working with Dan as he was very easy to work with and was really attentive and helpful, making the whole process very painless. He was very patient as I was unable to keep in regular contact and also not 100% sure of what I needed. The final product is fantastic and has attracted lots of positive feedback. I am delighted with the end result and would recommend Dan highly to anyone needing a website. Thank you very much."
                reviewerName="Mark De fusco"
                businessName="De Fusco Copywriting"
                imgSrc={getImage(data.image2)}
              />
            </Fade>
            <Fade left>
              <TestimonialCard
                review="I hired Daniel to help with the front end development of our web application, He is very professional and his work is great. looking forward to working with him more in the future!"
                reviewerName="Huw Davies Cooke"
                businessName="HDC Projects"
                imgSrc={getImage(data.image3)}
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  review: string
  reviewerName: string
  businessName: string
  imgSrc: any
}

const TestimonialCard = ({ review, reviewerName, businessName, imgSrc }) => {
  return (
    <div className="bg-gray-50 rounded-lg  py-8 mb-16 md:flex md:flex-row-reverse md:justify-around md:w-5/6 lg:w-4/6 xl:w-full mx-auto hover:bg-white hover:shadow-sm transition-all duration-300 ease">
      <div>
        <GatsbyImage
          className="w-16 h-16 rounded-full"
          image={imgSrc}
          alt="profile pic"
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
        <p className="my-4">{review}</p>
        <p>
          <span className="text-gray-800">{reviewerName}</span> - {businessName}
        </p>
      </div>
    </div>
  )
}

export default Testimonials
