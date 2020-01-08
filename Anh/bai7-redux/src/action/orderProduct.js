export function plusProduct(id) {
  console.log("plus id", id);
  return {
    type: "PLUS_PRODUCT",
    id
  };
}
export function subtractProduct(id) {
  console.log("subtract id", id);
  return {
    type: "SUBTRACT_PRODUCT",
    id
  };
}
