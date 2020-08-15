import React from 'react';
import './App.less';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Containers/Home';

function App() {
  return (
    <Router>
      <Route path="/" component={Home}/>
    </Router>
  );
}

export default App;

