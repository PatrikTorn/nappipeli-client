import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { actions, connector } from '../../actions';
import { Icon } from '../../components';
import './Game.css';
import Header from './Header';
import Players from './Players';
import Trophies from './Trophies';

const connect = connector(
    state => ({
        socket: state.socket,
        sockets: state.game.sockets,
        nextWin: state.game.nextWin,
        loading: state.game.loading
    }),
    {
        play: actions.game.play
    }
)

class Game extends Component {

    state = {
        showPlayers: false,
        showTrophies: false
    }

    play() {
        this.props.play({ socketId: this.props.socket.id })
            .then(({ action }) => this.notifyWin(action.payload.data))
            .catch(e => console.log(e));
    }

    notifyWin({ money }) {
        if (money > 0)
            toast.success("Onneksi olkoon! Voitit " + money + " donitsia!");
    }
    togglePlayers() {
        this.setState({ showPlayers: !this.state.showPlayers });
    }
    toggleTrophies() {
        this.setState({ showTrophies: !this.state.showTrophies });
    }

    render() {
        const buttonStyle = { opacity: this.props.loading ? 0.7 : 1 };
        return (
            <div className="container">
                <Modal isOpen={this.state.showPlayers} toggle={() => this.togglePlayers()}>
                    <ModalHeader toggle={() => this.togglePlayers()}>Pelaajat</ModalHeader>
                    <ModalBody>
                        <Players />
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.showTrophies} toggle={() => this.toggleTrophies()}>
                    <ModalHeader toggle={() => this.toggleTrophies()}>Voitot</ModalHeader>
                    <ModalBody>
                        <Trophies />
                    </ModalBody>
                </Modal>

                <Header />
                <div className="content">
                    <div className="box-left">
                        <div className="menu-item" onClick={() => this.togglePlayers()}>
                            <i className="fa fa-chart-pie"></i>
                        </div>
                        <div className="menu-item" onClick={() => this.toggleTrophies()}>
                            <i className="fa fa-trophy"></i>
                        </div>
                    </div>
                    <div className="game">
                        {this.props.nextWin && <div className="next-win">Seuraava voitto <b>{this.props.nextWin}</b> päässä</div>}
                        <div
                            className="button"
                            style={buttonStyle}
                            onClick={() => !this.props.loading && this.play()}
                        ></div>
                    </div>
                    <div className="box-right">
                        <div className="menu-item">
                            <i className="fa fa-users"></i>
                        </div>
                        {this.props.sockets.map((socket, i) => <Icon key={i} name={socket.name} type={socket.duckType} />)}
                    </div>
                </div>
                <div className="footer">&copy; Patrik Torn 2019</div>
            </div>
        )
    }
}

export default connect(Game);
