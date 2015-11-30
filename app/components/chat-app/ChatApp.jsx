import io from 'socket.io-client';

import Login from 'components/login/Login';
import Chat from 'components/chat/Chat';

import './chat-app.less';

const Socket = io();

@ReactClass
class ChatApp extends React.Component {
    state = {
        logged: false,
        userName: null,
        log: []
    };

    handleLogin = (name) => {
        this.setState({
            logged: true,
            userName: name
        });

        Socket.
            on('message', this.addMessage).
            on('service-message', ({ type, user, message }) => {
                let text = '';

                switch (type) {
                    case 'logged-in':
                        text = `Користувач ${user} зайшов у чат.`;
                        break;
                    case 'logged-out':
                        text = `Користувач ${user} вийшов з чату.`;
                        break;
                    case 'online-count':
                        text = `Кількість користувачів онлайн ${message}.`;
                        break;
                    default:
                }

                if (text.length) {
                    this.addMessage({
                        type: 'service',
                        text
                    });
                }
            });

        Socket.emit('login', name);
    };

    handleMessage = (message) => {
        Socket.emit('message', message);

        this.addMessage({
            user: this.state.userName,
            text: message,
            date: Date.now()
        });
    };

    addMessage = (message) => {
        const logClone = this.state.log.slice();

        logClone.push(message);

        this.setState({
            log: logClone
        });
    };

    render() {
        const { logged, log } = this.state;

        return (
            <main>
                {
                    logged ?
                        <Chat
                                log={log}
                                onMessage={this.handleMessage}/> :
                        <Login onLogin={this.handleLogin}/>
                }
            </main>
        );
    }
}

export default ChatApp;