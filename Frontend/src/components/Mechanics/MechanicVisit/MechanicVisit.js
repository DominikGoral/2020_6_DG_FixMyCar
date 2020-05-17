import React from 'react'

import classes from './MechanicVisit.css'

const MechanicVisit = (props) => {
    return (
        <div className={classes.Visit}>
            <p style={{ display: 'inline' }}><b>Marka: </b>{props.vehicleName} &nbsp;&nbsp;&nbsp; <b>Model: </b>{props.vehicleModel}</p>
            <p><b>Opis:</b> {props.description}</p>
        </div>
    )
}

export default MechanicVisit
