import React, { Component } from 'react';
import { connector } from '../../actions';
import { Icon } from '../../components';
import './Game.css';

const connect = connector(
    state => ({
        duckType: state.user.data.duckType,
        money: state.user.data.money,
        name: state.user.data.name
    })
)

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <Icon type={this.props.duckType} /> {this.props.name}
                </div>
                <div className="header-center">
                    Duck<b>Be</b> <div className="logo"></div>Feeder
                    </div>
                <div className="header-right">
                    <div className="doughnuts"></div> {this.props.money}
                </div>
            </div>
        )
    }
}

export default connect(Header);
