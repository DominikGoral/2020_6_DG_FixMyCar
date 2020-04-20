import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './Auth.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import axios from 'axios'
import * as actions from '../../store/actions/index'

class Auth extends Component {
    state = {
        controlsLogin: {
            Email: {
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
            Password: {
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
            }
        },
        controlsRegisterMechanic: {
            Email: {
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
            FirstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj imię'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            Surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj nazwisko'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            City: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj miasto'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            Street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj ulicę'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            HomeNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj numer budynku'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            FlatNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj numer mieszkania'
                },
                value: ''
            },
            ZipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj kod pocztowy'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            Password: {
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
            TelephoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj numer telefonu'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            CreditCardNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Podaj numer karty kredytowej'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            Role: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Owner', displayValue: 'Właściciel' },
                        { value: 'Employee', displayValue: 'Pracownik' }
                    ]
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
        },
        controlsRegisterCustomer: {
            Email: {
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
            FirstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj imię'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            Surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj nazwisko'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            City: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj miasto'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            Street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj ulicę'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            HomeNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj numer budynku'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            FlatNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj numer mieszkania'
                },
                value: ''
            },
            ZipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj kod pocztowy'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            Password: {
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
            TelephoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj numer telefonu'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            CreditCardNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Podaj numer karty kredytowej'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true,
        customer: true
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        })
    }

    switchCustomerWorkshopHandler = () => {
        this.setState(prevState => {
            return {customer: !prevState.customer}
        })
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

    inputChangedHandlerLogin = (event, controlName) => {
        const updatedControls = {
            ...this.state.controlsLogin,
            [controlName]: {
                ...this.state.controlsLogin[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controlsLogin[controlName].validation),
                touched: true
            }
        };
        this.setState({controlsLogin: updatedControls});
    }

    inputChangedHandlerRegisterCustomer = (event, controlName) => {
        const updatedControls = {
            ...this.state.controlsRegisterCustomer,
            [controlName]: {
                ...this.state.controlsRegisterCustomer[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controlsRegisterCustomer[controlName].validation),
                touched: true
            }
        };
        this.setState({controlsRegisterCustomer: updatedControls});
    }

    inputChangedHandlerRegisterMechanic = (event, controlName) => {
        const updatedControls = {
            ...this.state.controlsRegisterMechanic,
            [controlName]: {
                ...this.state.controlsRegisterMechanic[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controlsRegisterMechanic[controlName].validation),
                touched: true
            }
        };
        this.setState({controlsRegisterMechanic: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault()
        if(this.state.isSignup) {
            this.props.onAuthLogin(this.state.controlsLogin.Email.value, this.state.controlsLogin.Password.value)
        } else {
            if(this.state.customer){
                this.props.onAuthRegister(
                    this.state.controlsRegisterCustomer.Email.value,
                    this.state.controlsRegisterCustomer.FirstName.value,
                    this.state.controlsRegisterCustomer.Surname.value,
                    this.state.controlsRegisterCustomer.City.value,
                    this.state.controlsRegisterCustomer.Street.value,
                    this.state.controlsRegisterCustomer.HomeNumber.value,
                    this.state.controlsRegisterCustomer.FlatNumber.value, 
                    this.state.controlsRegisterCustomer.ZipCode.value,
                    this.state.controlsRegisterCustomer.Password.value,
                    this.state.controlsRegisterCustomer.TelephoneNumber.value,
                    this.state.controlsRegisterCustomer.CreditCardNumber.value,
                    null
                )
            } else {
                this.props.onAuthRegister(
                    this.state.controlsRegisterMechanic.Email.value,
                    this.state.controlsRegisterMechanic.FirstName.value,
                    this.state.controlsRegisterMechanic.Surname.value,
                    this.state.controlsRegisterMechanic.City.value,
                    this.state.controlsRegisterMechanic.Street.value,
                    this.state.controlsRegisterMechanic.HomeNumber.value,
                    this.state.controlsRegisterMechanic.FlatNumber.value, 
                    this.state.controlsRegisterMechanic.ZipCode.value,
                    this.state.controlsRegisterMechanic.Password.value,
                    this.state.controlsRegisterMechanic.TelephoneNumber.value,
                    this.state.controlsRegisterMechanic.CreditCardNumber.value,
                    this.state.controlsRegisterMechanic.Role.value
                )
            }
        }
    }

    render() {
        const formElementsArrayLogin = []
        for(let key in this.state.controlsLogin) {
            formElementsArrayLogin.push({
                id: key,
                config: this.state.controlsLogin[key]
            })
        }

        const formLogin = formElementsArrayLogin.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandlerLogin( event, formElement.id )}
            />
        ))

        const formElementsArrayRegisterMechanic = []
        for(let key in this.state.controlsRegisterMechanic) {
            formElementsArrayRegisterMechanic.push({
                id: key,
                config: this.state.controlsRegisterMechanic[key]
            })
        }

        const formRegisterMechanic = formElementsArrayRegisterMechanic.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandlerRegisterMechanic( event, formElement.id )}
            />
        ))

        const formElementsArrayRegisterCustomer = []
        for(let key in this.state.controlsRegisterCustomer) {
            formElementsArrayRegisterCustomer.push({
                id: key,
                config: this.state.controlsRegisterCustomer[key]
            })
        }

        const formRegisterCustomer = formElementsArrayRegisterCustomer.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandlerRegisterCustomer( event, formElement.id )}
            />
        ))

        return (
            <div className={classes.Auth}>
                <Button
                    clicked={this.switchCustomerWorkshopHandler}
                    >{this.state.customer ? 'Jestem mechanikiem' : 'Jestem klientem'}</Button>
                <form onSubmit={this.submitHandler}> 

                        {this.state.isSignup ? formLogin: 
                         this.state.customer ? formRegisterCustomer: formRegisterMechanic}
                        <Button>ZALOGUJ</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    >{this.state.isSignup ? 'Zaloguj się' : 'Zarejestruj się'}</Button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthLogin: (email, password) => dispatch(actions.authLogin(email, password)),
        onAuthRegister: (email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, creditCardNumber, role) => {
            dispatch(actions.authRegister(email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, creditCardNumber, role))
        }
    }
}

export default connect(null, mapDispatchToProps)(Auth)