import React from "react"
import { Link } from "react-router-dom"
import searchBox from "./searchBox"

const { compose, withProps, withState, withHandlers } = require("recompose");
// const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 12),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <div>

    <Link to="/searchBox">Search</Link>

    <GoogleMap
      defaultCenter={{ lat: 45.499980, lng: -73.556590 }}
      defaultZoom={props.zoom}
      ref={props.onMapMounted}
      onZoomChanged={props.onZoomChanged}
    >
      <Marker
        position={{ lat: 45.509980, lng: -73.556590 }}
        onClick={props.onToggleOpen}
      >
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>
            {/* <FaAnchor /> */}
            {" "}
            Controlled zoom: {props.zoom}
          </div>
        </InfoWindow>
      </Marker>

<Marker
        position={{ lat: 46.509980, lng: -73.556590 }}
        onClick={props.onToggleOpen}
      >
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>
            {/* <FaAnchor /> */}
            {" "}
            Controlled zoom: {props.zoom}
          </div>
        </InfoWindow>
      </Marker>
      

    </GoogleMap>

  </div >
);

export default MapWithControlledZoom