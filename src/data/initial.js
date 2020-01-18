// Initial state, once a player has entered their info will be overwritten.
export default {
    consumables: [],
    templates: [
        {
            class: "Mage",
            spec: "DPS",
            color: "blue",
            consumables: [
                {
                    name: 'Greater Arcane Elixir',
                    expectedPrice: 4,
                    numberPerRaid: 4,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Runn Tum Tuber Surprise',
                    expectedPrice: 4,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Warrior",
            spec: "Tank",
            color: "gray",
            consumables: [
                {
                    name: 'Warrior item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Warrior Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Warrior",
            color: "gray",
            spec: "DPS",
            consumables: [
                {
                    name: 'Warrior item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Warrior Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Druid",
            spec: "Tank",
            color: "orange",
            consumables: [
                {
                    name: 'Druid item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Druid Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Druid",
            spec: "Healer",
            color: "orange",
            consumables: [
                {
                    name: 'Druid item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Druid Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Hunter",
            spec: "DPS",
            color: "teal",
            consumables: [
                {
                    name: 'Hunter item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Hunter Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Priest",
            spec: "Healer",
            color: "indigo",
            consumables: [
                {
                    name: 'Priest item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Priest Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Rogue",
            spec: "DPS",
            color: "yellow",
            consumables: [
                {
                    name: 'Rogue item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Rogue Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Shaman",
            spec: "Healer",
            color: "blue",
            consumables: [
                {
                    name: 'Shaman item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Shaman Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
        {
            class: "Warlock",
            spec: "DPS",
            color: "purple",
            consumables: [
                {
                    name: 'Warlock item 1',
                    expectedPrice: 5,
                    numberPerRaid: 2,
                    id: 1,
                    currentStock: 0
                },
                {
                    name: 'Warlock Item 2',
                    expectedPrice: 8,
                    numberPerRaid: 4,
                    id: 2,
                    currentStock: 0
                }
            ]
        },
    ],

    raidsPerWeek: 3,
    storage: false,
};