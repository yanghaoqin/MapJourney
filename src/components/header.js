import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

const Header = ({ siteTitle }) => (
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
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        
        <Button>
          <Link to="/about"
          style={{
            textDecoration: 'none',
          }}>
          About
          </Link>
        </Button>
        
        <Button>
          <Link to="/contact"
          style={{
            textDecoration: 'none',
          }}>
          Contact
          </Link>
        </Button>
        
        
      </h1>
    </div>
  </div>
)

export default Header
