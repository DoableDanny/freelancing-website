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
    <div className="relative pt-16 pb-12 min-h-screen">
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <Footer siteTitle={siteTitle} />
    </div>
  )
}

export default Layout
