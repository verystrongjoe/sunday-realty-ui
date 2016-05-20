import React from 'react';
import ReactDOM from 'react-dom';
import DataGrid from 'react-datagrid';


//var React    = require('react')
//var ReactDOM = require('react-dom')
//var DataGrid = require('react-datagrid')
//var data     = require('../data/1000') //a data array


 data = [
		{ id: 0, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'},
		{ id: 1, index: 2, firstName: 'Uk', city: 'Korea', email: 'verystrongjoe@gmail.com'},
 ]

var columns = [
	{ name: 'index', title: '#', width: 50 },
	{ name: 'firstName' },
	{ name: 'lastName'  },
	{ name: 'city' },
	{ name: 'email' }
]

var App = React.createClass({
	render: function(){
		return <DataGrid
			idProperty='id'
			dataSource={data}
			columns={columns}
			style={{height: 500}}
			//if you don't want to show a column menu to show/hide columns, use
			//withColumnMenu={false}
		/>
	}
})

React.render(<App />, document.getElementById('table'));