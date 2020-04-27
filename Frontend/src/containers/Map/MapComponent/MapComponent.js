import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const MyMapComponent = (props) => {
    const markerPosition = {
            lat: parseFloat(props.lat),
            lng: parseFloat(props.log)
    }
    
    // console.log('lat: ' + props.lat)
    // console.log('log: ' + props.log)
        return(
            <GoogleMap
                defaultZoom={6}
                defaultCenter={{ lat: 52.222, lng: 19.336 }}
            >
                <Marker position={markerPosition}/>
            </GoogleMap>
        )
}

export default compose(withProps(
                        {
                            googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB_JlaAtwxcfJlOQeDTI1PRUPBBxV_2dR0",
                            loadingElement: <div style={{ height: `100%` }} />,
                            containerElement: <div style={{ height: `400px` }} />,
                            mapElement: <div style={{ height: `100%` }} />,
                        }
                ), withScriptjs, withGoogleMap)(MyMapComponent)
