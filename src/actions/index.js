import * as gameActions from './gameActions';
import * as userActions from './userActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

export const actions = {
    game:gameActions,
    user:userActions
};

export const connector = (state, acts) => {
    return connect(
        state,
        dispatch => () => bindActionCreators({
            ...acts
        }, dispatch)
    );
}