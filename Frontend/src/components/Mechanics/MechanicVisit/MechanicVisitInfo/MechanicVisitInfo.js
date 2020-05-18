import React from 'react'

import classes from './MechanicVisitInfo.css'

const mechanicVisitInfo = (props) => {
    return (
        <div className={classes.InfoBox}>
            <p><b>Imię i nazwisko: </b>{props.firstName}&nbsp;{props.surname}</p>
            <p><b>Metoda płatności: </b>{props.paymentMethod}</p>
            <p style={{ fontSize: '150%' }}><b>Do zapłaty: </b>{props.totalPrice} zł</p>
            <p><b>Do wykonania:</b></p>
            {props.services.map(service => (
                <p>{service.ServiceName}</p>
            ))}
        </div>
    )
}

export default mechanicVisitInfo