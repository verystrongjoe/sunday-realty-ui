var React = require('react')
var DataGrid = require('react-datagrid')

var data = [
            { id: '1', firstName: 'John', lastName: 'Bobson'},
            { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
            ]
var columns = [
               { name: 'firstName'},
               { name: 'lastName'}
               ]

var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
				React.createElement("div", {className: "commentBox"}, 
				"Hello, world! I am a CommentBox."
				)
		);
	}
});
dd

React.render(
		React.createElement(CommentBox, null),
		document.getElementById('content')
);

