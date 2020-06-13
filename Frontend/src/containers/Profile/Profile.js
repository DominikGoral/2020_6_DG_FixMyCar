import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { FaUser } from 'react-icons/fa'
import { AiFillEdit, AiFillTool } from 'react-icons/ai'
import * as actions from '../../store/actions/index'
import { BASEPATH } from '../../config'

import classes from './Profile.css'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Toast from '../../components/UI/Toast/Toast'

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
        editMode: true,
        NewPassword: '',
        ConfirmNewPassword: '',
        OldPassword: '',
        toastType: '',
        responseMessage: '',
        dataForm: {
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
        }
    }
    
    componentDidMount() {
        axios.get(BASEPATH + '/profile/' + this.props.userId)
            .then(response => {
                const profileData = response.data.customerData
                const addressData = response.data.addressData
                console.log(response)
                this.setState({ 
                    Email: profileData.Email,
                    FirstName: profileData.FirstName,
                    Surname: profileData.Surname,
                    PhoneNumber: profileData.PhoneNumber,
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

    submitHandler = () => {
        // event.preventDefault()
        this.props.onDataUpdate(
            this.state.dataForm.City.value,
            this.state.dataForm.Street.value,
            this.state.dataForm.HomeNumber.value,
            this.state.dataForm.FlatNumber.value, 
            this.state.dataForm.ZipCode.value,
            this.state.dataForm.PhoneNumber.value,
        ) 
    }

    changePassword = (event) => {
        if(this.state.NewPassword === this.state.ConfirmNewPassword) {
            event.preventDefault()
            axios.put(BASEPATH + '/me/update-password', {
                userId: this.props.userId,
                password: this.state.Password,
                oldPassword: this.state.OldPassword,
                newPassword: this.state.NewPassword
            })
            .then(response => {
                console.log(response)
                this.setState({ toastType: response.data.toastType, responseMessage: response.data.message })
            })
        } else {
            this.setState({ toastType: 'error', responseMessage: 'Podane nowe hasła się różnią!' })
        }
    }

    switchEditMode = (e) => {
        if(this.state.editMode === false) {
            this.submitHandler()
            this.setState({ editMode: true })
        } else {
            this.setState({ editMode: false })
        }
    }

    render() {
        const personalData = []
        const addressData = []
        // const password = []
        // Personal data like FirstName, Surname
        personalData.push({
            id: "FirstName",
            config: this.state.dataForm.FirstName
        })
        personalData.push({
            id: "Surname",
            config: this.state.dataForm.Surname
        })
        // Address data like city, street...
        addressData.push({
            id: "City",
            config: this.state.dataForm.City
        })
        addressData.push({
            id: "Street",
            config: this.state.dataForm.Street
        })
        addressData.push({
            id: "HomeNumber",
            config: this.state.dataForm.HomeNumber
        })
        addressData.push({
            id: "FlatNumber",
            config: this.state.dataForm.FlatNumber
        })
        addressData.push({
            id: "ZipCode",
            config: this.state.dataForm.ZipCode
        })
        addressData.push({
            id: "PhoneNumber",
            config: this.state.dataForm.TelephoneNumber
        })
        // Password data
        // password.push({
        //     id: 8,
        //     config: this.state.dataForm.Password
        // })

        const personalDataCustomer = personalData.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                editMode="true"
                changed={(event) => this.inputChangedHandler( event, formElement.id )}
            />
        ))

        const addressDataCustomer = addressData.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                editMode={this.state.editMode}
                changed={(event) => this.inputChangedHandler( event, formElement.id )}
            />
        ))

        // const passwordDataCustomer = password.map(formElement => (
        //     <Input 
        //         key={formElement.id}
        //         elementType={formElement.config.elementType}
        //         elementConfig={formElement.config.elementConfig}
        //         value={formElement.config.value}
        //         invalid={!formElement.config.valid}
        //         shouldValidate={formElement.config.validation}
        //         touched={formElement.config.touched}
        //         disabled={this.state.editMode}
        //         changed={(event) => this.inputChangedHandler( event, formElement.id )}
        //     />
        // ))

        return (
            <Aux>
                { this.state.responseMessage ? <Toast toastType={this.state.toastType} errorMessage={this.state.responseMessage} /> : null }
                <center><span><FaUser style={{ fontSize:'300%', marginTop:'50px' }}/></span></center>
                <div className={classes.ProfileBox}>
                    {/* <AiFillEdit onClick={this.switchEditMode}/> */}
                    <p>Dane personalne</p>
                    <div className={classes.PersonalDataSection}>
                        {personalDataCustomer}
                    </div>
                    <span>Dane adresowe</span><span><AiFillEdit className={classes.editAddressDataButton} onClick={e => this.switchEditMode(e)}/></span>
                    <div className={classes.AddressDataSection}>
                        {addressDataCustomer}
                    </div>
                    <p>Zmień hasło</p>
                    <div className={classes.PasswordDataSection}>
                        <p>Stare hasło</p>
                        <input
                            className={classes.PasswordInput}
                            type="password" 
                            value={this.state.OldPassword}
                            onChange={(event) => this.setState({ OldPassword: event.target.value })}
                        />
                        {}
                        <p>Nowe hasło</p>
                        <input 
                            className={classes.PasswordInput}
                            type="password" 
                            value={this.state.NewPassword}
                            onChange={(event) => this.setState({ NewPassword: event.target.value })}
                        />
                        <p>Powtórz nowe hasło</p>
                        <input
                            className={classes.PasswordInput}
                            type="password" 
                            value={this.state.ConfirmNewPassword}
                            onChange={(event) => this.setState({ ConfirmNewPassword: event.target.value })}
                        />
                        {this.state.NewPassword !== this.state.ConfirmNewPassword ? <p style={{ color: 'red' }}>Podane hasła nie są takie same!</p> : null}
                        <div className={classes.ChangeButton}>
                            <AiFillTool onClick={e => this.changePassword(e)}/>
                        </div>
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

const mapDispatchToProps = dispatch => {
    return {
        onDataUpdate: (email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, creditCardNumber) => {
            dispatch(actions.dataUpdate(email, firstName, surname, city, street, homeNumber, flatNumber, zipCode, password, telephoneNumber, creditCardNumber))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile)