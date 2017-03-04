import React, { Component } from 'react';

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
                <header>
                    <a href="/#/">React application</a>
                </header>

                <main>
                    {children}
                </main>

                <footer>
                    <a href="https://github.com/skyiea/jsx-suit">GitHub</a>
                </footer>
            </section>
        );
    }
}

export default App;