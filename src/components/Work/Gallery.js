import React, { Component } from 'react';
import ModalImage from 'react-modal-image'

import classes from './Work.css';


class Gallery extends Component {

    state = {
        gallery: this.props.images
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
                                    small={'https://res.cloudinary.com/danniscloud/image/upload/c_limit,h_350,w_350/v1/' + data.public_id}
                                    large={'https://res.cloudinary.com/danniscloud/image/upload/v1/' + data.public_id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Gallery;