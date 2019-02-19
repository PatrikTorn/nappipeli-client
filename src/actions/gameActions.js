import {createActionPointers} from '../tools/actionTools';
import * as httpService from '../services/httpService'

export const types = createActionPointers([
    'UPDATE_GAME',
    'UPDATE_SOCKETS',
    'UPDATE_PLAYERS',
    'GET_PLAYERS',
    'GET_GAME',
    'PLAY'
]);

export const play = ({socketId}) => ({
    type:types.PLAY.NAME,
    payload:httpService.play({socketId})
});

export const getPlayers = () => ({
    type:types.GET_PLAYERS.NAME,
    payload:httpService.getPlayers()
});

export const getGame = () => ({
    type:types.GET_GAME.NAME,
    payload:httpService.getGame()
})


export const updateSockets = sockets => ({
    type:types.UPDATE_SOCKETS.NAME,
    payload:sockets
});

export const updateGame = game => ({
    type:types.UPDATE_GAME.NAME,
    payload:game
});

export const updatePlayers = players => ({
    type:types.UPDATE_PLAYERS.NAME,
    payload:players
});