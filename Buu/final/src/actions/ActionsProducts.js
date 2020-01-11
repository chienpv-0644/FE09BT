export function addProducts(idItem) {
  return {
    type: "ADD_PRODUCTS",
    idItem
  };
}
export function removeProducts(idItem) {
  return {
    type: "REMOVE_PRODUCTS",
    idItem
  };
}
