import React from 'react';

import classes from './VehicleItem.css';
import Button from '../../../UI/Button/Button'

const vehicleItem = (props) => {
    return (
        <div className={classes.Vehicle}>
            <span>{props.name}&nbsp;</span>
            <span>{props.category}</span>
        </div>
    )
}

export default vehicleItem;