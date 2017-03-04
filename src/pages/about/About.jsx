import React, { Component } from 'react';

import CSSModules from '../../utils/css-modules';

import styles from './About.scss';

@CSSModules(styles)
class About extends Component {
    render() {
        return (
            <section styleName="about-page">
                Created using <a href="https://github.com/skyiea/jsx-suit">
                    JSX Suit
                </a>
            </section>
        );
    }
}

export default About;