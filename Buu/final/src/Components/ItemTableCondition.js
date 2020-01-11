import React from 'react';

class ItemTableCodition extends React.Component {
  render() {
    return (
    <td scope="col"> {this.props.arrTable.condition}</td>
    );
  }
}

export default ItemTableCodition;