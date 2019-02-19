import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import userReducer from './userReducer';
import io from 'socket.io-client';
import {ENDPOINT} from '../constants'
const socketReducer = io(ENDPOINT);

const rootReducer = combineReducers({
    game: gameReducer,
    user: userReducer,
    socket: () => socketReducer
})

export default rootReducer;
