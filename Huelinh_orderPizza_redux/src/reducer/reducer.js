let stateDefault = {
    products: [
        {id: 1, name: 'Cold cuts', price: '5', count: 0, image: 'https://i.picsum.photos/id/780/300/300.jpg'},
        {id: 2, name: 'Pepperoni', price: '10', count: 0, image: 'https://i.picsum.photos/id/781/300/300.jpg'},
        {id: 3, name: 'Feta', price: '3', count: 0, image: 'https://i.picsum.photos/id/782/300/300.jpg'},
        {id: 4, name: 'cheese', price: '7', count: 0, image: 'https://i.picsum.photos/id/783/300/300.jpg'}
    ],
    activeProduct: null
}
export function reducer(state=stateDefault, action) {
    let products = state.products;
    switch (action.type) {
        case 'ADD_PRODUCT':
            let idAdd = products.findIndex((item)=> item.id == action.idProduct)
            console.log('idAdd:',idAdd)
            let addProduct = products[idAdd];
            addProduct.count = addProduct.count + 1;
            return {
                products:[...products],
                activeProduct: {...addProduct}
            };
        case 'SUB_PRODUCT':
            let idSub = products.findIndex((item)=> item.id == action.idProduct)
            console.log('idAdd:',idSub)
            let subProduct = products[idSub];
            if(subProduct.count > 0) {
                subProduct.count = subProduct.count - 1;
            }
            return {
                products:[...products],
                activeProduct: {...subProduct}
            };
        default: return state
    }


}

