import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'
import { connect } from 'react-redux'
import { AiOutlineSave } from 'react-icons/ai'

import classes from './AddWorkshop.css'
import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'
import * as actions from '../../../../store/actions/index'

class AddWorkshop extends Component {
    state = {
        userId: null,
        form: {
            NIP: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'NIP'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            WorkshopName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nazwa warsztatu'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            Category: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Mechanika', displayValue: 'Mechanika' },
                        { value: 'Elektryka', displayValue: 'Elektryka' },
                        { value: 'Wulkanizacja', displayValue: 'Wulkanizacja' }
                    ]
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            Description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Opis'
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
                    placeholder: 'Miasto'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            Street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ulica'
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
                    placeholder: 'Numer budynku'
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
                    placeholder: 'Numer mieszkania'
                },
                value: ''
            },
            ZipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Kod pocztowy'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
        }
    }

    componentDidMount() {
        this.setState({ userId: this.props.userId })
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
            ...this.state.form,
            [controlName]: {
                ...this.state.form[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.form[controlName].validation),
                touched: true
            }
        };
        this.setState({form: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAddWorkshop(
            this.state.form.NIP.value,
            this.state.form.WorkshopName.value,
            this.state.form.Category.value,
            this.state.form.Description.value,
            this.state.form.City.value,
            this.state.form.Street.value,
            this.state.form.HomeNumber.value,
            this.state.form.FlatNumber.value, 
            this.state.form.ZipCode.value,
            this.state.userId
        )
    }

    render() {
        const formElementsAddWorkshop = []
        for(let key in this.state.form) {
            formElementsAddWorkshop.push({
                id: key,
                config: this.state.form[key]
            })
        }

        const form = formElementsAddWorkshop.map(formElement => (
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
        return(
            <Spring
                from={{opacity: 0, marginTop: -500}}
                to={{ opacity: 1, marginTop: 0}}
            >
                { props => (
                    <div style={props}>
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <div style={{marginLeft: '80%'}}>
                                <Button>Zapisz <AiOutlineSave /></Button>
                            </div>
                        </form>
                    </div>
                )}
            </Spring> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddWorkshop: (NIP, WorkshopName, Category, Description, city, street, homeNumber, flatNumber, zipCode, userId) => {
            dispatch(actions.addWorkshop(NIP, WorkshopName, Category, Description, city, street, homeNumber, flatNumber, zipCode, userId))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddWorkshop)