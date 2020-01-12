export function addProduct(idProduct){
    return {
        type: "ADD_PRODUCT",
        idProduct
    }
}

export function subProduct(idProduct){
    return {
        type: "SUB_PRODUCT",
        idProduct
    }
}