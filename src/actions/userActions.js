import { createActionPointers } from '../tools/actionTools';
import * as httpService from '../services/httpService';
import * as gameActions from './gameActions';

export const types = createActionPointers([
    'LOGIN',
    'LOGOUT'
]);

export const login = ({ name, socketId, duckType }) => dispatch => {
    dispatch(gameActions.getPlayers());
    dispatch(gameActions.getGame());
    return dispatch({
        type: types.LOGIN.NAME,
        payload: httpService.login({ name, socketId, duckType })
    });
};

export const logout = ({ name, password }) => ({
    type: types.LOGOUT.NAME
});