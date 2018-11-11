import React from 'react'
import Button from "@material-ui/core/Button";
import Layout from '../components/layout'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Map from '../components/map'  
import searchBox from  '../components/searchBox'

function IndexPage() {
  return (
    <Layout>
      <Router>
       
        <div>
    
          <h1>Start your journey now</h1>

          <Button variant="contained" color="primary">
            <Link to="/map">Show Map</Link>
          </Button> 

          <Button variant="contained" color="primary">
            <Link to="/searchBox">Search</Link>
          </Button>

          <Route path='/map' component={Map} />
          <Route path='/searchBox' component={searchBox} />
          
        </div>

      </Router>
    </Layout>
  
  )
}



export default IndexPage



