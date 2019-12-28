import React from 'react';
import CardProduct from './CardProduct'

export class RenderProduce extends React.Component {
    render() {
        let data = this.props.data
        let dataSearch = this.props.dataSearch
        return (
            <div className="container my-5">
                <div className="row">
                    {dataSearch === "" && data.map((item, index) =>
                        <CardProduct key={"CardProduct" + index} nameProduce={item.name} priceProduce={Number(item.price).toLocaleString('vi', { style: 'currency', currency: 'VND' })} />
                    )
                    }
                    {dataSearch !== "" && data.filter(data =>
                        data.name.toUpperCase().indexOf(dataSearch.toUpperCase()) !== -1).map((item, index) =>
                            <CardProduct key={"CardProduct" + index} nameProduce={item.name} priceProduce={Number(item.price).toLocaleString('vi', { style: 'currency', currency: 'VND' })} />
                        )
                    }
                    {dataSearch !== "" && data.filter(data =>
                        data.name.toUpperCase().indexOf(dataSearch.toUpperCase()) !== -1).length === 0 && <h1>Không tìm thấy gì</h1>
                    }
                </div>
            </div>
        );
    }
}

export default RenderProduce;
