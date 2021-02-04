import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const Footer = () => (
  <footer
    style={{
      background: `black`,
      color: `ivory`,
      marginTop: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          &copy; 2021 - Jeremy Penning <FontAwesomeIcon icon={faGithub} />
        </Link>
      </span>
      <span style={{ float: 'right', margin: 0 }}>
        <Link
          to="https://github.com/jeremyp-401-advanced-javascript/gatsbyPortfolio"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <FontAwesomeIcon icon={faGithub} />This project on GitHub 
        </Link>
      </span>
    </div>
  </footer>
)

export default Footer
