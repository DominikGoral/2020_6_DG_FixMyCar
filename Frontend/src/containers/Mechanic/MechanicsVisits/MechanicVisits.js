import React, { Component } from 'react'
import axios from 'axios'
import { AiFillPlusCircle } from "react-icons/ai";


import classes from './MechanicVisits.css'

import MechanicVisit from '../../../components/Mechanics/MechanicVisit/MechanicVisit'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

class MechanicVisits extends Component {
    state = {
        visits: [],
        vehicles: [],
        today: ''
    }

    async componentDidMount() {
        //this.downloadVisits()
        const currentDate = await this.setTodayDate()
        this.setState({ today: currentDate })
        const visitsData = await this.downloadVisits()
        console.log('dane')
        console.log(visitsData)
        this.setState({ visits: visitsData.data.visits, vehicles: visitsData.data.vehicles })
    }

    setTodayDate = async () => {
        let today = new Date()
        let date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')
        return date
        //this.setState({ today: date })
    }

    downloadVisits = async () => {
        console.log('data: ' + this.state.today)
        const visitsData = await axios.get('http://localhost:8001/mechanic/visit/all', {
            params: {
                userId: this.props.userId,
                day: this.state.today
            }
        })
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
                    <input type="date"className={classes.DatePicker} value={this.state.today} onChange={e => this.setState({ today: e.target.value })}/>
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