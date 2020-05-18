import React, { Component } from 'react'

class MechanicAddVisit extends Component {
    state = {
        controlsLogin: {
            VIN_Number: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj adres email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            VisitDate: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Podaj hasło'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            VisitDescription: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Podaj adres email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
                valid: false,
                touched: false
            }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default MechanicAddVisit