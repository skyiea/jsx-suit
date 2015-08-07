import React from 'react';

const List = React.createClass({
    render() {
        return (
            <div className="list">
                {
                    this.props.list.map((item, index) => (
                        <div className="item"
                             key={index}>
                            {item}
                        </div>
                    ))
                }
            </div>
        );
    }
});

export default List;