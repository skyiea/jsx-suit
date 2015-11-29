import './chat.less';

@ReactClass
class Chat extends React.Component {
    static propTypes = {
        onMessage: React.PropTypes.func.isRequired
    };

    state = {
        inputText: ''
    };

    onKeyDown = (e) => {
        const { inputText } = this.state;

        if (e.keyCode === 13 && inputText.length) {
            this.setState({
                inputText: ''
            });

            this.props.onMessage(inputText);
        }
    };

    onChange = (e) => {
        this.setState({
            inputText: e.target.value
        });
    };

    componentDidMount() {
        this.refs.input.focus();
    }

    render() {
        return (
            <div className="chat">
                <div className="messages">
                    {
                        this.props.log.map((message, index) => {
                            const { type, text, user } = message;

                            return (
                                <div key={index} className="message">
                                    {
                                        type === 'service' ?
                                            <span className="service">{message.text}</span> :
                                            <span>
                                                <span className="user">{`${user}: `}</span>
                                                <span className="text">{text}</span>
                                            </span>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <input
                        ref="input"
                        className="text-input"
                        type="text"
                        value={this.state.inputText}
                        onKeyDown={this.onKeyDown}
                        onChange={this.onChange}/>
            </div>
        );
    }
}

export default Chat;