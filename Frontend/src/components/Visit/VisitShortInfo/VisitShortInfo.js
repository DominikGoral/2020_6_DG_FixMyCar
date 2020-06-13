import React, { Component } from 'react'
import { AiOutlineSchedule } from "react-icons/ai"
import { TiDelete } from "react-icons/ti"

import classes from './VisitShortInfo.css'

import Aux from '../../../hoc/Auxiliary/Auxiliary'

class VisitItem extends Component {
    state = {
        showDescription: false,
        showOptions: false
    }

    showDescriptionHandler = () => {
        this.setState({ showDescription: !this.state.showDescription })
    }
    render() {
        return (
            <Aux>
                <div className={classes.VisitShoftInfo} onClick={() => this.showDescriptionHandler()}>
                    <p>Data: {this.props.visitDate}</p>
                    <p>Zapłacono: {this.props.price}</p>
                    <div className={classes.DescriptionBox}>
                        {this.state.showDescription ? <p>Opis: {this.props.description}</p> : null}
                    </div>
                </div>
                <div>
                    {this.state.showOptions 
                        ? <div className={classes.OptionBox}>
                            <div className={classes.InfoButton}><AiOutlineSchedule /></div>
                            <div className={classes.DeleteButton} onClick={this.deleteVehicle}><TiDelete /></div>
                        </div> 
                        : null
                    }
                </div>
            </Aux>
            
        )
    }
}

export default VisitItem