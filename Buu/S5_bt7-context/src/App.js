import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pizza from "./Components/Pizza";
import PizzaContext from "./Context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: [
        {
          id: 1,
          name: "Cold cuts",
          price: "5",
          amount: 0,
          image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI5MzI0fQ&auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: 2,
          name: "Pepperoni",
          price: "3.5",
          amount: 0,
          image:
            "https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80  "
        },
        {
          id: 3,
          name: "Feta",
          price: "2.5",
          amount: 0,
          image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=2235&q=80"
        },
        {
          id: 4,
          name: "Mozzarella",
          price: "1.5",
          amount: 0,
          image:
            "https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
        },
        {
          id: 5,
          name: "Swiss cheese",
          price: "3",
          amount: 0,
          image:
            "https://images.unsplash.com/photo-1505934558824-08367d002416?ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
        },
        {
          id: 6,
          name: "Spices",
          price: "0.5",
          amount: 0,
          image:
            "https://images.unsplash.com/photo-1514852451047-f8e1d1cd9b64?ixlib=rb-1.2.1&auto=format&fit=crop&w=2312&q=80"
        },
        {
          id: 7,
          name: "Vegetables",
          price: "1.25",
          amount: 0,
          image:
            "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&auto=format&fit=crop&w=2536&q=80"
        }
      ],
      total: "0.00",
      arrImage: []
    };
  }
  render() {
    return (
      <PizzaContext.Provider
        value={{
          pizza: this.state.pizza,
          total: this.state.total,
          handlerIncreasePizza: id => {
            let newState = this.state;
            let tempt = 0;
            let index = newState.pizza.findIndex(item => item.id == id);
            newState.pizza[index].amount += 1;
            for (let i = 0; i < newState.pizza.length; i++) {
              if (newState.pizza[i].amount > 0) {
                tempt +=
                  newState.pizza[i].amount *
                  Number(newState.pizza[i].price, 10);
              }
              newState.total = tempt;
              this.setState({
                pizza: newState.pizza,
                total: newState.total
              });
            }
          },
          handlerReductionPizza: id => {
            let newState = this.state;
            let tempt1 = 0;
            let index1 = newState.pizza.findIndex(item => item.id == id);
            newState.pizza[index1].amount -= 1;
            for (let i = 0; i < newState.pizza.length; i++) {
              if (newState.pizza[i].amount > 0) {
                tempt1 +=
                  newState.pizza[i].amount *
                  Number(newState.pizza[i].price, 10);
              }
              newState.total = tempt1;
            }
            this.setState({
              pizza: newState.pizza,
              total: newState.total
            });
          },
          handlerResetPizza: () => {
            let newState = this.state;
            for (let z = 0; z < newState.pizza.length; z++) {
              newState.pizza[z].amount = 0;
            }
            newState.total = "0.00";
            this.setState({
              pizza: newState.pizza,
              total: newState.total
            });
          }
        }}
      >
        <div>
          <Pizza />
        </div>
      </PizzaContext.Provider>
    );
  }
}
export default App;

// let newState = { ...state };
// switch (action.type) {
//   case "INCREASE":
//     let tempt = 0;
//     let index = newState.pizza.findIndex(item => item.id == action.idItem);
//     newState.pizza[index].amount += 1;
//     for (let i = 0; i < newState.pizza.length; i++) {
//       if (newState.pizza[i].amount > 0) {
//         tempt +=
//           newState.pizza[i].amount * Number(newState.pizza[i].price, 10);
//       }
//       newState.total = tempt;
//     }
//     console.log(newState.arrImage)
//     return newState;
//   case "REDUCTION":
//     let tempt1 = 0;
//     let index1 = newState.pizza.findIndex(item => item.id == action.idItem);
//     newState.pizza[index1].amount -= 1;
//     for (let i = 0; i < newState.pizza.length; i++) {
//       if (newState.pizza[i].amount > 0) {
//         tempt1 +=
//           newState.pizza[i].amount * Number(newState.pizza[i].price, 10);
//       }
//       newState.total = tempt1;
//     }
//     return newState;
//   case "RESET":
//     let stateReset = { ...state };
//     console.log(stateReset);
//     for (let z = 0; z < stateReset.pizza.length; z++) {
//       stateReset.pizza[z].amount = 0;
//     }
//     stateReset.total = "0.00";
//     return stateReset;
