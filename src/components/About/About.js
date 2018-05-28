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
                <p>Bless up. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Special cloth alert. Don’t ever play yourself. Stay focused. In life there will be road blocks but we will over come it. Surround yourself with angels. Congratulations, you played yourself. Mogul talk. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion!</p>
                <p>Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Bless up. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. Every chance I get, I water the plants, Lion! Learning is cool, but knowing is better, and I know the key to success. The key is to drink coconut, fresh coconut, trust me.</p>
                <p>They key is to have every key, the key to open every door. They never said winning was easy. Some people can’t handle success, I can. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. We the best. Give thanks to the most high. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender.</p>

            </div>
        )
    }
}

export default About