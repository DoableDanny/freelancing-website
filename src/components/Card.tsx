import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// For internal links, use gatsbyLink (pass in gatsbyLinkUrl). For external links, use anchor tag (pass in href).
type CardProps = {
  title: string
  paragraph: string
  imgSrc: any
  btnText: string
  gatsbyLinkUrl?: string
  href?: string
}

const Card = ({
  title,
  paragraph,
  btnText,
  imgSrc,
  gatsbyLinkUrl,
  href,
}: CardProps) => {
  const btnClassNames =
    "bg-green-500 rounded py-3 px-12 font-medium hover:bg-green-400 text-white hover:shadow-inner shadow-md  inline-block cursor-pointer"

  return (
    <div className="rounded shadow-md max-w-xs overflow-hidden text-center mx-auto transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out h-full">
      {/* StaticImage can't accept external props, therefore we have to use GatsbyImage here. */}
      <GatsbyImage
        className="h-52 w-full object-cover"
        image={imgSrc}
        alt="card image"
      />
      <div className="text-center p-4">
        <div>
          <h3 className="text-lg font-bold mt-4">{title}</h3>
          <p className="mt-4">{paragraph}</p>
        </div>
        <div className="mt-6">
          {gatsbyLinkUrl ? (
            <Link to={gatsbyLinkUrl} className={btnClassNames}>
              {btnText}
            </Link>
          ) : (
            <a href={href}>{btnText}</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
