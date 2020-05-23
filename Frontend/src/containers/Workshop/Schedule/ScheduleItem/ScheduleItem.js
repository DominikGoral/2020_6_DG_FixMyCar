import React, { Component } from 'react'

import classes from './ScheduleItem.css'

class ScheduleItem extends Component {
    state = {
        visitStartTime: this.props.visitStartTime,
        visitEndTime: this.props.visitEndTime,
        workshopWorkStart: this.props.workshopWorkStart,
        howManyHoursWorkshopIsOpen: this.props.howManyHoursWorkshopIsOpen
    }

    calculateWidth = () => {
        let startTime = new Date(this.state.visitStartTime)
        let endTime = new Date(this.state.visitEndTime)
        let visitDuration = ((endTime - startTime) / 10 / 3600).toFixed(2)
        let percentageOfWorkDay = (visitDuration / this.state.howManyHoursWorkshopIsOpen).toFixed(1)
        return percentageOfWorkDay + '%'
    }

    calculateMargin = () => {
        let startTime = new Date(this.state.visitStartTime)
        let workshopWorkStart = new Date(this.state.workshopWorkStart)
        let fromWorkshopStartDuration = ((startTime - workshopWorkStart) / 10 / 3600).toFixed(2)
        let percentageOfAllDay = (fromWorkshopStartDuration / this.state.howManyHoursWorkshopIsOpen).toFixed(1)
        return percentageOfAllDay + '%'
    }

    render() {
        return(
            <div className={classes.ScheduleItemBox} style={{ width: `${this.calculateWidth()}`, left: `${this.calculateMargin()}` }}>
                <p className={classes.startTime}><b>{this.state.visitStartTime} - </b></p>
                <p className={classes.endTime}><b>{this.state.visitEndTime}</b></p>
            </div>
        )
    }
}

export default ScheduleItem