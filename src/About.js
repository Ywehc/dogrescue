
import React, { Component } from 'react';
import './Style/About.scss';
import './Style/App.scss';

class About extends Component {
    render() {
        return (
            <header>
                <div className="about-container">
                    <p>PetRescue was developed by Chris Kieran using React.js and the RescueGroups.org API.</p>
                    <p>This application is providing links to external animal adoption organizations in good faith that they operate honourably. Nevertheless, please exercise caution. You can learn about common pet adoption scams here.</p>
                    <p> Want to hire me to build your next app or site? Email chriskierandevelopment@gmail.com .</p>
                </div>
            </header>
        )
    }
}

export default About;