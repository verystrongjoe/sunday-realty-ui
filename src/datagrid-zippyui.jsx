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
 {name:'firstName'},
 {name:'lastName'}
]

var columns_ = [
  { name: 'Sigungu'},
  { name: 'MainNo'},
  { name: 'SubNo'},
  { name: 'DanjiName'},
  { name: 'RealSize'},
  { name: 'ContractDate'},
  { name: 'ContractMoney'},
  { name: 'Story'},
  { name: 'ConstuctYear'},
  { name: 'Address'}
]

var App = React.createClass({

getInitialState : function() {
  return { data2: []};
},

componentDidMount : function() {
    this.serverRequest = $.get("http://localhost:4002/mysql", function (result) {

      console.log(result);

      this.setState({
        data2 : result
      });

    }.bind(this));
},

	render  : function() {
		return (
      <DataGrid idProperty="id" dataSource={this.state.data2} columns={columns_} />
    )
	}
});


ReactDOM.render(<App/>, document.getElementById('table'));
