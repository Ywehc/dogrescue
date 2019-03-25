import React, { Component } from 'react';
import Results from './Results.js';
import MainInput from './MainInput.js';
import Subheading from './Subheading.js';


class Main extends Component {
    render() {
        return (
            <div>
                <MainInput />
                <Subheading />
                <Results />
            </div>
        )
    }
}

export default Main;