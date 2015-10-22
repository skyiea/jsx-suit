import React from 'react';
import $ from 'jquery';

import Accordion from 'accordion/Accordion';

import './body.less';

export default class Body extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            tabs: []
        };
    }

    loadData() {
        $.getJSON('/data').
            then(({ tabs }) => {
                this.setState({
                    isLoading: false,
                    tabs
                });
            });
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const className = 'app-body';

        if (this.state.isLoading) {
            return (
                <div className={className}>Loading..</div>
            );
        }

        return (
            <div className={className}>
                <Accordion tabs={this.state.tabs} />
            </div>
        );
    }
}