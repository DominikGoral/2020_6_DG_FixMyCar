import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import classes from './VisitItems.css'
import { BASEPATH } from '../../../config'

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import VisitShortInfo from '../../../components/Visit/VisitShortInfo/VisitShortInfo'

class VisitItems extends Component {
    state = {
        today: '',
        visits: [],
        upcomingVisits: [],
        endedVisits: []
    }
    
    async componentDidMount() {
        const day = await this.setTodayDate()
        this.setState({ today: day })
        const visits = await this.downloadVisits()
        this.setState({ visits: visits })
        this.visitsFilter(visits)
        console.log(visits)
    }

    isUpcomingVisit = (visit) => {
        if(visit.VisitDateStart < new Date(this.state.today)) {
            return visit
        }
    }

    visitsFilter = (visits) => {
        // for(let i = 0; i < this.state.visits.length; i++) {
        //     console.log("ziemniaki")
        // }   
        let upcomingVisits = []
        let endedVisits = []
        visits.map(visit => {
            if(new Date(visit.VisitDateStart.substring(0,16)) > new Date()) {
                upcomingVisits.push(visit)
            } else {
                endedVisits.push(visit)
            }
        })
        this.setState({ upcomingVisits: upcomingVisits, endedVisits: endedVisits })
    }

    downloadVisits = async() => {
        const visits = await axios.get(BASEPATH + '/customer/visit/all', 
        { 
            params: {
                id_customer: this.props.userId,
                day: this.state.today
            }
        })
        return visits.data
    }

    setTodayDate = async () => {
        let today = new Date()
        let date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')
        return date
    }

    render() {
        return(
            <Aux>
                <div className={classes.BoxTitle}>
                    <p>Wizyty</p>
                </div>
                <div className={classes.VisitsBox}>
                    <div className={classes.UpcomingVisitsBox}>
                        <div className={classes.UpcomingVisitsTitle}>
                            <p>Nadchodzące wizyty</p>
                        </div>
                        <div className={classes.UpcomingVisits}>
                            {this.state.upcomingVisits ? this.state.upcomingVisits.map(upcomingVisit => (
                                <VisitShortInfo
                                    visitDate={upcomingVisit.VisitDateStart.substring(0, 10) + " " + upcomingVisit.VisitDateStart.substring(11, 16)}
                                    price={upcomingVisit.TotalPrice}
                                    description={upcomingVisit.VisitDescription}
                                />
                            )) : <p>Brak nadchodzących wizyt.</p>}
                        </div>
                    </div>
                    <div className={classes.EndedVisitsBox}>
                        <div className={classes.EndedVisitsTitle}>
                            <p>Historia</p>
                        </div>
                        <div className={classes.EndedVisits}>
                            {this.state.endedVisits.map(endedVisit => (
                                <VisitShortInfo
                                    visitDate={endedVisit.VisitDateStart.substring(0, 10) + " " + endedVisit.VisitDateStart.substring(11, 16)}
                                    price={endedVisit.TotalPrice}
                                    description={endedVisit.VisitDescription}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Aux> 
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(VisitItems)