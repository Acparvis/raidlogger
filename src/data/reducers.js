import initial from "./initial";
import {Map, fromJS, toJS} from 'immutable';
import { //Imports the actions to be fed into the reducer switch statement.
    UPDATE_CONSUMABLE
} from "./actions/state";


const updateConsumable = (state, {value}) => {

    //retrieves consumable by index then updates into new state object
    let consumables = state.consumables;

    let consumable = consumables[value.index];

    consumable.numberPerRaid = +value.quantity;
    consumable.expectedPrice = +value.price;

    let updatedConsumables = consumables.map((con, index) => {
        if (index === value.index) {
            con.numberPerRaid = +value.quantity;
            con.expectedPrice = +value.price;
        }

        return con;
    })

    return {
        ...state,
        consumables : [
            ...updatedConsumables
        ]
    }

}

// Reducer switch statement.
export default(state = initial, action) => {
    switch (action.type) {
        case UPDATE_CONSUMABLE:
            return updateConsumable(state, action);
        default:
            return state;
    }
};