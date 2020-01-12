import React from 'react';
import Image from './image'
import OrderContext from '../context'

class ShowImage extends React.Component {
    render() {
        let listProductCounted = this.context.products.filter(item=> item.count > 0)
        console.log('listProductCounted',listProductCounted)
        let listImage = listProductCounted.map((item, index)=> {
            return <Image key={index + 1} src={item.image} alt={item.name}/>
        }
        )
        console.log('listImage',listImage)
        return (
            <div className="col-7">
                <p>Your pizza:</p>
                <div className="row no-gutters">
                    {listImage}
                </div>
            </div>

        )
    }
}

ShowImage.contextType = OrderContext
export default ShowImage