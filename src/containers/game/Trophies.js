import React, { Component } from 'react';
import { connector } from '../../actions';
import { List } from '../../components';

const connect = connector(
    state => ({
        games: state.game.games,
        players: state.game.players
    })
);

class Trophies extends Component {
    render() {
        const { players } = this.props;
        return (
            <div>
                <List
                    data={
                        this.props.games
                            .filter(g => g.win > 0)
                            .reduce((acc, g) => ([...acc,
                            [
                                {
                                    type: 'icon',
                                    duckType: players.find(p => p.name === g.name).duckType
                                },
                                g.name,
                                g.win,
                                g.counter
                            ]
                            ]), [])
                    }
                    headings={['Laji', 'Nimi', 'Donitseja', 'Laskuri']}
                />
            </div>
        );
    }
}

export default connect(Trophies);
