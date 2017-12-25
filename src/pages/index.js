import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="index-header">
      <h1 className="index-header__headline">Landau</h1>
      <p className="index-header__subheadline">A JavaScript library for building CAD models and applications</p>
      <Link to="/reference">View Reference</Link>
    </div>
  </div>
)

export default IndexPage
