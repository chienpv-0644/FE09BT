import React from 'react';

class ItemTableName extends React.Component {
  render() {
    console.log(this.props);
    return (
    <th scope="col">{this.props.arrTable.name}</th>
    );
  }
}

export default ItemTableName;