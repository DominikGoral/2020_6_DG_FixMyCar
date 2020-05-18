import React, { Component } from 'react'
import axios from 'axios'
import { BASEPATH } from '../../../../config'

import classes from './MechanicVisit.css'

import MechanicVisitInfo from '../../../../components/Mechanics/MechanicVisit/MechanicVisitInfo/MechanicVisitInfo'

class MechanicVisit extends Component {
    state = {
        FirstName: '',
        Surname: '',
        PaymentMethod: '',
        TotalPrice: '',
        WorkshopName: '',
        Services: [],
        showInfo: false
    }

    getVisitInfo = () => {
        if(!this.state.showInfo) {
            axios.get(BASEPATH + '/mechanic/visit/' + this.props.visitId)
            .then(response => {
                console.log(response)
                const visitData = response.data
                this.setState({
                    FirstName: visitData.customerInfo.FirstName,
                    Surname: visitData.customerInfo.Surname,
                    PaymentMethod: visitData.visitInfo.PaymentMethod,
                    TotalPrice: visitData.visitInfo.TotalPrice,
                    WorkshopName: visitData.workshopInfo.WorkshopName,
                    Services: visitData.servicesInfo
                })
            })
        }
        
    }

    render() {
        return (
            <div className={classes.Visit} onClick={async e =>  {await this.getVisitInfo(), await this.setState({ showInfo: !this.state.showInfo })}}>
                <div>
                    <div>
                        <p style={{ display: 'inline' }}><b>Marka: </b>{this.props.vehicleName} &nbsp;&nbsp;&nbsp; <b>Model: </b>{this.props.vehicleModel}</p>
                        <p><b>Opis:</b> {this.props.description}</p>
                    </div>
                </div>
                {this.state.showInfo 
                    ? <MechanicVisitInfo 
                        firstName={this.state.FirstName}
                        surname={this.state.Surname}
                        paymentMethod={this.state.PaymentMethod}
                        totalPrice={this.state.TotalPrice}
                        services={this.state.Services}
                    /> 
                    : null}
            </div>
        )
    }
}

export default MechanicVisit
