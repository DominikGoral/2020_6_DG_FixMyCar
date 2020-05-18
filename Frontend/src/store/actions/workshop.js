import axios from 'axios'
import { BASEPATH } from '../../config'
import * as actionTypes from './actionTypes'

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const addWorkshop = (nip, workshopName, category, description, city, street, homeNumber, flatNumber, zipCode, userId) => {
    return dispatch => {
        const authData = {
            NIP: nip,
            WorkshopName: workshopName,
            Category: category,
            Description: description,
            City: city,
            Street: street,
            HomeNumber: homeNumber,
            FlatNumber: flatNumber,
            ZipCode: zipCode,
            UserId: userId
        }
        console.log(authData)
        //let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwErEdHkTEGc1TM9KmlwqTMmdovQB70TU'
        let url = BASEPATH + '/mechanic/workshop/add-new'
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