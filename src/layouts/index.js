import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span className="header__main" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Landau
        </Link>
      </span>
      <span>
        <span className="header__item" style={{ margin: 0 }}>
          <Link to="/reference" >
            Reference
          </Link>
        </span>
        <span className="header__item" style={{ margin: 0 }}>
          <a href="https://github.com/landaujs/landau">
            Github
          </a>
        </span>
      </span>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Landau - React-like CAD system with JSX syntax"
      meta={[
        { name: 'description', content: 'React-like CAD system with JSX syntax' },
        { name: 'keywords', content: 'react, cad, jsx' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
