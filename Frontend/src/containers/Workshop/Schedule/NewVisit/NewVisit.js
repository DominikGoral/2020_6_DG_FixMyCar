import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import classes from './NewVisit.css'
import { BASEPATH } from '../../../../config'

class NewVisit extends Component {
    state = {
        nip: this.props.nip,
        vehicles: [],
        services: [],
        chosenCar: '',
        visitDatetime: '',
        visitDateEnd: '',
        visitDescription: '',
        totalPrice: 0,
        serviceIdOnListOfServices: 0,
        paymentMethod: 'gotowka'
    }

    async componentDidMount() {
        const vehicles = await this.getVehicles()
        this.setState({ vehicles: vehicles })
        const services = await this.getServices()
        this.setState({ services: services })
    }

    getServices = async () => {
        const services = await axios.get(BASEPATH + '/offeredservices/all', {
            params: {
                workshopId: this.props.nip
            }
        })
        console.log(services.data)
        return services.data
    }

    getVehicles = async () => {
        const vehicles = await axios.get(BASEPATH + '/vehicle/all',{
            params: {
                userId: this.props.userId
            }
        })
        console.log('pojazdy')
        console.log(vehicles)
        return vehicles.data
    }

    addVisit = () => {
        const response = axios.post(BASEPATH + '/visit/new-visit', {
            Id_workshop: this.props.nip,
            Id_customer: this.props.userId,
            Id_vehicle: this.state.chosenCar,
            VisitDateStart: this.state.visitDatetime,
            VisitDateEnd: this.state.visitDateEnd,
            VisitDescription: this.state.visitDescription,
            TotalPrice: this.state.services[this.state.serviceIdOnListOfServices].Price,
            PaymentMethod: this.state.paymentMethod,
            Done: false
        })
        return response
    }

    render() {
        return(
            <form className={classes.AddVisitForm} onSubmit={this.addVisit}>
                <p>Pojazd</p>
                <select 
                onChange={e => {
                    const chosenCar = e.target.value     
                    this.setState({ chosenCar: chosenCar })
                }}>
                    <option value='Wybierz pojazd' selected>Wybierz pojazd</option>
                    {this.state.vehicles.map(vehicle => (
                        <option value={vehicle.VIN_Number} 
                        >{vehicle.VehicleName}</option>
                    ))}
                </select>
                <p>Data wizyty</p>
                <input type="datetime-local" 
                    value={this.state.visitDatetime}
                    onChange={e => {
                        const newDateTime = e.target.value
                        this.setState({ visitDatetime: newDateTime })
                    }}
                />
                <p>Przewidywany koniec wizyty</p>
                <input type="datetime-local" 
                    value={this.state.visitDateEnd}
                    onChange={e => {
                        const newDateTime = e.target.value
                        this.setState({ visitDateEnd: newDateTime })
                    }}
                />
                <p>Opis wizyty</p>
                <input type="textarea" 
                    value={this.state.visitDescription}
                    onChange={e => {
                        this.setState({ visitDescription: e.target.value })
                    }}
                />
                <p>Cel wizyty</p>
                <select 
                    onChange={e => {
                        const newValue = e.target.value
                        this.setState({ serviceIdOnListOfServices: newValue })
                    }}
                >
                    {this.state.services.map((service, index) => (
                        <option value={index}>{service.service.ServiceName}</option>
                    ))}
                </select>
                <p>Metoda płatności</p>
                <select
                    onChange={e => {
                        this.setState({ paymentMethod: e.target.value })
                    }}
                >
                    <option value="gotowka">Gotówka</option>
                    <option value="przelew">Przelew</option>
                </select>
                <button className={classes.AddVisitFormButton}>Rezerwuj</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(NewVisit)