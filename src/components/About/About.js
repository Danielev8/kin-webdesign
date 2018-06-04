import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import classes from './About.css'
import profileImage from '../../assets/images/profilepic.jpeg'

class About extends Component {

    componentDidMount() {
        scrollToComponent(this.Top, {
            align: 'middle',
            duration: 500,
        });
    }


    render() {
        return (
            <div>
                <h3 ref={(section) => { this.Top = section; }}>About</h3>
                <img src={profileImage} alt="profile" className={classes.profilepic} />
                
                <div className={classes.aboutAreas}>
                    <div className={classes.basicInfo}>
                        <h4> Hello, My name is Kyne Jalichandra </h4>
                        <hr />
                        <p> I am a 19-year-old Thai student studying Graphics and Media Design at
                            UAL: London College of Communication mainly specializing in Graphics 
                            Design and Photography. I love creating, and helping people create. 
                            Contact me if you want to get in touch, I am always willing to 
                            check out new projects!
                        </p>
                    </div>

                    <div className={classes.facts} >
                        <h4> Facts about me </h4>
                        <hr />
                        <ul>
                            <li>English has become my first language due to all the relocating. </li>
                            <li>Music nerd and vinyl collector. </li>
                            <li> I love 80s neon aesthetics. </li>
                            <li>Became interested in art upon discovering Newgrounds flash cartoons.</li>
                        </ul>
                    </div >

                    <div className={classes.programmes}>

                        <h4> Programmes I use </h4>
                        <hr />
                        <ul>
                            <li>Illustrator</li>
                            <li>InDesign</li>
                            <li>Windows Office Suite</li>
                            <li>Flash/Animate CC</li>
                            <li>Paint Tool SAI</li>

                        </ul>

                    </div>
                </div>

            </div >
        )
    }
}

export default About