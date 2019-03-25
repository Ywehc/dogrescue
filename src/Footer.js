import React, { Component } from 'react';
import './Style/Footer.scss';
import Privacy from './Privacy.js';
import About from './About.js';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privacyVisibile: false,
            aboutVisible: false
        };
        this.togglePrivacyVisible = this.togglePrivacyVisible.bind(this)
        this.toggleAboutVisible = this.toggleAboutVisible.bind(this)
    }

    togglePrivacyVisible = () => {
        const { privacyVisibile } = this.state;
        this.setState({ privacyVisibile: !privacyVisibile })
    }

    toggleAboutVisible = () => {
        const { aboutVisibile } = this.state;
        this.setState({ aboutVisibile: !aboutVisibile })
    }

    render() {
        return (
            <div>
                {this.state.aboutVisibile && <About />}
                <ul className="footer-menu">
                    <li onClick={this.toggleAboutVisible}>About</li>
                    <li onClick={this.togglePrivacyVisible}>Privacy</li>
                    <li>&copy; 2019 Chris Kieran</li>
                </ul>
                {this.state.privacyVisibile && <Privacy />}
            </div>
        )
    }
}

export default Footer;