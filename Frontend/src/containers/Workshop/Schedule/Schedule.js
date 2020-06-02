import React, { Component } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import classes from './Schedule.css'

import Input from '../../../components/UI/Input/Input'
import ScheduleItem from "./ScheduleItem/ScheduleItem";
import axios from "axios";
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import { BASEPATH } from "../../../config";
import NewVisit from "./NewVisit/NewVisit";

class Schedule extends Component {
    state = {
        actualDate: '',
        nip: '',
        visits : [],
        // freeVisitsTime: [],
        workshopWorkStart: '',
        workshopWorkEnd: '',
        addVisitFormVisible: false,
        howManyHoursWorkshopIsOpen: 0
    }

    async componentDidMount() {
        const workshopOpenHours = await this.getWorkshopOpenHours()
        this.setState({ workshopWorkStart: workshopOpenHours.WorkStartTime, howManyHoursWorkshopIsOpen: workshopOpenHours.NumberOfWorkHours })
        const currentDate = await this.setTodayDate()
        this.setState({ actualDay: currentDate })
        const visits = await this.getVisits(currentDate)
        this.setState({ visits: visits })
        const workshopCloseHours = await this.getCloseWorkshopHours(workshopOpenHours.WorkStartTime, workshopOpenHours.NumberOfWorkHours)
        this.setState({ workshopWorkEnd: workshopCloseHours })
    }

    getVisits = async(date) => {
        console.log(this.props.nip)
        const visits = await axios.get(BASEPATH + '/visit/all', {
            params: {
                workshop: this.props.nip,
                day: date
            }
        })
        console.log('wizyty')
        console.log(visits.data)
        return visits.data
    }

    getWorkshopOpenHours = async () => {
        const workshopOpenHours = await axios.get(BASEPATH + '/workshopopenhours/' + this.props.nip)
        return workshopOpenHours.data
    }

    getCloseWorkshopHours = (workshopOpenHour, howManyHoursWorkshopIsOpen) => {
        let startHour = parseFloat(workshopOpenHour.substring(0,2)) * 60
        let endTime = startHour + howManyHoursWorkshopIsOpen * 60
        let endHours = Math.floor(endTime / 60)
        let endMinutes = endTime - endHours * 60
        if(endMinutes === 0) {
            endMinutes = '00'
        }
        return endHours + ':' + endMinutes
    }

    setTodayDate = async () => {
        let today = new Date()
        let date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')
        return date
    }

    // getFreeVisitTime = (visits, currentDate, workshopOpenHour, workshopNumberOfWorkHours) => {
    //     let workshopStartTime = currentDate + workshopOpenHour
    //     console.log(workshopStartTime)
    //     for(let i = 0; i < visits.length; i++) {
    //         console.log(visits[i].VisitDateStart)
    //     }
    //     return workshopStartTime
    // }

    render() {
        return (
            <Aux>
                <div className={classes.Schedule} onClick={e => this.setState({ addVisitFormVisible: false })}>
                    <div className={classes.ScheduleDateBox}>
                        <input type="date" 
                            id={classes.DatePickerInput} 
                            value={this.state.actualDate} 
                            onChange={async e => {
                                console.log(e.target.value)
                                const newDate = e.target.value
                                this.setState({ actualDate: newDate })
                                const visits = await this.getVisits(newDate)
                                this.setState({ visits: [] })
                                this.setState({ visits: visits })
                                
                            }}
                        />
                    </div>
                    <div className={classes.TimeLine}>
                        <p style={{ float: 'left' }}><b>{this.state.workshopWorkStart}</b></p>
                        <p style={{ float: 'left', marginLeft: '92%' }}><b>{this.state.workshopWorkEnd}</b></p>
                    </div>
                    <div style={{ position: 'relative', width:'90%', marginLeft: '5%', marginTop: '5%' }}>
                        {this.state.visits.map(visit => (
                            <ScheduleItem
                            visitStartTime={visit.VisitDateStart}
                            visitEndTime={visit.VisitDateEnd}
                            workshopWorkStart={this.state.workshopWorkStart}
                            howManyHoursWorkshopIsOpen={this.state.howManyHoursWorkshopIsOpen}
                        />
                        ))}
                    </div>
                </div>
                <div className={classes.AddVisitButtonBox} onClick={e => this.setState({ addVisitFormVisible: !this.state.addVisitFormVisible })}>
                    <p>+</p>
                </div>
                {this.state.addVisitFormVisible ? <NewVisit nip={this.props.nip}/> : null}
            </Aux>
             
        )
    }
}

export default Schedule