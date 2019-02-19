import React, { Component } from 'react';
import { actions, connector } from '../../actions';
import { List } from '../../components';

const connect = connector(
    state => ({
        players: state.game.players
    })
)

class Players extends Component {
    render() {
        return (
            <div>
                <List
                    data={
                        this.props.players
                            .sort((a, b) => b.money - a.money)
                            .reduce((acc, p) => ([...acc, [
                                {type:'icon', duckType:p.duckType}, p.name, p.money]
                            ]), [])
                    }
                    headings={['Laji', 'Nimi', 'Donitseja']}
                />
            </div>
        );
    }
}

export default connect(Players);
