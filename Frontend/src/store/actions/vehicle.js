import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const addVehicle = (vin_Number, vehicleName, vehicleModel, version, yearOfProduction, engineCapacity, fuel, color, type, id_customer) => {
    return dispatch => {
        const authData = {
            vin_Number: vin_Number,
            vehicleName: vehicleName,
            vehicleModel: vehicleModel,
            version: version,
            yearOfProduction: yearOfProduction,
            engineCapacity: engineCapacity,
            fuel: fuel,
            color: color,
            type: type,
            userId: id_customer
        }
        console.log(authData)
        //let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwErEdHkTEGc1TM9KmlwqTMmdovQB70TU'
        let url = 'http://localhost:8001/vehicle/new-vehicle'
        // if(!isSignup) {
        //     url = ''
        // }
        axios.post(url, authData)
            .then(response => {
                console.log(response)
                //dispatch(authSuccess(response.data.idToken, response.data.localId))
                //dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}