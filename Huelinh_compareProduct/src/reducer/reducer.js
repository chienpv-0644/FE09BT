let stateDefault = {
    products: [
        {id: 1, name: 'cherry', des: 'Two cherries', price: 5, isCompare: false, image:'http://react-compare-app.surge.sh/images/Cherry.png', color: ['red', 'green', 'blue'], condition: 'Fresh'},
        {id: 2, name: 'orange', des: 'Giant orange', price: 7, isCompare: false, image:'http://react-compare-app.surge.sh/images/Orange.png', color: ['green', 'blue'], condition: 'Frozen'},
        {id: 3, name: 'apple', des: 'Mixed nuts', price: 8, isCompare: false, image:'http://react-compare-app.surge.sh/images/Nuts.png', color: ['red'], condition: 'Frozen'},
        {id: 4, name: 'strawberry', des: 'Just strawberry', price: 9, isCompare: false, image:'http://react-compare-app.surge.sh/images/Strawberry.png', color: ['blue','pink'], condition: 'Fresh'},
    ],
    compares: [

    ]
}
export function reducer(state=stateDefault, action) {
    let products = state.products;
    let compares = state.compares;
    console.log('product:', products)
    switch (action.type) {
        case 'COMPARE_PRODUCT':
            let idCompare = products.findIndex(item=> item.id === action.idProduct)
            let itemUpdate = {...products[idCompare]};
            itemUpdate.isCompare = !itemUpdate.isCompare
            products[idCompare]=itemUpdate;
            compares = products.filter(item=> item.isCompare);
            return {
                products: [...products],
                compares: [...compares]
            }
        default: return state
    }
}