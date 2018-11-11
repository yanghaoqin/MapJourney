import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  first: {
    background: 'rebeccapurple',
    marginBottom: '1.45rem',
  },
  
  second:{
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem',
  },

  root:{
    margin: 0
  },

  bigheader:{
    color: 'white',
    textDecoration: 'none',
    marginRight: '1rem',
  },

  buttons:{
    textDecoration: 'none',
  }

});

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.first}>
        <div className={classes.second}>
          <h1 className={classes.root}>
            <Link to="/" className={classes.bigheader}>
              Journey.map
            </Link>
            
            <Button variant='outlined'>
              <Link to="/about" className={classes.buttons}>
              About
              </Link>
            </Button>
            
            <Button variant='outlined'> 
              <Link to="/contact" className={classes.buttons}>
              Contact
              </Link>
            </Button>
          </h1>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Header);
