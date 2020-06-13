import React from 'react';
import { BsChevronDoubleRight } from "react-icons/bs";

import classes from './WorkshopItem.css';
import Button from '../../../UI/Button/Button'

const workshopItem = (props) => {
    return (
        <div className={classes.Workshop}>
            <div className={classes.WorkshopImage}>

            </div>
            <div className={classes.WorkshopInfo}>
                <p style={{ fontSize: '200%' }}>{props.name}</p>
                <p>{props.category}</p>
            </div>
            <BsChevronDoubleRight className={classes.MoreInfoButton}/>
        </div>
    )
}

export default workshopItem;