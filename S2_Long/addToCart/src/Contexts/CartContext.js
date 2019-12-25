import React from 'react'
export const CartContext = React.createContext();
export class CartProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
    }
    addToCart = (product) => {
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        })
    }
    yourCart = () => {
        const listCart = this.state.cartItems.reduce((obj, key) => {
            if(!obj[key]) {
                obj[key] = 1
            }
            else obj[key]++
            return obj
        },{})
        console.log(listCart)
    }
    render() {
        console.log(this.state.cartItems)
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart,
                yourCart: this.yourCart
            }}>
                { this.props.children }
            </CartContext.Provider>
        )
    }
}