import Cherry from '../image/Cherry.png'
import Nuts from '../image/Nuts.png'
import Orange from '../image/Orange.png'
import Strawberry from '../image/Strawberry.png'
const stateDefault = {
    todos : [
        {
            id: 1,
            name: 'Cherry',
            price: '$1.99',
            image: {Cherry},
            color: ['blue'],
            desc: 'Two Cherries',
            condition: 'Fresh'
        },
        {
            id: 2,
            name: 'Orange',
            price: '$2.99',
            image: {Orange},
            color: ['red','blue','green'],
            desc: 'Giant Orange',
            condition: 'Frozen'
        },
        {
            id: 3,
            name: 'Nuts',
            price: '$1.00',
            image: {Nuts},
            color: ['red','blue'],
            desc: 'Mixed Nuts',
            condition: 'Frozen'
        },
        {
            id: 4,
            name: 'Strawberry',
            price: '$1.49',
            image: {Strawberry},
            color: ['red','green'],
            desc: 'Just Strawberry',
            condiiton: 'Fresh'
        }
    ],
    compareItems: [
        {
            id: 1,
            name: 'Cherry',
            price: '$1.99',
            image: {Cherry},
            color: '',
            desc: 'Two Cherries',
            condition: 'Fresh'
        },
        {
            id: 2,
            name: 'Orange',
            price: '$2.99',
            image: {Orange},
            color: '',
            desc: 'Giant Orange',
            condition: 'Frozen'
        }
    ]
}
export function reducer(state = stateDefault, action){
    switch(action.type) {
        case "COMPARE":
            return state;
        case "REMOVE":
            return state;
        default: return state
    }
}