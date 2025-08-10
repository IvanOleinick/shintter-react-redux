import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userAction.js";

const defaultState = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar};
        case CHANGE_NAME:
            return {...state, name: action.payload || state.name};
        default:
            return state;
    }
}