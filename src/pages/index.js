import React from 'react'
import Button from "@material-ui/core/Button";
import Layout from '../components/layout'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StandAloneSearchBox from '../components/searchbox'
import Map from '../components/map'

function IndexPage() {
  return (
    <Layout>
      <Router>
        <div>
  
          <h1>Start planning your journey now</h1>

          <Button variant="contained" color="primary">
            <Link to="/searchbox">Search</Link>
            <Link to="/map">Map</Link>
          </Button>
          <Route path='/map' component={Map} />
          <Route path='/searchbox' component={StandAloneSearchBox} />
        </div>
      </Router>
    </Layout>
  
  )
}


export default IndexPage
