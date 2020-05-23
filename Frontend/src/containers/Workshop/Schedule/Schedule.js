import React, { Component } from "react";

import classes from './Schedule.css'

import Input from '../../../components/UI/Input/Input'
import ScheduleItem from "./ScheduleItem/ScheduleItem";

class Schedule extends Component {
    state = {
        visits: [
            {
                visitStartTime: 'December 30, 2017 08:00:00',
                visitEndTime: 'December 30, 2017 11:00:00',
            },
            {
                visitStartTime: 'December 30, 2017 11:00:00',
                visitEndTime: 'December 30, 2017 16:00:00',
            },
            {
                visitStartTime: 'December 30, 2017 16:00:00',
                visitEndTime: 'December 30, 2017 18:00:00',
            },
            {
                visitStartTime: 'December 30, 2017 18:00:00',
                visitEndTime: 'December 30, 2017 20:00:00',
            }
        ],
        workshopWorkStart: 'December 30, 2017 08:00:00',
        howManyHoursWorkshopIsOpen: 12
    }

    render() {
        return (
            <div className={classes.Schedule}>
                <div className={classes.ScheduleDateBox}>
                    <Input/>
                </div>
                <div style={{ position: 'relative' }}>
                    {this.state.visits.map(visit => (
                        <ScheduleItem
                            visitStartTime={visit.visitStartTime}
                            visitEndTime={visit.visitEndTime}
                            workshopWorkStart={this.state.workshopWorkStart}
                            howManyHoursWorkshopIsOpen={this.state.howManyHoursWorkshopIsOpen}
                        />
                    ))}
                </div>
            </div>  
        )
    }
}

export default Schedule