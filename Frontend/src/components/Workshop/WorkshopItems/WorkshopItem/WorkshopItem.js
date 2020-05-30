import React from 'react';
import { BsChevronDoubleRight } from "react-icons/bs";

import classes from './WorkshopItem.css';
import Button from '../../../UI/Button/Button'

const workshopItem = (props) => {
    return (
        <div className={classes.Workshop}>
            <p style={{ fontSize: '200%' }}>{props.name}</p>
            <p>{props.category}</p>
            <BsChevronDoubleRight className={classes.MoreInfoButton}/>
        </div>
    )
}

export default workshopItem;