import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {props.isAuthenticated
            ? <NavigationItem link="/workshop">Warsztat</NavigationItem>
            : null
        }
        {props.isAuthenticated 
            ? <NavigationItem link="/logout">Wyloguj</NavigationItem>
            : <NavigationItem link="/auth">Logowanie</NavigationItem>
        }
    </ul>
);

export default navigationItems;