import {Map, List} from "immutable";

// Initial state, once a player has entered their info will be overwritten.
export default Map({
    consumables : List([
        { name: "item1", expectedPrice: 10, numberPerRaid: 5},
        { name: "item2", expectedPrice: 0.18, numberPerRaid: 15}
    ]),
    raidsPerWeek: 3,
    storage: false,
});