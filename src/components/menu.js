import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div style = {{
    paddingTop: '10px',
    background: '#f4f4f4',
  }}>
    <ul style = {{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li><a href = '/'>Home</a></li>
      <li><a href = './fun-stuff'>Fun Stuff</a></li>
      <li><a href = './page-2'>Page 2</a></li>
    </ul>
  </div>
)

export default Menu
