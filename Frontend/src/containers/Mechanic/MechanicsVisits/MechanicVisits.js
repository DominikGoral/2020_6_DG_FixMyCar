import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from "react-icons/ai";


import classes from './MechanicVisits.css'

import MechanicVisit from './MechanicVisit/MechanicVisit'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

class MechanicVisits extends Component {
    state = {
        visits: [],
        vehicles: [],
        today: ''
    }

    async componentDidMount() {
        const currentDate = await this.setTodayDate()
        this.setState({ today: currentDate })
        const visitsData = await this.downloadVisits()
        this.setState({ visits: visitsData.data.visits, vehicles: visitsData.data.vehicles })
    }

    setTodayDate = async () => {
        let today = new Date()
        let date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')
        return date
    }


    downloadVisits = async () => {
        console.log('data: ' + this.state.today)
        const visitsData = await axios.get('http://localhost:8001/mechanic/visit/all', {
            params: {
                userId: this.props.userId,
                day: this.state.today,
                nextDay: this.state.nextDay
            }
        })
        console.log(visitsData)
        return visitsData
    }

    render() {
        const visitsElements = []
        for(let key in this.state.visits) {
            visitsElements.push({
                id: key,
                visit: this.state.visits[key],
                vehicle: this.state.vehicles[key]
            })
        }
        const visits = visitsElements.map(visitElement => (
            <div>
                <p style={{ borderBottom: '2px solid grey', width: '70%', marginLeft: '15%', fontSize: '180%' }}>{visitElement.visit.VisitDate.substring(11, 16)}</p>
                <MechanicVisit
                    visitId={visitElement.visit.VisitID}
                    description={visitElement.visit.VisitDescription}
                    vehicleName={visitElement.vehicle.VehicleName}
                    vehicleModel={visitElement.vehicle.VehicleModel}
                />
            </div>
        ))
        return (
            <Aux>
                <div className={classes.Today}>
                    <label style={{ fontSize: '150%' }}>Dzień</label>
                    <input 
                        type="date"
                        className={classes.DatePicker} 
                        value={this.state.today} 
                        onChange={async e => {
                            // let chosenDay = await new Date(e.target.value)
                            // await chosenDay.setDate(chosenDay.getDate() + 1)
                            // await this.setState({ nextDay: chosenDay })
                            await this.setState({ today: e.target.value })
                            const newVisits = await this.downloadVisits()
                            this.setState({ visits: newVisits.data.visits, vehicles: newVisits.data.vehicles })
                        }
                    }/>
                </div>
                <div>
                    {this.state.visits ? visits : null}
                    <button className={classes.AddVisitButton}><AiFillPlusCircle/></button>
                </div>
            </Aux>
        )
    }
}

export default MechanicVisits