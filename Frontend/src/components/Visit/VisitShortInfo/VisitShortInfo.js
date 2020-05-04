import React, { Component } from 'react'

import classes from './VisitShortInfo.css'

const visitItem = (props) => {
    return (
        <div className={classes.VisitShoftInfo}>
            <p>Data: {props.visitDate}</p>
            <p>Zapłacono: {props.price}</p>
            <p>Opis: {props.description}</p>
        </div>
    )
}

export default visitItem