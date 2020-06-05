import React, { Component } from 'react'

import classes from './VehicleItem.css'
import Button from '../../../UI/Button/Button'
import { TiDelete } from "react-icons/ti"
import { MdModeEdit } from "react-icons/md"
import Aux from '../../../../hoc/Auxiliary/Auxiliary'

class VehicleItem extends Component {
    state = {
        showOptions: false
    }
    
    showOptionsHandler = () => {
        this.setState({ showOptions: !this.state.showOptions })
    } 

    render() {
        return (
            <Aux>
                <div className={classes.Vehicle}>
                    <span>{this.props.name}&nbsp;</span>
                    <span>{this.props.category}</span>
                    <button onClick={this.showOptionsHandler}>poka</button>
                </div>
                <div>
                    {this.state.showOptions 
                        ? <div className={classes.OptionBox}>
                            <div className={classes.InfoButton}><MdModeEdit /></div>
                            <div className={classes.DeleteButton}><TiDelete /></div>
                        </div> 
                        : null
                    }
                </div>
            </Aux>
        )
    }
}

export default VehicleItem;