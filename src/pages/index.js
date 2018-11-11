import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import Layout from '../components/layout'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import StandAloneSearchBox from '../components/searchbox'
import Map from '../components/map'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }

});

class IndexPage extends Component {
  render () {
    const { classes } = this.props;
    return(
    <Layout>
      <Router>
        <div>
  
          <h1>Start planning your journey now</h1>

          <Button 
          variant="contained" 
          color="primary"
          className={classes.button}
          >
            <Link to="/searchbox" style={{ textDecoration: 'none' }}>Search</Link>
          </Button>
         
          <Button 
          variant="contained" 
          color="primary"
          className={classes.button}
          >
            <Link to="/map" style={{ textDecoration: 'none' }}>Map</Link>
          </Button>
          <Route path='/map' component={Map} />
          <Route path='/searchbox' component={StandAloneSearchBox} />
        </div>
        </Router>
    </Layout>
  
    )}
}


IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(IndexPage)
