export const ADD_CONSUMABLE = Symbol("ADD_CONSUMABLE");

export const addConsumable = (value) => ({
    type: ADD_CONSUMABLE,
    value
});

export const UPDATE_CONSUMABLE = Symbol("UPDATE_CONSUMABLE");

export const updateConsumable = (value) => ({
    type: UPDATE_CONSUMABLE,
    value
});
