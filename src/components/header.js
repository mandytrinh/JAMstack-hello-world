import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#8ad1b7',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </div>
      </h1>
    </div>
  </div>
)

export default Header
