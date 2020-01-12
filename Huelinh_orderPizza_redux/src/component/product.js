import React from 'react';
import CountAmount from './countAmount'

class Product extends React.Component {
    render() {
        let {id, name, price, count, image} = this.props.product;
        return (
            <tr>
                <td className="row no-gutters p-2">
                    <span className="col-6"><div>{name}</div><div>{price}</div></span>
                    <CountAmount id={id} count={count}/>
                </td>
            </tr>
        )
    }
}

export default Product