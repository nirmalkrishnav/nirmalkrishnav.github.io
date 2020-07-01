import React from 'react';
import './App.css';
import Left from './components/left-sidebar/Left';
import Content from './components/content/Content';

function App() {
  return (
    <div className="app container-fluid row m-0">
      <div className="col-md-5">
        <Left />
      </div>
      <div className="col-md-7">
        <Content />
      </div>
    </div>
  );
}

export default App;
