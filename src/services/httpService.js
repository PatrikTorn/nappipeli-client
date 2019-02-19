import axios from 'axios';
import {ENDPOINT} from '../constants';

export const login = ({name, socketId, duckType}) => {
    return axios.post(`${ENDPOINT}/login`, JSON.stringify({name, socketId, duckType}), {
        headers:{
            'Content-Type':'application/json'
        }
    })
};

export const play = ({socketId}) => {
    return axios.post(`${ENDPOINT}/play`, JSON.stringify({socketId}), {
        headers:{
            'Content-Type':'application/json'
        }
    })
};

export const getPlayers = () => {
    return axios.get(`${ENDPOINT}/players`)
};


export const getGame = () => {
    return axios.get(`${ENDPOINT}/game`)
};