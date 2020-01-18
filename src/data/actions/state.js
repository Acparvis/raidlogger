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

export const DELETE_CONSUMABLE = Symbol("DELETE_CONSUMABLE");

export const deleteConsumable = (value) => ({
    type: DELETE_CONSUMABLE,
    value
});

export const CHANGE_RAIDS = Symbol("CHANGE_RAIDS");

export const changeRaids = (value) => ({
    type: CHANGE_RAIDS,
    value
});

export const ACTIVATE_TEMPLATE = Symbol("ACTIVATE_TEMPLATE");

export const activateTemplate = (index) => ({
    type: ACTIVATE_TEMPLATE,
    index
});
