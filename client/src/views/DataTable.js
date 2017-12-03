import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

const options = {};

const cellEditProp = {
  mode: 'dbclick'
};
// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
};

class DataTable extends Component {
  render() {
    return (<BootstrapTable data={products} deleteRow={true} selectRow={selectRowProp} cellEdit={cellEditProp} insertRow={true} options={options}>
      <TableHeaderColumn dataField='id' hidden={true} isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
    </BootstrapTable>);
  }
}

export default DataTable;