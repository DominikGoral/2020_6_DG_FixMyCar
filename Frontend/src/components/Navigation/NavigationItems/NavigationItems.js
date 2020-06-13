import React from 'react';
import { BsHouseDoorFill } from "react-icons/bs";


import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            {(props.isAuthenticated && props.mechanic)
                ? <Aux>
                    <NavigationItem link="/workshop/all"><BsHouseDoorFill/></NavigationItem>
                    {/* <NavigationItem link="/workshop">Warsztat</NavigationItem> */}
                    <NavigationItem link="/logout">Wyloguj</NavigationItem>
                    <NavigationItem link="/mechanic/">Warsztaty</NavigationItem>
                </Aux>
                : null
            }
            {(props.isAuthenticated && props.customer)
                ? <Aux>
                    <NavigationItem link="/workshop/all"><BsHouseDoorFill/></NavigationItem>
                    <NavigationItem link="/workshop/all">Warsztaty</NavigationItem>
                    <NavigationItem link="/me">Mój profil</NavigationItem>
                    <NavigationItem link="/vehicle/all">Moje pojazdy</NavigationItem>
                    <NavigationItem link="/visit/all">Moje wizyty</NavigationItem>
                    <NavigationItem link="/logout">Wyloguj</NavigationItem>
                </Aux>
                : null
            }
            {!props.isAuthenticated
                ? <Aux>
                    <NavigationItem link="/workshop/all"><BsHouseDoorFill/></NavigationItem>
                    <NavigationItem link="/auth">Logowanie</NavigationItem>
                  </Aux>
                : null
            }
        </ul>
    )
}

export default navigationItems;