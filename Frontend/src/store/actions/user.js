import axios from 'axios'
import { BASEPATH } from '../../config'
import * as actionTypes from './actionTypes'

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const dataUpdate = (email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, creditCardNumber, role) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            firstName: firstName,
            surname: surname,
            city: city,
            street: street,
            homeNumber: homeNumber,
            flatNumber: flatNumber,
            zipCode: zipCode,
            phoneNumber: telephoneNumber,
            creditCardNumber: creditCardNumber
        }
        console.log(authData)
        //let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwErEdHkTEGc1TM9KmlwqTMmdovQB70TU'
        let url = BASEPATH + '/me'
        // if(!isSignup) {
        //     url = ''
        // }
        axios.put(url, authData)
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