var CommentBox  = React.createClass({
	render : function() {
		return (
			<div className="classBox"> 
				Hello! CommentBox!! 
			</div>
		);
	}
}
)

ReactDOM.render(
	  <CommentBox />,
  document.getElementById('content')
)