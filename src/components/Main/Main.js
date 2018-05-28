import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../About/About'
import Contact from '../Contact/Contact'
import Work from '../Work/Work'

import classes from './Main.css';


const main = () => {
    return (

        <div className={classes.container}>
            <Switch>
                <Route path="/work" component={Work} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </div>
    )
}

export default main;