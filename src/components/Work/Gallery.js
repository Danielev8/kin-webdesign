import React, { Component } from 'react';

import Lightbox from 'react-images';

import classes from './Work.css';


class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            currentImage: 0,
            lightboximages: []
        };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this); 
    }
    
    openLightbox(e){
        this.setState({
            currentImage: Number(e.currentTarget.dataset.id),
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    gotoImage(index){
        this.setState({
            currentImage: index
        });
    }

    lightboximages() {
        return (this.props.images.map(data => {
            return (
                { src: data }
            )
        }))
    }

    componentDidMount() {
        this.setState( () => {
            return {lightboximages: this.lightboximages()}
        })
    }

    render() {

        console.log(this.state.lightboximages);

        return (

            <div>
                <div className={classes.Gallery}>
                    {
                        this.props.images.map((data, index) => {
                            return (
                                <div key={index} className={classes.imageContainer} data-id={index} onClick={this.openLightbox.bind(this)} >
                                    <img key={index} src={data} alt={"galleryPicNo" + index} />
                                </div>
                            )
                        })
                    }
                </div>
                <Lightbox images={this.state.lightboximages}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClickThumbnail={this.gotoImage}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    showThumbnails={true}
                    backdropClosesModal={true}
                />
            </div >
        )
    }

}

export default Gallery;