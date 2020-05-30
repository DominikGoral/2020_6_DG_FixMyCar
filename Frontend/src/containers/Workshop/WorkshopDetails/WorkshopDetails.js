import React, { Component } from 'react'
import axios from 'axios'
import { BASEPATH } from '../../../config'
import { AiOutlineCalendar } from "react-icons/ai";

import classes from './WorkshopDetails.css'

import Schedule from '../Schedule/Schedule'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import WorkshopMap from '../../Map/WorkshopMap'

class WorkshopDetails extends Component {
    state = { 
        NIP: this.props.match.params.id,
        City: null,
        FlatNumber: null,
        HomeNumber: null,
        Street: null,
        Category: null,
        Description: null,
        WorkshopName: null,
        latitude: null,
        longitude: null,
        actualDay: null,
        showSchedule: false
    }

    geoCode = (homeNumber, street, city) => {
        const location = homeNumber + ' ' + street + ' ' + city
        console.log(location)
        
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
                key: 'AIzaSyB_JlaAtwxcfJlOQeDTI1PRUPBBxV_2dR0'
            }
        })
        .then(response => {
            console.log(response.data.results[0].geometry.location)
            const location = response.data.results[0].geometry.location
            this.setState({
                latitude: location.lat,
                longitude: location.lng
            })
        })
        
    }

    async componentDidMount() {
        const workshopInfo = await this.getWorkshopInfo()
        console.log(workshopInfo)
        const addressData = workshopInfo.addressInfo
        const workshopData = workshopInfo.workshopInfo
        await this.setState({
            NIP: workshopData.NIP,
            Description: workshopData.Description,
            Category: workshopData.Category,
            WorkshopName: workshopData.WorkshopName,
            City: addressData.City,
            FlatNumber: addressData.FlatNumber,
            HomeNumber: addressData.HomeNumber,
            Street: addressData.Street
        })
        this.geoCode(this.state.HomeNumber, this.state.Street, this.state.City)
        const visits = await this.getVisits()
        this.setState({ visits: visits })
        
        // .then(response => {
        //         console.log('workshop info')
        //         console.log(response.data)
        //         const addressData = response.data.addressInfo
        //         const workshopData = response.data.workshopInfo
        //         this.setState({
        //             NIP: workshopData.NIP,
        //             Description: workshopData.Description,
        //             Category: workshopData.Category,
        //             WorkshopName: workshopData.WorkshopName,
        //             City: addressData.City,
        //             FlatNumber: addressData.FlatNumber,
        //             HomeNumber: addressData.HomeNumber,
        //             Street: addressData.Street
        //         })
        //     })
        //     .then(response => {
        //         this.geoCode(this.state.HomeNumber, this.state.Street, this.state.City)
        //     })
    }

    getWorkshopInfo = async() => {
        const workshopData = await axios.get(BASEPATH + '/workshop/' + this.props.match.params.id)
        console.log('warsztaty')
        console.log(workshopData)
        return workshopData.data
    }

    getVisits = async() => {
        //console.log('nip: ' + this.state.nip)
        const visits = await axios.get(BASEPATH + '/visit/all', {
            params: {
                workshop: '5993045632',
                day: '2020-05-17'
            }
        })
        console.log('wizyty')
        console.log(visits)
        return visits.data
    }



    render() {
        return(
            <Aux>
                <div className={classes.Map}>
                    <WorkshopMap latitude={this.state.latitude} longitude={this.state.longitude}/>
                </div>
                <div className={classes.WorkshopName}>
                    <p>{this.state.WorkshopName}</p>
                </div> 
                <div className={classes.Schedule}>
                    <Schedule nip={this.state.NIP}/>
                </div>
                <div className={classes.Description}>
                    <p style={{fontSize:'200%', marginLeft:'10%'}}>O nas</p>
                    <p>{this.state.Description}</p>
                </div>
                <div className={classes.Comments}>
                    <p>KOMENTARZE I OPINIE</p>
                </div>
            </Aux>  
        )
    }
}

export default WorkshopDetails