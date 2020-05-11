import React, { Component } from "react";
import axios from 'axios'
import classes from './VehicleDetails.css'

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Visit from '../../../components/Visit/VisitShortInfo/VisitShortInfo'
import Button from '../../../components/UI/Button/Button'

class Vehicle extends Component {
    state = {
        VIN_Number: null,
        VehicleName: null,
        VehicleModel: null,
        Version: null,
        YearOfProduction: null,
        EngineCapacity: null,
        Fuel: null,
        Color: null,
        Type: null,
        LastServices: []
    }

    componentDidMount() {
        console.log('PARAMS: ' + this.props.match.params.id)
        let url = 'http://localhost:8001/vehicle/' + this.props.match.params.id
        axios.get(url)
            .then(response => {
                console.log(response.data)
                const vehicleInfo = response.data
                this.setState({
                    VIN_Number: vehicleInfo.vehicleData.VIN_Number,
                    VehicleName: vehicleInfo.vehicleData.VehicleName,
                    VehicleModel: vehicleInfo.vehicleData.VehicleModel,
                    Version: vehicleInfo.vehicleData.Version,
                    YearOfProduction: vehicleInfo.vehicleData.YearOfProduction,
                    EngineCapacity: vehicleInfo.vehicleData.EngineCapacity,
                    Fuel: vehicleInfo.vehicleData.Fuel,
                    Color: vehicleInfo.vehicleData.Color,
                    Type: vehicleInfo.vehicleData.Type,
                    LastServices: vehicleInfo.visits
                })
            })
    }

    deleteVehicle = () => {
        let url = 'http://localhost:8001/vehicle/' + this.state.VIN_Number
        axios.delete(url)
    }

    render() {
        const lastServices = []
        for(let key in this.state.LastServices) {
            lastServices.push({
                id: key,
                config: this.state.LastServices[key]
            })
        }

        const visits = lastServices.map(visit => (
            <Visit
                visitDate={visit.config.VisitDate}
                price={visit.config.TotalPrice}
                description={visit.config.VisitDescription}
            />
        ))


        return (
            <Aux>
                <div className={classes.VehicleName}>
                    <p>PHOTO</p>
                </div>
                <div className={classes.About}>
                    <div className={classes.AboutLeft}>
                        <p><b>Marka pojazdu: </b>{this.state.VehicleName}</p>
                        <p><b>Model pojazdu: </b>{this.state.VehicleModel}</p>
                        <p><b>Typ: </b>{this.state.Type}</p>
                        <p><b>Wersja: </b>{this.state.Version}</p>
                    </div>
                    <div className={classes.AboutRight}>
                        <p><b>Rok produkcji: </b>{this.state.YearOfProduction}</p>
                        <p><b>Pojemność silnika: </b>{this.state.EngineCapacity} cm<sup>3</sup></p>
                        <p><b>Paliwo: </b>{this.state.Fuel}</p>
                        <p><b>Kolor: </b>{this.state.Color}</p>
                    </div>
                </div>
                <div className={classes.LastServices}>
                    <p style={{fontSize:'200%'}}><b>Dokonane naprawy</b></p>
                    {visits}
                </div>
                <Button clicked={this.deleteVehicle}>Usuń pojazd</Button>
            </Aux>
        )
    }
}

export default Vehicle