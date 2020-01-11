import React from 'react';

class ItemTablePrice extends React.Component {
  render() {
    return (
    <td scope="col"> ${this.props.arrTable.price}</td>
    );
  }
}

export default ItemTablePrice;