import React from 'react'
import Button from "@material-ui/core/Button";
import Layout from '../components/layout'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MapWithControlledZoom from "../components/map1"
import SearchBox from '../components/searchBox'
import PlaceCard from "../components/placeCard"

function IndexPage() {
  return (
    <Layout>
      <Router>
        <div>

          <div class="split left">
          <div class="centered">

            <h1>Start planning your journey. Now.</h1>

            <Button variant="contained" color="primary">
              <Link to="/map">Show Map</Link>
            </Button>

            <Button variant="contained" color="primary">
              <Link to="/searchBox">Search</Link>
            </Button>

            <Route path='/map' component={MapWithControlledZoom} />
            <Route path='/searchBox' component={SearchBox} />

          </div>
          </div>

          <div class="split right">
          <div class="centered">

            <PlaceCard></PlaceCard>

          </div>
          </div>


        </div>

      </Router>
    </Layout>

  )
}



export default IndexPage



