import React from 'react';

import './accordion.less';

export default class Accordion extends React.Component {
    constructor() {
        super();

        this.state = {
            active_tabs: []
        };
    }

    onTabToggle(tab_index) {
        const { active_tabs } = this.state;
        const new_active_tabs = active_tabs.slice();

        new_active_tabs[tab_index] = !active_tabs[tab_index];
        
        this.setState({
            active_tabs: new_active_tabs
        });
    }

    createTab = (tab, index) => {
        return (
            <div
                    key={`tab${index}`}
                    className="container"
                    onClick={() => this.onTabToggle(index)}>
                <div className="title">
                    { tab.name }
                </div>
                {
                    this.state.active_tabs[index] &&
                        <div className="content">
                            { tab.desc }
                        </div>
                }
            </div>
        );
    }

    render() {
        return (
            <div className="accordion">
                { this.props.tabs.map(this.createTab) }
            </div>
        );
    }
}