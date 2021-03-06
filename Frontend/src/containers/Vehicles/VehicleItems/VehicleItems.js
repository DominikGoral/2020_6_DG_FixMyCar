import Aux from '../../../hoc/Auxiliary/Auxiliary'
import classes from './VehicleItems.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VehicleItem from '../../../components/Vehicle/VehicleItems/VehicleItem/VehicleItem'
import axios from 'axios'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import * as actions from '../../../store/actions/index'
import Toast from '../../../components/UI/Toast/Toast'
import { BASEPATH } from '../../../config'

class VehicleItems extends Component {
    state = {
        message: '',
        vehicles: [],
        filteredWorkshops: [],
        query: '',
        adding: false,
        vehicleForm: {
            VIN_Number: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj numer VIN'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            VehicleName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj markę pojazdu'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            VehicleModel: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj model pojazdu'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Version: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj generację modelu'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            YearOfProduction: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj rok produkcji'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            EngineCapacity: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj pojemność silnika'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Fuel: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj rodzaj paliwa'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Color: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj kolor'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Type: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj typ nadwozia'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    componentDidMount() {
        axios.get(BASEPATH + '/vehicle/all', {
            params: {
                userId: this.props.userId
            }
        })
        .then(response => {
            const vehiclesReceived = response.data
            this.setState({ 
                vehicles: vehiclesReceived,
                //filteredWorkshops: workshopsReceived 
            })
            //console.log(workshopsReceived)
        })
    }

    // handleInputChange = (e) => {
    //     const newQuery = e.target.value
    //     this.setState(prevState => {
    //         const filteredData = prevState.workshops.filter(element => {
    //             return element.WorkshopName.toLowerCase().includes(newQuery.toLowerCase())
    //         })
    //         return {
    //             query: newQuery,
    //             filteredWorkshops: filteredData
    //         }
    //     })
    // }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.vehicleForm,
            [controlName]: {
                ...this.state.vehicleForm[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.vehicleForm[controlName].validation),
                touched: true
            }
        };
        this.setState({vehicleForm: updatedControls});
    }

    showHideForm = () => {
        this.setState({ adding: !this.state.adding })
    }

    // addVehicle = (event) => {
    //     event.preventDefault()
    //     this.props.onAddVehicle(
    //         this.state.vehicleForm.VIN_Number.value,
    //         this.state.vehicleForm.VehicleName.value,
    //         this.state.vehicleForm.VehicleModel.value,
    //         this.state.vehicleForm.Version.value,
    //         this.state.vehicleForm.YearOfProduction.value,
    //         this.state.vehicleForm.EngineCapacity.value,
    //         this.state.vehicleForm.Fuel.value,
    //         this.state.vehicleForm.Color.value,
    //         this.state.vehicleForm.Type.value,
    //         this.props.userId
    //     )
    // }

    addVehicle = (e) => {
        e.preventDefault()
        const newVehicleData = {
            vin_Number: this.state.vehicleForm.VIN_Number.value,
            vehicleName: this.state.vehicleForm.VehicleName.value,
            vehicleModel: this.state.vehicleForm.VehicleModel.value,
            version: this.state.vehicleForm.Version.value,
            yearOfProduction: this.state.vehicleForm.YearOfProduction.value,
            engineCapacity: this.state.vehicleForm.EngineCapacity.value,
            fuel: this.state.vehicleForm.Fuel.value,
            color: this.state.vehicleForm.Color.value,
            type: this.state.vehicleForm.Type.value,
            userId: this.props.userId
        }
        axios.post(BASEPATH + '/vehicle/new-vehicle', newVehicleData)
            .then(response => {
                console.log('odpowiedz')
                console.log(response)
                this.setState({ message: response.data.message })
            })
    }

    render() {

        const addVehicleForm = []
        for(let key in this.state.vehicleForm) {
            addVehicleForm.push({
                id: key,
                config: this.state.vehicleForm[key]
            })
        }

        const formVehicle = addVehicleForm.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler( event, formElement.id )}
            />
        ))

        return (
            <Aux>
                {this.state.message ? <Toast toastType='success' errorMessage={this.state.message}/> : null}
                <div>
                    <div className={classes.Vehicles}>
                        {this.state.vehicles.map(vehicle => (
                        // <Link to={'/vehicle/' + vehicle.VIN_Number} key={vehicle.VIN_Number}>
                        //     <VehicleItem    
                        //         name={vehicle.VehicleName}
                        //         category={vehicle.VehicleModel}                                                            
                        //     >
                        //     </VehicleItem>
                        // </Link>
                        <VehicleItem   
                                vin_Number={vehicle.VIN_Number}
                                name={vehicle.VehicleName}
                                category={vehicle.VehicleModel}                                                            
                            >
                        </VehicleItem>
                        ))}
                    </div>
                    <div className={classes.ButtonAddSection}>
                        <div className={classes.ButtonAdd} onClick={this.showHideForm}><p>+</p></div>
                        {this.state.adding 
                            ? <form onSubmit={this.addVehicle}>
                                {formVehicle}
                                <button className={classes.AddVehicleButton} onClick={e => this.addVehicle(e)}>Dodaj</button>
                            </form> 
                            : null
                        }
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

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddVehicle: (vin_Number, vehicleName, vehicleModel, version, yearOfProduction, engineCapacity, fuel, color, type, id_customer) => {
//             dispatch(actions.addVehicle(vin_Number, vehicleName, vehicleModel, version, yearOfProduction, engineCapacity, fuel, color, type, id_customer))
//         }
//     }
// }

export default connect(mapStateToProps)(VehicleItems)