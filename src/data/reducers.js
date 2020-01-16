import initial from "./initial";
import {Map, fromJS, toJS} from 'immutable';
import { //Imports the actions to be fed into the reducer switch statement.
    UPDATE_CONSUMABLE
} from "./actions/state";

// const updateConsumable = (state, {value}) => state.update('consumables', c => {
//     return c.push(Map({ value }))
// });

const updateConsumable = (state, {value}) => console.log({ state, value });

// Reducer switch statement.
export default(state = initial, action) => {
    switch (action.type) {
        case UPDATE_CONSUMABLE:
            return updateConsumable(state, action);
        default:
            return state;
    }
};