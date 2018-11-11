import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "#BF360C",
      marginBottom: '1.2rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.8rem 0rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#FFCCBC',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
