import React from 'react';
import List from '../list/List';

import './body.less';

const Body = React.createClass({
    handleChange(e) {
        this.setState({
            input_text: e.target.value
        });
    },

    addTodo() {
        this.state.list.push(this.state.input_text);

        this.setState({
            list: this.state.list,
            input_text: ''
        });

        console.log(this.refs.title.getDOMNode().clientWidth);
    },

    getInitialState() {
        return {
            input_text: '',
            list: []
        };
    },

    render() {
        return (
            <div className="app-body">
                <h3 ref="title">TodoList</h3>
                <input  type="text"
                        value={this.state.input_text}
                        onChange={this.handleChange} />
                <button onClick={this.addTodo}>
                    Add
                </button>
                <List list={this.state.list} />
            </div>
        );
    }
});

export default Body;