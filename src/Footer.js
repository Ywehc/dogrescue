import React, { Component } from 'react';
import './Style/Footer.scss';
import Privacy from './Privacy';
import About from './About';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacyVisibile: false,
      aboutVisibile: false,
    };
    this.togglePrivacy = this.togglePrivacy.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }

    togglePrivacy = () => {
      const { privacyVisibile } = this.state;
      this.setState({ privacyVisibile: !privacyVisibile });
    }

    toggleAbout = () => {
      const { aboutVisibile } = this.state;
      this.setState({ aboutVisibile: !aboutVisibile });
    }

    render() {
      return (
        <div>
          {<About /> && this.state.aboutVisibile}
          <ul className="footer-menu">
            <li onClick={this.toggleAbout}>About</li>
            <li onClick={this.togglePrivacy}>Privacy</li>
            <li>&copy; 2019 Chris Kieran</li>
          </ul>
          {this.state.privacyVisibile && <Privacy />}
        </div>
      );
    }
}

export default Footer;
