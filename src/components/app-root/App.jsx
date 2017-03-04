import React, { Component } from 'react';

import './App.scss';

class App extends Component {
    render() {
        const {
            children
        } = this.props;

        return (
            <section className="app">
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