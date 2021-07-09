import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div
        id="content-wrapper"
        className="pt-16 flex flex-col justify-between min-h-screen"
      >
        <main>{children}</main>
        <Footer siteTitle={siteTitle} />
      </div>
    </>
  )
}

export default Layout
