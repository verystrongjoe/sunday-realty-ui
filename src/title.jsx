import React from 'react';
import ReactDOM from 'react-dom';
 
 
class World extends React.Component {
  render() {
    return <h1>선데이 스터디 부동산(실거래가 조회)</h1>
  }
}

ReactDOM.render(<World/>, document.getElementById('title'));