import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle, AiOutlineSave, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import TimePicker from 'react-time-picker'
import { BASEPATH } from '../../../config'


import classes from './MechanicVisits.css'

import MechanicVisit from './MechanicVisit/MechanicVisit'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'

class MechanicVisits extends Component {
    state = {
        visits: [],
        vehicles: [],
        today: '',
        showAddVisitForm: false,
        newHour: ''
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

    deleteVisit = async (visitID) => {
        const response = await axios.delete(BASEPATH + '/mechanic/visit/' + visitID)
        const updatedVisits = await this.downloadVisits()
        this.setState({ visits: updatedVisits.data.visits, vehicles: updatedVisits.data.vehicles })
    }


    downloadVisits = async () => {
        console.log('data: ' + this.state.today)
        const visitsData = await axios.get(BASEPATH + '/mechanic/visit/all', {
            params: {
                userId: this.props.userId,
                day: this.state.today,
                nextDay: this.state.nextDay
            }
        })
        console.log(visitsData)
        return visitsData
    }

    submitHandler = (visitID) => {
        console.log(this.state.visitElement)
    }

    inputChangedHourHandler = async (event, visitID) => {
        this.setState({newHour: event.target.value});
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
                <div className={classes.VisitTime} style={{  }}>
                    <p style={{ display: 'inline' }}>
                        {visitElement.visit.VisitDate.substring(11, 16)}
                    </p>
                    <p style={{ display: 'inline', marginLeft: '80%' }}><AiOutlineClose className={classes.Icons} onClick={e => this.deleteVisit(visitElement.visit.VisitID)}/></p> 
                    {this.state.modifyHour 
                        ? <div style={{display: 'inline'}}>
                            <form onSubmit={this.submitHandler}>
                            <Input 
                                value={this.state.newHour}
                                changed={(event) => this.inputChangedHourHandler(event, visitElement.visit.VisitID)}
                            />
                                <Button clicked={(event) => this.submitHandler(visitElement.visit.VisitID)}><AiOutlineCheck style={{ fontSize: '50%' }}/></Button>
                            </form>
                        </div> 
                        : null}
                </div>
                   
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
                    <button className={classes.AddVisitButton} onClick={e => this.setState({ showAddVisitForm: !this.state.showAddVisitForm })}><AiFillPlusCircle/></button>
                </div>
            </Aux>
        )
    }
}

export default MechanicVisits