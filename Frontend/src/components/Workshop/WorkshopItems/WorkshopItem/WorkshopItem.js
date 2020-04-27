import React from 'react';

import classes from './WorkshopItem.css';
import Button from '../../../UI/Button/Button'

const workshopItem = (props) => {
    return (
        <div className={classes.Workshop}>
            <p>{props.name}</p>
            <p>{props.category}</p>
        </div>
    )
}

export default workshopItem;