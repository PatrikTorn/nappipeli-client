import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { actions, connector } from '../../actions';
import Game from '../game';
import Login from '../login';
import './App.css';

const connect = connector(
    state => ({
        logged: state.user.logged,
        socket: state.socket,
        name: state.user.data.name,
        duckType: state.user.data.duckType,
        socketId: state.socket.id
    }),
    {
        updateSockets: actions.game.updateSockets,
        updateGame: actions.game.updateGame,
        updatePlayers: actions.game.updatePlayers,
        login: actions.user.login
    }
)

class App extends Component {
    constructor(props) {
        super(props);
        // Socket listeners
        this.props.socket.on('get sockets', sockets => this.props.updateSockets(sockets))
        this.props.socket.on('get game', game => this.props.updateGame(game))
        this.props.socket.on('get players', players => this.props.updatePlayers(players))
        this.props.socket.on('connect', () => {
            // Reconnection
            if (this.props.logged)
                this.props.login({
                    name: this.props.name,
                    duckType: this.props.duckType,
                    socketId: this.props.socket.id
                })
        })

    }
    render() {
        return (

            <div className="wrapper">
                <ToastContainer
                    style={{ zIndex: 100000 }}
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover={false}
                />
                {
                    this.props.logged ? <Game /> : <Login />
                }
            </div>
        )
    }
}

export default connect(App);
