import React from 'react'
import Button from "@material-ui/core/Button";
import Layout from '../components/layout'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Map from '../components/map'

function IndexPage() {
  return (
    <Layout>
      <Router>
        <div>
  
          <h1>Start planning your journey now</h1>

          <Button variant="contained" color="primary">
            <Link to="/map">Click Me~</Link>
          </Button>

          <hr />

          <Route path="/map" component={map} />
        </div>
      </Router>
    </Layout>
  
  )
}

function map() {
  return (
    <div>
      <Map></Map>
    </div>
  );
}


export default IndexPage
