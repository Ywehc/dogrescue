
import React, { Component } from 'react';
import './Style/Header.scss';
import './App.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="title">
                    <h1><span>Pet</span><span className="highlight">Rescue</span></h1>
                    <p className="subheader-bestfriend">a best friend.<span className="subheader-home"> a home.</span> </p>
                </div>
                <div className="logo">
                    <img src="https://lh3.googleusercontent.com/SmqnK4xRdiqTLpQ4oSSHNVKYL_a6zVUFhEtyGjo6-wA6oXXDWCCKa4Po8UUZFzJi2mxF42IpW4lh0eiUa-HX0KD3qP5WWCueBS3m9B_U-a_u36JOnnvEoxm2BhssSoPFn_HnuP2zJKsT6SAzmfXfMhpKVeOJLZvO-VkA_ux_0BNBl0S6f9L1HWu17eqp_ywpVaFFA7wKXmZXxtjht8PbcatZMp3s8RveCtr0w5THRJxXZzbgwpo3cff8VFO7YeLU_1o-QSjND12mG0WoA5-7MKnqImINVvfxujq7eBMV7tGlU_oRtjs6VBJ6S8-7NNEResspfYXJYyfN8nkhJ398b22XvRzZ-makUBiqSgk_mYpzbuW2_4f6qoDK82yjd9azF5DepylPJbG8HKP_zUgznEKg7PoQUCBxKKODHaLwUxX6Htrm7MHuzKFFM5w9LrTqh6enMVAtX8IAwXmlW9F--yr02b678RsgChJPC8bCd_2JFUKiPgi73sezvpxdXD-nC5fIzPjkCa6O42XjlD_BXpYyM1Z-32LP-sl3T2ovzSWJM4R7LU7qdLyUS-uO3-7DlxTj68EYYcdS7Pk715GYCmRVxn7x1kizg9YkMlvPptKcySdJxlwgOhYu6AuOinoyFURJpyZ-Bwrsa7mtvQC7fs4kO1KFcdU=w955-h843-no" alt=""></img>
                </div>
            </header>
        )
    }
}

export default Header;