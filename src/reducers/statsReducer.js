import {CHANGE_STATS} from "../actions/statsAction.js";

//     type State = {
//         followers: number,
//         following: number
//     }

export const statsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_STATS: {
            const res = state[action.payload.statsType] + action.payload.sum;
            return {...state, [action.payload.statsType]: res >= 0 ? res : 0};
        }
        default:
            return state;
    }
}