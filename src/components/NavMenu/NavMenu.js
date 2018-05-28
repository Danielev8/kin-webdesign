import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import NavLink from './NavLink';
import classes from './NavMenu.css';
import { Link, Route, Switch } from 'react-router-dom'

class navMenu extends Component {

    scrollToTopButton = () => {
        return (
            <div id={classes.scrollToTop} className={classes.tooltip} onClick={() => scrollToComponent(this.Top, { offset: 0, align: 'top', duration: 200, ease: 'linear' })}>
                <i></i>
                <span className={classes.tooltiptext}>back to top</span>
            </div>
        )
    }

    render() {
        return (
            <div className={classes.container} ref={(section) => { this.Top = section; }}>
                <div className={classes.nameArea}>
                    <h1><Link to="/">Kyne Jalichandra</Link></h1>
                </div>
                <div className={classes.workArea}>
                    <h2><NavLink to="/work"> Work</NavLink></h2>
                </div>
                <div className={classes.aboutArea}>
                    <h2><NavLink to="/about">About</NavLink></h2>
                </div>
                <div className={classes.contactArea}>
                    <h2><NavLink to="/contact">Contact</NavLink></h2>
                </div>

                <Switch>
                    <Route path="/" exact/>
                    <Route render={this.scrollToTopButton} />
                </Switch>


            </div >
        );
    }
}

export default navMenu;