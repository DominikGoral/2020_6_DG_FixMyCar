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
        let workshopWorkStart = new Date(this.todayDate(this.state.visitStartTime, this.state.workshopWorkStart))
        console.log(startTime)
        console.log(workshopWorkStart)
        let fromWorkshopStartDuration = ((( startTime - 7200000 ) - ( workshopWorkStart - 7200000 )) / 10 / 3600).toFixed(2)
        let percentageOfAllDay = (fromWorkshopStartDuration / this.state.howManyHoursWorkshopIsOpen).toFixed(1)
        console.log(percentageOfAllDay)
        return percentageOfAllDay + '%'
    }

    todayDate = (day, hour) => {
        let date = day.substring(0, 11)
        let endOfDate = day.substring(16, 24)
        return date + hour + endOfDate
    }

    render() {
        //console.log(this.state.)
        return(
            <div className={classes.ScheduleItemBox} style={{ width: `${this.calculateWidth()}`, left: `${this.calculateMargin()}` }}>
                <p className={classes.startTime}><b>{(this.state.visitStartTime).substring(11,16)}</b></p>
                <p className={classes.endTime}><b>{(this.state.visitEndTime).substring(11,16)}</b></p>
            </div>
        )
    }
}

export default ScheduleItem