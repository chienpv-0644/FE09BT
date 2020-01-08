const stateDefault = {
  productList: [
    { id: 1, name: "Hoc HTML", price: 2000, number: 0 },
    { id: 2, name: "Hoc CSS", price: 2000, number: 0 },
    { id: 3, name: "Hoc JS", price: 2000, number: 0 },
    { id: 4, name: "Hoc React", price: 2000, number: 0 },
    { id: 5, name: "Hoc Redux", price: 2000, number: 0 }
  ]
};

export function reducer(state = stateDefault, action) {
  console.log(state);
  let productList = state.productList;
  let new_state = { ...state };
  switch (action.type) {
    case "PLUS_PRODUCT":
      let indexUpdate = productList.findIndex(item => item.id === action.id);

      let itemUpdate = { ...new_state.productList[indexUpdate] };
      itemUpdate.number++;
      new_state.productList[indexUpdate] = itemUpdate;

      console.log("return", new_state);
      return {
        productList: [...new_state.productList]
      };
    case "SUBTRACT_PRODUCT":
      let indexUpdateSUBTRACT = productList.findIndex(
        item => item.id === action.id
      );

      let itemUpdateSUBTRACT = {
        ...new_state.productList[indexUpdateSUBTRACT]
      };
      console.log("itemUpdateSUBTRACT:", itemUpdateSUBTRACT);
      if (itemUpdateSUBTRACT.number > 0) itemUpdateSUBTRACT.number--;
      new_state.productList[indexUpdateSUBTRACT] = itemUpdateSUBTRACT;
      console.log("return", new_state.productList);
      return {
        productList: [...new_state.productList]
      };

    default:
      return state;
  }
}
