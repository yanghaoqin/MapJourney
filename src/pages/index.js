import React from 'react'
import { Component } from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { withStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { orange } from "@material-ui/core/colors"
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from "@material-ui/core/styles"

import MapWithControlledZoom from "../components/map1"
import SearchBox from '../components/searchBox'
import PlaceCard from "../components/placeCard"

// const myTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#FB8C00",
//     },
//     secondary: {
//       orange: "#3949AB"
//     }
//   }
// })

const styles = theme => ({
  type_button: {
    margin: theme.spacing.unit,
  },
})


class IndexPage extends Component {

  constructor(props) {
    super(props)
    this.state = {type: ""}
    this.switchToMap = this.switchToMap.bind(this)
    this.switchToSearch = this.switchToSearch.bind(this)
  }

  switchToMap() {
    this.setState({ type: "map" })
  }

  switchToSearch() {
    this.setState({ type: "search" })
  }

  render() {
    const { classes } = this.props
    return (
      <Layout>
        <Router>
          <div>

            <h1>Start planning your journey. Now.</h1>

            <Button variant="contained" color="primary" className={classes.type_button} onClick={this.switchToMap}>
              View Map
            </Button>

            <Button variant="contained" color="primary" className={classes.type_button} onClick={this.switchToSearch}>
              Search
            </Button>

            {this.state.type === "map" ? <MapWithControlledZoom></MapWithControlledZoom> : null}
            {this.state.type === "search" ? <SearchBox></SearchBox> : null}

            <PlaceCard></PlaceCard>

          </div >

        </Router>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IndexPage);



