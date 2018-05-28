import React, { Component } from 'react';
import axios from 'axios';
import ModalImage from 'react-modal-image'

import classes from './Work.css';

class MixedWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        axios.all([
            axios.get('https://res.cloudinary.com/danniscloud/image/list/graphicdesign.json'),
            axios.get('https://res.cloudinary.com/danniscloud/image/list/Photography.json')
        ])
            .then(axios.spread((graphicdesign, photography) => {
                this.setState({ gallery: [...graphicdesign.data.resources, ...photography.data.resources] });
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
        
                let shuffledArray = shuffle([...this.state.gallery]);
                shuffledArray = shuffledArray.slice(0,24);

                this.setState({gallery: shuffledArray});
            }));
    }

    render() {
        return (
            <div className={classes.Gallery}>
                {
                    this.state.gallery.map(data => {
                        return (

                            <div>
                                <ModalImage
                                    className={classes.imageContainer}
                                    small={'http://res.cloudinary.com/danniscloud/image/upload/v1/' + data.public_id}
                                    large={'http://res.cloudinary.com/danniscloud/image/upload/v1/' + data.public_id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default MixedWork;