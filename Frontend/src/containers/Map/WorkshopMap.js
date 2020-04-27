import React, { Component } from 'react'
import MyMapComponent from './MapComponent/MapComponent'

class WorkshopMap extends Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 300)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    // console.log('LATITUDE: ' + this.props.latitude)
    // console.log('LONGITUDE: ' + this.props.longitude)
    return(
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick} 
        lat={this.props.latitude}
        log={this.props.longitude}
      />
    )
  }
}

export default WorkshopMap