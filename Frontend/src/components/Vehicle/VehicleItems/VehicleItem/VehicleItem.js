import React, { Component } from 'react'

import classes from './VehicleItem.css'
import Button from '../../../UI/Button/Button'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { TiDelete } from "react-icons/ti"
import { AiFillInfoCircle } from "react-icons/ai"
import Aux from '../../../../hoc/Auxiliary/Auxiliary'
import Toast from '../../../UI/Toast/Toast'
import { BASEPATH } from '../../../../config'

class VehicleItem extends Component {
    state = {
        showOptions: false,
        message: ''
    }
    
    showOptionsHandler = () => {
        this.setState({ showOptions: !this.state.showOptions })
    } 

    deleteVehicle = () => {
        let url = BASEPATH + '/vehicle/' + this.props.vin_Number
        axios.delete(url)
        .then(response => {
            this.setState({ message: response.data.message })
        })
        this.forceUpdate()
    }

    moreInfoHandler = () => {
        return <Redirect to={'/vehicle/' + this.props.vin_Number} push/>
    }

    render() {
        return (
            <Aux>
                {this.state.message ? <Toast toastType="success" errorMessage={this.state.message} /> : null}
                <div className={classes.Vehicle} onClick={this.showOptionsHandler}>
                    <span>{this.props.name}&nbsp;</span>
                    <span>{this.props.category}</span>
                </div>
                <div>
                    {this.state.showOptions 
                        ? <div className={classes.OptionBox}>
                            <div className={classes.InfoButton}><Link to={'/vehicle/' + this.props.vin_Number} key={this.props.vin_Number}><AiFillInfoCircle /></Link></div>
                            <div className={classes.DeleteButton} onClick={this.deleteVehicle}><TiDelete /></div>
                        </div> 
                        : null
                    }
                </div>
            </Aux>
        )
    }
}

export default VehicleItem;