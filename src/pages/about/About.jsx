import React, { Component } from 'react';

import CSSModules from '../../utils/css-modules';

import styles from './About.scss';

@CSSModules(styles)
class About extends Component {
    render() {
        return (
            <section styleName="about-page">
                <p>
                    React application suit
                </p>

                <a href="https://github.com/skyiea/jsx-suit">
                    View on GitHub
                </a>
            </section>
        );
    }
}

export default About;