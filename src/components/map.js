import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div class='circle'>{text}</div>;

class Map extends Component {

    static defaultProps = {
        center: {
            lat: 45.499980,
            lng: -73.556590
        },
        zoom: 14
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA9DR4FHpXg_MmXHfsy6ozebdElbFm6qXk" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={45.499980}
                        lng={-73.556590}
                        text={'0'}
                        
                    />
                    <AnyReactComponent
                        lat={45.499980}
                        lng={-74.556590}
                        text={'1'}
                        
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map
