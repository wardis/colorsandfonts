import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card"

import './style.css';

const App = () => {
  return (
    <div className="App">
      <Card />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
