import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSModules from '../../utils/css-modules';

import styles from './App.scss';

@CSSModules(styles)
class App extends Component {
    render() {
        const {
            children
        } = this.props;

        return (
            <section styleName="app">
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                </nav>

                <section styleName="page">
                    {children}
                </section>
            </section>
        );
    }
}

export default App;