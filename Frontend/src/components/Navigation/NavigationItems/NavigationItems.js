import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    console.log('TYP UZYTKOWNIKA: ' + props.userType)
    return (
        <ul className={classes.NavigationItems}>
        {props.isAuthenticated
            ? <NavigationItem link="/workshop">Warsztat</NavigationItem>
            : null
        }
        {props.isAuthenticated 
            ? <NavigationItem link="/logout">Wyloguj</NavigationItem>
            : <NavigationItem link="/auth">Logowanie</NavigationItem>
        }
        {props.userType === 'customer'
            ? <NavigationItem link="/workshop/all">Warsztaty</NavigationItem>
        : props.userType === 'mechanic'
            ? <NavigationItem link="/visit/all">Wizyty</NavigationItem>
            : null
        }
        <NavigationItem link="/workshop/all">Warsztaty</NavigationItem>
        <NavigationItem link="/me">Mój profil</NavigationItem>
        <NavigationItem link="/map">Mapa</NavigationItem>
    </ul>
    )
}

export default navigationItems;