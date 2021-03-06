import React, { Component } from 'react';
import NavLink from '../NavMenu/NavLink';
import { Route, Link, Switch } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import axios from 'axios';
import Gallery from './Gallery';

import classes from './Work.css';


class Work extends Component {

    state = {
        photography: [],
        graphic: [],
        mixed: []
    }

    componentDidMount() {
        scrollToComponent(this.Top, {
            align: 'middle',
            duration: 500,
        });

        axios.all([
            axios.get('https://res.cloudinary.com/danniscloud/image/list/graphicdesign.json'),
            axios.get('https://res.cloudinary.com/danniscloud/image/list/photography.json')
        ])
            .then(axios.spread((graphicimages, photographyimages) => {
                function shuffle(array) {
                    var m = array.length, t, i;

                    while (m) {
                        i = Math.floor(Math.random() * m--);
                        t = array[m];
                        array[m] = array[i];
                        array[i] = t;
                    }

                    return array;
                }

                let shuffledArray = shuffle([...graphicimages.data.resources, ...photographyimages.data.resources]);
                shuffledArray = shuffledArray.slice(0, 24);

                this.setState({
                    mixed: shuffledArray,
                    photography: photographyimages.data.resources,
                    graphic: graphicimages.data.resources
                });
            }));
    }

    render() {

        return (
            <div className={classes.container}>
                <h3 ref={(section) => { this.Top = section; }}><Link to="/work"> Work </Link></h3>
                <div className={classes.workTypes}>
                    <div className={classes.photography}>
                        <NavLink to="/work/photography" > Photography </NavLink>
                    </div>
                    <div className={classes.graphicDesign}>
                        <NavLink to="/work/graphic-design"> Graphic Design </NavLink>
                    </div>
                </div>

                <Switch>
                    <Route path="/work" exact component={() => <Gallery images={this.state.mixed} />} />
                    <Route path="/work/photography" exact component={() => <Gallery images={this.state.photography} />} />
                    <Route path="/work/graphic-design" exact component={() => <Gallery images={this.state.graphic} />} />
                </Switch>
            </div>
        )
    }
}

export default Work;