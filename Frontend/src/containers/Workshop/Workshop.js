import React, { Component } from 'react'

import classes from './Workshop.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Schedule from './Schedule/Schedule'
import Employees from './Employees/Employees'

class Workshop extends Component {
    render() {
        return(
            <Aux>
                <Schedule />
                <Employees />
            </Aux>
        )
    }
}

export default Workshop