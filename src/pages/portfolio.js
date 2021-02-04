import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Portfolio</h1>
    <p>Here are a few of my past projects. More details can be found at <Link to="https://pixeljava.com/">pixeljava.com</Link></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
