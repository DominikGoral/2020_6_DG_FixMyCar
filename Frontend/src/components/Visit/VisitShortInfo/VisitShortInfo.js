import React, { Component } from 'react'
import { AiOutlineSchedule } from "react-icons/ai"
import { TiDelete } from "react-icons/ti"
import { FiChevronDown } from "react-icons/fi"

import classes from './VisitShortInfo.css'

import Aux from '../../../hoc/Auxiliary/Auxiliary'

class VisitItem extends Component {
    state = {
        showDescription: false,
        showOptions: false
    }

    showOptionsHandler = () => {
        this.setState({ showOptions: !this.state.showOptions })
    }

    showDescriptionHandler = () => {
        this.setState({ showDescription: !this.state.showDescription })
    }
    render() {
        return (
            <Aux>
                <div className={classes.VisitShoftInfo} onClick={() => this.showDescriptionHandler()}>
                    <span>Data: {this.props.visitDate}</span>
                    <span>
                        <FiChevronDown 
                            style={{ marginLeft: '60%' }} 
                            onClick={() => this.showOptionsHandler()}
                        />
                    </span>
                    <p>Zapłacono: {this.props.price}</p>
                    <div className={classes.DescriptionBox}>
                        {this.state.showDescription ? <p>Opis: {this.props.description}</p> : null}
                    </div>
                </div>
                <div>
                    {this.state.showOptions && this.props.upcomingVisit
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