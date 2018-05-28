import React, { Component } from 'react';
import NavLink from '../NavMenu/NavLink';
import { Route, Link, Switch } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';


import Photography from './Photography';
import GraphicDesign from './GraphicDesign';
import MixedWork from './MixedWork';

import classes from './Work.css';


class Work extends Component {

    componentDidMount() {
        scrollToComponent(this.Top, {
            align: 'middle',
            duration: 500,
        });
    }

    render() {

        return (
            <div className={classes.container}>
                <h3 ref={(section) => { this.Top = section; }}><Link to="/work"> Work </Link></h3>
                <div className={classes.workTypes}>
                    <div className={classes.photography}><NavLink to="/work/photography" > Photography </NavLink> </div>
                    <div className={classes.graphicDesign}><NavLink to="/work/graphic-design"> Graphic Design </NavLink> </div>
                </div>

                <Switch>
                    <Route path="/work" exact component={MixedWork} />
                    <Route path="/work/photography" exact component={Photography} />
                    <Route path="/work/graphic-design" exact component={GraphicDesign} />
                </Switch>
            </div>
        )
    }
}

export default Work;