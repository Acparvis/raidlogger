export const UPDATE_CONSUMABLE = Symbol("UPDATE_CONSUMABLE");

export const updateConsumable = (value) => ({
    type: UPDATE_CONSUMABLE,
    value
});
