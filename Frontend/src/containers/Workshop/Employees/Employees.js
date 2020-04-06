import React, { Component } from 'react'

import classes from './Employees.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Employee from '../../../components/Workshop/Employee/Employee'

class Employees extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Employees}>
                    <p>PRACOWNICY</p>
                    <Employee />
                    <Employee />
                    <Employee />
                </div>
            </Aux>
        )
    }
}

export default Employees