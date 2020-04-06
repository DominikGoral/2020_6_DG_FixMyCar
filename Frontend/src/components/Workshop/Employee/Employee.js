import React from 'react'

import classes from './Employee.css'

const employee = (props) => (
    <div className={classes.Employee}>
        <p>Domini Góral</p>
        <p>Nazwa naprawianego auta</p>
        <p>Szacowana data zakończenia naprawy</p>
    </div>
)

export default employee