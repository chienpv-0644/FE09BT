const stateDefault = {
  productList: [
    {
      id: 1,
      name: "Orange",
      price: 2.99,
      Colors: ["#33d820", "#d5d820"],
      Condition: "Frozen",
      title: "Giant Orange",
      image: "http://react-compare-app.surge.sh/images/Orange.png",
      compare: false
    },
    {
      id: 2,
      name: "Cherry",
      price: 1.99,
      Colors: ["#d21d1d", "#0062cc", "#33d820"],
      Condition: "Fresh",
      title: "Two Cherries",
      image: "http://react-compare-app.surge.sh/images/Cherry.png",
      compare: false
    },
    {
      id: 3,
      name: "Nuts",
      price: 1.0,
      Colors: ["#d21d1d"],
      Condition: "Frozen",
      title: "Mixed Nuts",
      image: "http://react-compare-app.surge.sh/images/Nuts.png",
      compare: false
    },
    {
      id: 4,
      name: "Strawberry",
      price: 1.49,
      Colors: ["#33d820"],
      Condition: "Fresh",
      title: "Just Strawberry",
      image: "http://react-compare-app.surge.sh/images/Strawberry.png",
      compare: false
    }
  ],
  productListCompare: []
};
export function reducer(state = stateDefault, action) {
  let productList = state.productList;
  let productListCompare;
  let new_state = { ...state };
  switch (action.type) {
    case "CLICK_COMPARE":
      let indexCompare = productList.findIndex(item => item.id == action.id);
      let itemCompare = { ...productList[indexCompare] };
      itemCompare.compare = !itemCompare.compare;
      productList[indexCompare] = itemCompare;
      productListCompare = productList.filter(item => item.compare);
      return {
        productList: [...new_state.productList],
        productListCompare: [...productListCompare]
      };
    default:
      return state;
  }
}
