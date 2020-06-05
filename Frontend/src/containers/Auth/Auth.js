import React, { Component } from 'react'
import { connect } from 'react-redux'
import Switch from 'react-switch'
import { AiOutlineSend } from "react-icons/ai";
import userIcon from '../../images/user-icon.png'
import Toast from '../../components/UI/Toast/Toast'

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
        controlsRegister: {
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
                    isZipCode: true
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

        if (rules.isZipCode) {
            const pattern = /[0-9]{2}[-][0-9]{3}/
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

    // inputChangedHandlerRegisterCustomer = (event, controlName) => {
    //     const updatedControls = {
    //         ...this.state.controlsRegister,
    //         [controlName]: {
    //             ...this.state.controlsRegister[controlName],
    //             value: event.target.value,
    //             valid: this.checkValidity(event.target.value, this.state.controlsRegister[controlName].validation),
    //             touched: true
    //         }
    //     };
    //     this.setState({controlsRegister: updatedControls});
    // }

    inputChangedHandlerRegister = (event, controlName) => {
        const updatedControls = {
            ...this.state.controlsRegister,
            [controlName]: {
                ...this.state.controlsRegister[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controlsRegister[controlName].validation),
                touched: true
            }
        };
        this.setState({controlsRegister: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault()
        if(this.state.isSignup) {
            this.props.onAuthLogin(this.state.controlsLogin.Email.value, this.state.controlsLogin.Password.value)
        } else {
            this.props.onAuthRegister(
                this.state.controlsRegister.Email.value,
                this.state.controlsRegister.FirstName.value,
                this.state.controlsRegister.Surname.value,
                this.state.controlsRegister.City.value,
                this.state.controlsRegister.Street.value,
                this.state.controlsRegister.HomeNumber.value,
                this.state.controlsRegister.FlatNumber.value, 
                this.state.controlsRegister.ZipCode.value,
                this.state.controlsRegister.Password.value,
                this.state.controlsRegister.TelephoneNumber.value,
                //this.state.controlsRegisterMechanic.CreditCardNumber.value,
                this.state.customer
            )
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

        const formElementsArrayRegister = []
        for(let key in this.state.controlsRegister) {
            formElementsArrayRegister.push({
                id: key,
                config: this.state.controlsRegister[key]
            })
        }

        const formRegister = formElementsArrayRegister.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandlerRegister( event, formElement.id )}
            />
        ))

        return (
            <Aux>
                <div>
                    {this.props.error ? <Toast toastType="error" errorMessage={this.props.error}/> : null}
                    <div className={classes.UserIcon}>
                        <img src={userIcon}/>
                    </div>
                    <div className={classes.Auth}>
                        <div className={classes.LoginRegister}>
                            Mam już konto <Switch 
                                className={classes.ReactSwitch}
                                onChange={this.switchAuthModeHandler}
                                checked={this.state.isSignup}
                            />
                        </div>
                        <form onSubmit={this.submitHandler}> 
                                {this.state.isSignup ? formLogin: 
                                this.state.customer ? formRegister: formRegister}
                                {!this.state.isSignup
                                    ?    <div className={classes.UserType}>
                                            Klient <Switch 
                                                className={classes.ReactSwitch}
                                                onChange={this.switchCustomerWorkshopHandler}
                                                checked={this.state.customer}
                                            /> Mechanik
                                        </div>
                                    : null
                                }
                                <Button><AiOutlineSend/></Button>
                        </form>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthLogin: (email, password) => dispatch(actions.authLogin(email, password)),
        onAuthRegister: (email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, role) => {
            dispatch(actions.authRegister(email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, role))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)