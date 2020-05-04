import React from 'react';

import classes from './VehicleItem.css';
import Button from '../../../UI/Button/Button'

const vehicleItem = (props) => {
    return (
        <div className={classes.Workshop}>
            <p>{props.name}</p>
            <p>{props.category}</p>
        </div>
    )
}

export default vehicleItem;