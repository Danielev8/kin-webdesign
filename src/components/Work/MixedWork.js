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
            axios.get('http://res.cloudinary.com/danniscloud/image/list/graphicdesign.json'),
            axios.get('http://res.cloudinary.com/danniscloud/image/list/Photography.json')
        ])
            .then(axios.spread((graphicdesign, photography) => {
                this.setState({ gallery: [...graphicdesign.data.resources, ...photography.data.resources] });
            }));
        console.log(this.state.gallery);
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