import React, { Component } from 'react';

import CSSModules from '../../utils/css-modules';

import styles from './Home.scss';

@CSSModules(styles)
class Home extends Component {
    render() {
        return (
            <section styleName="home-page">
                Home
            </section>
        );
    }
}

export default Home;