import React from 'react';
import CountAmount from "../countAmount/countAmount";


class Card extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            bought:  1,
            available: this.props.available
        }
    }

    onChangeInput(e) {
        let input = e.target.value
        console.log('check',input <= this.props.available)
        let value = input <= this.props.available ? input : this.props.available;
        console.log('value', value)
        this.setState({
            bought: value < 1 ? '' : value,
        })

    }

    onBlur(e) {
        console.log('focusout',e.target.value);
        if(e.target.value === '') {
            this.setState({
                bought: 1,
            })
        }

    }

    onClickSubButton() {
        if(this.state.bought > 1) {
            this.setState((prevState)=>({
                bought: prevState.bought - 1,
            }))
        }
    }

    onClickAddButton() {
        if(this.state.bought < this.props.available) {
            this.setState((prevState)=>({
                bought: prevState.bought + 1,
            }))
        }
    }

    onClickAddCart(e) {
        this.props.addCart(e, this.state.bought)
    }

    render() {
        console.log('bought', this.state.bought)
        console.log('available', this.state.available)
        return (
            <div className="col-md-4">
                <div className="card mb-2">
                    <img src={this.props.image} alt={this.props.alt} className="card-img"/>
                    <div className="card-body">
                        <p className="card-text">
                            <strong>Name:</strong> {this.props.name} <br/>
                            <strong>Price:</strong> {this.props.price} VND <br/>
                            <strong>Available:</strong> {this.props.available}
                        </p>
                    </div>
                    <div className="card-footer">
                        <span>
                            <CountAmount bought={this.state.bought}
                                         onChange={this.onChangeInput.bind(this)}
                                         onBlur={this.onBlur.bind(this)}
                                         onClickSub={this.onClickSubButton.bind(this)}
                                         onClickAdd={this.onClickAddButton.bind(this)}></CountAmount>
                            <button id={this.props.id} className="btn btn-dark ml-2" onClick={this.onClickAddCart.bind(this)}>Add to cart</button>
                        </span>

                    </div>
                </div>
            </div>
        );
    }
}

export default Card;