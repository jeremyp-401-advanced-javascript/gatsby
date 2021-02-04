import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `300px`, float: 'left', padding: `1.45rem`, paddingTop: `0` }}>
      <Image />
    </div>
    <h1>Jeremy Penning</h1>
    <p>Hi! My name is Jeremy Penning. I'm a Full Stack Javascript developer with 10+ years of graphic design and full-stack web development and 20+ years of systems administration for a wide variety of clients: Political candidates, companies from small businesses to international corporations and government institutions.</p>
    <p>I've loved technology ever since I've been alive. In fact, when I was a kid I wanted to know how things worked so much that sometimes I'd take my toys and electronics apart before playing with them for the first time!</p>
    <p>I like to think of myself as the Swiss Army knife of the tech world... I'm interested in a wide rangeof topics from AI, robotics, software engineering and development, networking, etc. to the very basis of human technology and it's progression over time.</p>
    <p>Here are a few projects that I've built recently while learning the newest in Full Stack Development from Code Fellows.</p>
    <ul>
      <li><Link to="https://github.com/jeremyp-401-advanced-javascript/storefront">Storefront</Link> - A React/Redux-based Sstorefront w/ Material UI theming</li>
      <li><Link to="https://github.com/jeremyp-401-advanced-javascript/resty">RESTy</Link> <Link to="https://jeremyp-resty.herokuapp.com/">(Live)</Link> - A REST API tester</li>
      <li><Link to="https://github.com/jeremyp-401-advanced-javascript/shakeEmUp">Shake 'Em Up</Link> - A React Native mobile app for interactive dice rolls</li>
      <li><Link to="https://github.com/jeremyp-401-advanced-javascript/todo">Todo!</Link> - A Bootstrap themed React app using state/context/REST for data storage and retrieval</li>
      <li><Link to="https://github.com/TeamMocha/PostMark">PostMark</Link> and <Link to="https://github.com/TeamMocha/PostMarkUI">PostMark UI</Link> - A NodeJs program with a React/Redux Material UI themed front end to convert Postman collections to Markdown syntax.</li>
    </ul>
    <Link to="/portfolio/">See more of my previous projects...</Link> <br />
  </Layout>
)

export default IndexPage
