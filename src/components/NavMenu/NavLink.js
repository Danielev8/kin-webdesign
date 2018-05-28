import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavMenu.css';

const navLink = (props) => {
    return <NavLink {...props} activeClassName={classes.active}>{props.children}</NavLink>
}

export default navLink