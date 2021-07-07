// The file gatsby-browser.js lets you respond to Gatsby-specific events within the browser, and wrap your page components in additional global components. The Gatsby Browser API gives you many options for interacting with the client-side of Gatsby.

import React from "react"
import Layout from "./src/components/Layout"
import "./src/styles/global.css"

export const wrapRootElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
