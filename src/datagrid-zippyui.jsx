//var React = require('react')
//var DataGrid = require('react-datagrid')
//var ReactDOM = require('react-dom')

import React from 'react';
import ReactDOM from 'react-dom';
import DataGrid from 'react-datagrid';


var data = [
  { id: '1', firstName: 'John', lastName: 'Bobson'},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
]
var columns = [
  { name: 'firstName'},
  { name: 'lastName'}
]

class App extends React.Component {
	render() {
		return <DataGrid idProperty="id" dataSource={data} columns={columns} />
	}
}

ReactDOM.render(<App/>, document.getElementById('table'));