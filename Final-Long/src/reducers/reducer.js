import Cherry from '../image/Cherry.png'
import Nuts from '../image/Nuts.png'
import Orange from '../image/Orange.png'
import Strawberry from '../image/Strawberry.png'
const stateDefault = {
    items : [
        {
            id: 1,
            name: 'Cherry',
            price: '$1.99',
            image: {Cherry},
            color: ['#fa1'],
            desc: 'Two Cherries',
            condition: 'Fresh',
            action: 'Compare'
        },
        {
            id: 2,
            name: 'Orange',
            price: '$2.99',
            image: {Orange},
            color: ['red','blue','green'],
            desc: 'Giant Orange',
            condition: 'Frozen',
            action: 'Compare'
        },
        {
            id: 3,
            name: 'Nuts',
            price: '$1.00',
            image: {Nuts},
            color: ['red','blue'],
            desc: 'Mixed Nuts',
            condition: 'Frozen',
            action: 'Compare'
        },
        {
            id: 4,
            name: 'Strawberry',
            price: '$1.49',
            image: {Strawberry},
            color: ['red','green'],
            desc: 'Just Strawberry',
            condition: 'Fresh',
            action: 'Compare'
        }
    ]
}
export function reducer(state = stateDefault, action){
    switch(action.type) {
        case "COMPARE":
            const compare = state.items.map(item => {
                if(item.id === action.id) {
                    item.action = 'Remove'
                } 
                return item
            })
            console.log('compare')
            return { items: [...compare] }
        case "REMOVE":
            const remove = state.items.map(item => {
                if(item.id === action.id) {
                    item.action = 'Compare'
                } 
                return item
            })
            console.log('remove')
            return { items: [...remove] }
        default: return state
    }
}