import React from 'react';
import ShowProduct from './showProduct';
import CartProduct from './cartProduct';

export class AddAndShowProducts extends React.Component {

    constructor() {
        super()
        this.state = {
            listProduct: [{ name: "iPad 4 Mini", price: "500", number: 10, order: 0 },
            { name: "H&M T-Shirt White", price: "500.01", number: 0, order: 0 },
            { name: "Charli XCX - Sucker", price: "500.01", number: 25, order: 0 },
            { name: "Rice VN", price: "200.01", number: 0, order: 0 },
            { name: "Car VN", price: "43000.01", number: 20, order: 0 },
            { name: "Pho Noodle VN", price: "7", number: 300, order: 0 }],
            priceTotal: 0
        }
    }

    updateNumberProduct = (e, indexOfProductIntoList) => {
        let objectProduct = this.state.listProduct[indexOfProductIntoList]
        let numberOfPeoduct = objectProduct.number - objectProduct.order;

        if (indexOfProductIntoList !== -1) {
            if (numberOfPeoduct > 0) {
                objectProduct.order++;
                this.caculatePriceTotal();
            } 
        }
    }

    handlerClick = (e) => {
        let arrayNameProduct = this.state.listProduct.map(({ name }) => name)
        let indexOfProductIntoList = arrayNameProduct.indexOf(e.target.dataset.nameProduct);

        this.updateNumberProduct(e, indexOfProductIntoList)
        this.setState({})
    }


    caculatePriceTotal = () => {
        let arrayOrderProduct = this.state.listProduct.map(({ order }) => order);
        let arrayPriceProduct = this.state.listProduct.map(({ price }) => price);
        let sum = (arrayOrderProduct.map((item, index) =>
            Number(item) * Number(arrayPriceProduct[index]))).reduce((acc, curr) =>
                acc + curr).toFixed(2)
        this.state.priceTotal = sum
    }

    formatUsd = (value) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);

    handlerCheckOutClick = () => {
        console.log(this.state.listProduct);
        this.state.listProduct.map(item => item.order = 0);
        this.caculatePriceTotal();
        this.setState({});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="border-bottom border-black p-3">Shopping Card Example</h1>
                    <div className="col-12">
                        <h3>Products</h3>
                    </div>
                    <div className="row pb-5 border-bottom">
                        {this.state.listProduct.map((item, index) =>
                            <ShowProduct key={"ShowProduct" + index} nameProduct={item.name} priceProduct={this.formatUsd(item.price)}
                                nuberOfProduct={item.number - item.order} handlerClick={this.handlerClick} />
                        )}
                    </div>
                    <div className="row pb-5 mt-3 border-bottom">
                        <div className="col-6 mx-auto">
                            <h3>Your Card</h3>
                            <h5>Total: {this.formatUsd(this.state.priceTotal)}</h5>
                            <button type="button" class="btn btn-outline-primary" onClick={this.handlerCheckOutClick}>Check out</button>
                        </div>
                        <div className="col-6 mx-auto">
                            <div className="row">
                                {
                                    this.state.listProduct.filter(listProduct =>
                                        listProduct.order > 0).map((item, index) =>
                                            <CartProduct key={"CartProduct" + index} nameProduct={item.name}
                                                priceProduct={this.formatUsd(item.price)} nuberOfProduct={item.order} />
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAndShowProducts;
