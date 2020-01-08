export function compareItem(id){
    return {
        type: "COMPARE",
        id
    }
}
export function removeItem(id) {
    return { 
        type: "REMOVE",
        id
    }
}