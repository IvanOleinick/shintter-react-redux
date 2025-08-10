import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userAction.js";


export const userReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AVATAR: {
            return {...state, avatar: action.payload || state.avatar};
        }
        case CHANGE_NAME: {
            return {...state, name: action.payload || state.name};
        }
        default:
            return state;
    }
}