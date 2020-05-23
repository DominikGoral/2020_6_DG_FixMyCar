import React, { Component } from 'react'
import { AiOutlineSearch } from "react-icons/ai";

import classes from './MechanicAddVisit.css'

import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'

class MechanicAddVisit extends Component {
    state = {
        controls: {
            VIN_Number: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Numer VIN pojazdu'
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
                    type: 'date',
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
                    placeholder: 'Opis wizyty...'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            Id_workshop: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Wybierz warsztat'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            }
        }
    }

    searchVehicle = () => {
        
    }

    render() {
        return (
            <div>
                <div>
                    <Input
                        elementConfig={this.state.controls.VIN_Number.elementConfig}
                    ></Input><AiOutlineSearch onClick={this.searchVehicle}/>
                </div>
                
            </div>
        )
    }
}

export default MechanicAddVisit