import {types} from '../actions/userActions';
import {types as gameTypes} from '../actions/gameActions';
let initialState = {
    loading:false,
    logged:false,
    data:{}
};

const gameReducer = (state = initialState, {payload, type}) => {
    switch(type) {
        case types.LOGIN.PENDING:
            return {...state, loading:true}

        case types.LOGIN.REJECTED:
            return {...state, loading:false}

        case gameTypes.PLAY.FULFILLED:
            return {...state, data:{...state.data, money:state.data.money + payload.data.money}}

        case types.LOGIN.FULFILLED:
            return {...state, logged:true, loading:false, data:payload.data}
        default:
            return state;
    }
}

export default gameReducer;