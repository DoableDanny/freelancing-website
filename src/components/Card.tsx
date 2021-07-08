import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// For internal links, use gatsbyLink (pass in gatsbyLinkUrl). For internal links, use anchor tag (pass in href).
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
  imgSrc,
  btnText,
  gatsbyLinkUrl,
  href,
}: CardProps) => {
  const btnClassNames =
    "bg-green-500 rounded py-3 px-12 font-medium hover:bg-green-400 text-white hover:shadow-inner shadow-md my-5 inline-block"

  return (
    <div className="rounded shadow-md max-w-xs overflow-hidden text-center mx-auto transform hover:scale-105 hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
      <GatsbyImage className="w-full h-52" image={imgSrc} alt="card img" />
      <div className="px-2">
        <h4 className="my-3 font-bold text-lg">{title}</h4>
        <p>{paragraph}</p>
        {gatsbyLinkUrl ? (
          <Link to={gatsbyLinkUrl} className={btnClassNames}>
            {btnText}
          </Link>
        ) : (
          <a href={href} className={btnClassNames}>
            {btnText}
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
