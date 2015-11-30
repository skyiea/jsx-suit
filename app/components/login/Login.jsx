import './login.less';

@ReactClass
class Login extends React.Component {
    static propTypes = {
        onLogin: React.PropTypes.func.isRequired
    };

    state = {
        name: ''
    };

    handleKeyDown = (e) => {
        const { name } = this.state;

        if (e.keyCode === 13 && name.length) {
            this.setState({
                name: ''
            });

            this.props.onLogin(name);
        }
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    componentDidMount() {
        this.refs.input.focus();
    }

    render() {
        return (
            <div className="login">
                <h1>Авторизація</h1>
                <input
                        ref="input"
                        type="text"
                        placeholder="Введіть своє ім'я.."
                        value={this.state.name}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Login;