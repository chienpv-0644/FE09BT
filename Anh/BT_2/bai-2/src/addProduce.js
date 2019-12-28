import React from 'react';
import ForminputProduct from './forminputProduct'
import SearchForm from './searchForm'
import RenderProduce from './renderProduce'

export class AddProduce extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            price: "",
            dataSearch: "",
            listProduce: [{ name: "Xôi", price: 10000 }, { name: "Bánh", price: 50000 }, { name: "Cháo", price: 40000 }, { name: "Cơm", price: 40000 }],
        }
    }

    handlerChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // factory function?
    addNewlement = () => {
        this.state.listProduce.push({
            name: this.state.name,
            price: this.state.price
        })
        
        // this.setState({
        //     listProduce: [
        //         ...this.state.listProduce,
        //         {
        //             name: this.state.name,
        //             price: this.state.price
        //         }
        //     ]
        // })
    }

    handlerClick = (e) => {
        this.addNewlement()
        this.setState({
            name: "",
            price: ""
        })
    }

    handlerChangeSearch = (e) => {
        this.setState({
            dataSearch: e.target.value
        });
    }

    handClickSearch = () => {
        this.setState({
            listProduceSearch: this.state.dataSearch
        });
    }

    render() {
        return (
            <div>
                <div className="mx-auto col-md-6 p-3 text-center">
                    <ForminputProduct name={this.state.name} price={this.state.price} handlerChangeInput={this.handlerChangeInput} handlerClick={this.handlerClick} />
                </div>
                <SearchForm handlerChangeSearch={this.handlerChangeSearch} />
                <div>
                    <RenderProduce data={this.state.listProduce} dataSearch={this.state.dataSearch}/>
                </div>
            </div>

        );
    }
}

export default AddProduce;
