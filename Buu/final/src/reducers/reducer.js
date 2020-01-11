const stateDefault = {
  products: [
    {
      id: 1,
      name: "Cherry",
      price: "1.99",
      image: "http://react-compare-app.surge.sh/images/Cherry.png",
      present: "Two Cherries",
      Colors: ["#ff715b", "#48cfad", "#0197f6"],
      condition: "Fresh"
    },
    {
      id: 2,
      name: "Orange",
      price: "2.99",
      image: "http://react-compare-app.surge.sh/images/Orange.png",
      present: "Giant Orange",
      Colors: ["#ff715b", "#48cfad"],
      condition: "Frozen"
    },
    {
      id: 3,
      name: "Nuts",
      price: "1.00",
      image: "http://react-compare-app.surge.sh/images/Nuts.png",
      present: "Mixed Nuts",
      Colors: ["#ff715b"],
      condition: "Frozen"
    },
    {
      id: 4,
      name: "Strawberry",
      price: "1.49",
      image: "http://react-compare-app.surge.sh/images/Strawberry.png",
      present: "Just Strawberry",
      Colors: ["#0197f6"],
      condition: "Fresh"
    }
  ],
  arrTable: []
};

export function reducer(state = stateDefault, action) {
  let newState = { ...state };
  switch (action.type) {
    case "ADD_PRODUCTS":
      let products = newState.products;
      let index = products.findIndex(item => item.id == action.idItem);
      newState.arrTable = [...newState.arrTable, products[index]];
      return newState;
    case "REMOVE_PRODUCTS":
      let arr = newState.arrTable;
      let index1 = arr.findIndex( item => item.id == action.idItem);
      arr.splice(index1, 1);
      newState.arrTable = [...arr]
      return newState;
    default:
      return state;
  }
}
