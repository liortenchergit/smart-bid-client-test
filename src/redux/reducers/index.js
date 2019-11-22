
import consts from '../redux.consts';

const initialState = {
    transactions: [
        {
            info1: 1,
            info2: "Security doors",
            info3: '16 Jun 2014',
            info4: '483$'
        },
        {
            info1: 2,
            info2: "Wardsrobes",
            info3: '16 Jun 2014',
            info4: '483$'
        },
        {
            info1: 3,
            info2: "Set of tools",
            info3: '16 Jun 2014',
            info4: '483$'
        },
        {
            info1: 4,
            info2: "Panoramic pictures",
            info3: '16 Jun 2014',
            info4: '483$'
        },
        {
            info1: 5,
            info2: "Phones",
            info3: '16 Jun 2014',
            info4: '483$'
        },
        {
            info1: 6,
            info2: "Monitors",
            info3: '16 Jun 2014',
            info4: '483$'
        },
    ],
    markers: [
        {
            name: 'United States of America',
            volume: 1200
        },
        {
            name: 'Brazil',
            volume: 650
        },
        {
            name: 'Maxico',
            volume: 120
        },
        {
            name: 'Canada',
            volume: 150
        },
        {
            name: 'Australia',
            volume: 15000
        },
        {
            name: 'England',
            volume: 15000
        }
    ]
};

export default function appReducer(state = initialState, { type, payload }) {
    switch (type) {
        case consts.TEST:
            return state;
        default:
            return state;
    }
};