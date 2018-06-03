import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import scrollToComponent from 'react-scroll-to-component';


import classes from './Contact.css'

class Contact extends Component {

    _executeAfterModalClose = () => {
        document.getElementById("contactForm").reset();
    }

    componentDidMount() {
        scrollToComponent(this.Top, {
            offset: 200,
            align: 'middle',
            duration: 500,
        });
    }

    render() {

        var myDialog = {
            'min-height': '1em',
            top: '65%',
            'font-size': '1.5em'
        };

        return (
            <div>
                <h3 ref={(section) => { this.Top = section; }}>Contact</h3>
                <form id="contactForm">
                    <input type="text" id={classes.name} placeholder="Your Name" />
                    <input type="text" id={classes.email} placeholder="Your Email" />
                    <input type="text" id={classes.subject} placeholder="Subject" />
                    <textarea id={classes.message} placeholder="Type your message here..." />

                    <button type="button" id={classes.submit} onClick={() => this.showSent.show()}>Send</button>
                </form>

                <SkyLight
                    hideOnOverlayClicked
                    ref={ref => this.showSent = ref}
                    afterClose={this._executeAfterModalClose}
                    dialogStyles={myDialog}>
                    Thank you, I have received your message and will get back to you shortly.
                </SkyLight>

            </div>

        )
    }
}

export default Contact;