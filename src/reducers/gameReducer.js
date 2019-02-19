import {types} from '../actions/gameActions';

let initialState = {
    sockets:[],
    counter:0,
    games:[],
    nextWin:null,
    players:[]
};

const gameReducer = (state = initialState, {payload, type}) => {
    switch(type) {

        case types.PLAY.PENDING:
        case types.GET_PLAYERS.PENDING:
        case types.GET_GAME.PENDING:
            return {...state, loading:true}

        case types.PLAY.REJECTED:
        case types.GET_PLAYERS.REJECTED:
        case types.GET_GAME.REJECTED:
            return {...state, loading:false}
            
        case types.PLAY.FULFILLED:
            return {...state, loading:false, nextWin:payload.data.nextWin}
            
        case types.GET_PLAYERS.FULFILLED:
            return {...state, players:payload.data, loading:false}

        case types.GET_GAME.FULFILLED:
            return {...state, games:payload.data.games, counter:payload.data.counter, loading:false}

        case types.UPDATE_SOCKETS.NAME:
            return {...state, sockets:payload}

        case types.UPDATE_PLAYERS.NAME:
            return {...state, players:payload}

        case types.UPDATE_GAME.NAME:
            return {...state, counter:payload.counter, games:payload.games}
        default:
            return state;
    }
}

export default gameReducer;