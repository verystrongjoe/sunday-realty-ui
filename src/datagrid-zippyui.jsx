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

class App extends React.Component {

  getInitialState() {
      return {
        data_: '',
      };
    },

  componentDidMount() {
      this.serverRequest = $.get("http://localhost:4000/mysql", function (result) {
        this.setState({
          data_: result
        });
      }.bind(this));
  },



	render() {
		return <DataGrid idProperty="id" dataSource={this.state.data} columns={columns} />
	}
}


ReactDOM.render(<App/>, document.getElementById('table'));
