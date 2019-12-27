import React from 'react';

class Table extends React.Component {

    renderTableHeader(arr) {
        if(arr[0]) {
            let header = Object.keys(arr[0])
            header.splice(0, 1)
            return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }
    }

    renderTableData(arr) {
        return arr.map((food) => {
            const {id, name, price } = food
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{price}</td>
                </tr>
            )
        })
    }

    render() {
        let arr = this.props.arr;
        return (
            <table className="table table-hover table-light mt-3">
                <thead><tr>{this.renderTableHeader(arr)}</tr></thead>
                <tbody>{this.renderTableData(arr)}</tbody>
            </table>
        )
    }
}

export default Table;