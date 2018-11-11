import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

const About = () => (
    <div>
        About page
        <Button>
        <Link to="/"
         style={{
            textDecoration: 'none',
          }}>
        Home
        </Link>
        </Button>
    </div>
)

export default About
