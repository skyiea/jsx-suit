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

    onChange = () => {
        this.setState({
            inputText: this.refs.input.value
        });
    };

    componentDidMount() {
        this.refs.input.focus();
    }

    render() {
        return (
            <section className="chat">
                <section className="messages">
                    {
                        this.props.log.map((message, index) => {
                            const { type, text, user, date } = message;

                            const convertDateToTime = (timestamp) => {
                                const date = new Date(timestamp);

                                return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                            };

                            return (
                                <div key={index} className="message">
                                    {
                                        type === 'service' ?
                                            <span className="service">{message.text}</span> :
                                            <span className="user">
                                                <span className="time">{`[${convertDateToTime(date)}] `}</span>
                                                <span className="name">{`${user}`}</span>
                                                <span className="text">{text}</span>
                                            </span>
                                    }
                                </div>
                            );
                        })
                    }
                </section>
                <input
                        ref="input"
                        className="text-input"
                        type="text"
                        placeholder="Введіть повідомлення.."
                        value={this.state.inputText}
                        onKeyDown={this.onKeyDown}
                        onChange={this.onChange}/>
            </section>
        );
    }
}

export default Chat;