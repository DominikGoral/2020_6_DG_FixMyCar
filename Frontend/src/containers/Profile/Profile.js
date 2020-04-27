import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { FaUser } from 'react-icons/fa'
import * as actions from '../../store/actions/index'

import classes from './Profile.css'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

class Profile extends Component {
    state = {
        Email: null,
        FirstName: null,
        Surname: null,
        Password: null,
        PhoneNumber: null,
        CreditCardNumber: null,
        City: null,
        Street: null,
        HomeNumber: null,
        FlatNumber: null,
        ZipCode: null,
        dataForm: {
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
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:8001/profile/' + this.props.userId)
            .then(response => {
                const profileData = response.data.customerData
                const addressData = response.data.addressData
                console.log(response)
                this.setState({ 
                    Email: profileData.Email,
                    FirstName: profileData.FirstName,
                    Surname: profileData.Surname,
                    PhoneNumber: profileData.PhoneNumber,
                    CreditCardNumber: profileData.CreditCardNumber,
                    Password: profileData.Password,
                    City: addressData.City,
                    Street: addressData.Street,
                    HomeNumber: addressData.HomeNumber,
                    FlatNumber: addressData.FlatNumber,
                    ZipCode: addressData.ZipCode
                })
            })
            .then(res => {
                this.setState({
                    dataForm: {
                        Email: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'email',
                                placeholder: 'Podaj adres email'
                            },
                            value: this.state.Email,
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
                            value: this.state.FirstName,
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
                            value: this.state.Surname,
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
                            value: this.state.City,
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
                            value: this.state.Street,
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
                            value: this.state.HomeNumber,
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
                            value: this.state.ZipCode,
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
                            value: this.state.Password,
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
                            value: this.state.PhoneNumber,
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
                            value: this.state.CreditCardNumber,
                            validation: {
                                required: true,
                                minLength: 6
                            },
                            valid: false,
                            touched: false
                        }
                    }
                })
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
        console.log(this.state.Email)
        const updatedControls = {
            ...this.state.dataForm,
            [controlName]: {
                ...this.state.dataForm[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.dataForm[controlName].validation),
                touched: true
            }
        };
        this.setState({dataForm: updatedControls});
        console.log(this.state.Email)
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onDataUpdate(
            this.state.dataForm.Email.value,
            this.state.dataForm.FirstName.value,
            this.state.dataForm.Surname.value,
            this.state.dataForm.City.value,
            this.state.dataForm.Street.value,
            this.state.dataForm.HomeNumber.value,
            this.state.dataForm.FlatNumber.value, 
            this.state.dataForm.ZipCode.value,
            this.state.dataForm.Password.value,
            this.state.dataForm.PhoneNumber.value,
            this.state.dataForm.CreditCardNumber.value
            /*
            'dominikgoral@onet.pl',
            '',
            '',
            '',
            '',
            '',
            '', 
            '',
            '',
            '',
            ''
            */
        ) 
    }

    render() {
        console.log('Email:' + this.state.dataForm.Email.value)
        const customerData = []
        for(let key in this.state.dataForm) {
            customerData.push({
                id: key,
                config: this.state.dataForm[key]
            })
        }

        const formDataCustomer = customerData.map(formElement => (
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
                <center><FaUser style={{ fontSize:'300%', marginTop:'50px' }}/></center>
                <div className={classes.ProfileBox}>
                    <form onSubmit={this.submitHandler}> 
                        {formDataCustomer}
                        <Button>Potwierdź zmiany</Button>
                    </form>
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

const mapDispatchToProps = dispatch => {
    return {
        onDataUpdate: (email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, creditCardNumber) => {
            dispatch(actions.dataUpdate(email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, creditCardNumber))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile)