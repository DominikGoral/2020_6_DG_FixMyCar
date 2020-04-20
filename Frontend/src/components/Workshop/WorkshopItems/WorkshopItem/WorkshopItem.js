import React from 'react';

import classes from './NavigationItems.css';

const workshopItem = (props) => (
    <div className={classes.Workshop}>
        <p>{props.name}</p>
        <p>{props.Category}</p>
    </div>
)

export default workshopItem;