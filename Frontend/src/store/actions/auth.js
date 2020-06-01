import axios from 'axios'
import { BASEPATH } from '../../config'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId, mechanic, customer) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        mechanic: mechanic,
        customer: customer
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    } 
}

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password
        }
        //let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwErEdHkTEGc1TM9KmlwqTMmdovQB70TU'
        let url = BASEPATH + '/api/auth/signin'
        // if(!isSignup) {
        //     url = ''
        // }
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.accessToken, response.data.id, response.data.mechanic, response.data.customer))
                dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}

export const authRegister = (email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, role) => {
    return dispatch => {
        dispatch(authStart())
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
            //creditCardNumber: creditCardNumber,
            role: role
        }
        console.log(authData)
        //let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwErEdHkTEGc1TM9KmlwqTMmdovQB70TU'
        let url = BASEPATH + '/api/auth/signup'
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