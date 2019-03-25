
import React, { Component } from 'react';
import './Style/Main.scss';
import './Style/App.scss';

class Subheading extends Component {
    render() {
        return (
            <div className="subheading">
                <h2>Are you ready for the responsibility of owning a dog? Start by reviewing <span className="highlight">this checklist</span>.</h2>
            </div>
        )
    }
}

export default Subheading;