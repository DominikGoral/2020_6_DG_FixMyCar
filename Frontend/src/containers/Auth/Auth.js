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
        controlsWorkshopLogin: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Podaj NIP'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
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
        controlsRegisterWorkshop: {
            NIP: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Podaj NIP'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            WorkshopName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj nazwę warsztatu'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            WorkshopCategory: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'stacjaKontroliPojazdow', displayValue: 'Stacja kontroli pojazdów'},
                        {value: 'detailing', displayValue: 'Detailing'},
                        {value: 'mechanikaPojazdow', displayValue: 'Mechanika pojazdów'},
                    ]
                },
                value: '',
                validation: {
                    required: true,
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
            password: {
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
            Description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Podaj opis warsztatu'
                },
                value: ''
            }
        },
        controlsLoginCustomer: {
            email: {
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
            password: {
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
        controlsRegisterCustomer: {
            email: {
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
            password: {
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

    switchLoginRegisterButtonHandler = () => {
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

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controlsLoginCustomer,
            [controlName]: {
                ...this.state.controlsLoginCustomer[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controlsLoginCustomer[controlName].validation),
                touched: true
            }
        };
        this.setState({controlsLoginCustomer: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controlsLoginCustomer.email.value, this.state.controlsLoginCustomer.password.value, this.state.isSignup)
    }

    render() {
        const formElementsArrayLoginWorkshop = []
        for(let key in this.state.controlsWorkshopLogin) {
            formElementsArrayLoginWorkshop.push({
                id: key,
                config: this.state.controlsWorkshopLogin[key]
            })
        }

        const formLoginWorkshop = formElementsArrayLoginWorkshop.map(formElement => (
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

        const formElementsArrayRegisterWorkshop = []
        for(let key in this.state.controlsRegisterWorkshop) {
            formElementsArrayRegisterWorkshop.push({
                id: key,
                config: this.state.controlsRegisterWorkshop[key]
            })
        }

        const formRegisterWorkshop = formElementsArrayRegisterWorkshop.map(formElement => (
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

        const formElementsArrayLoginCustomer = []
        for(let key in this.state.controlsLoginCustomer) {
            formElementsArrayLoginCustomer.push({
                id: key,
                config: this.state.controlsLoginCustomer[key]
            })
        }

        const formLoginCustomer = formElementsArrayLoginCustomer.map(formElement => (
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
                changed={(event) => this.inputChangedHandler( event, formElement.id )}
            />
        ))

        return (
            <div className={classes.Auth}>
                <Button
                    clicked={this.switchCustomerWorkshopHandler}
                    >{this.state.customer ? 'Jestem klientem' : 'Jestem mechanikiem'}</Button>
                <form onSubmit={this.submitHandler}>                   
                        {formLoginCustomer}
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
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    }
}

export default connect(null, mapDispatchToProps)(Auth)