import React from 'react';
import './App.css';
import Customtag from './customtag.js';

function App() {
  return (
    <div className="App">

    <Customtag sent="custom tag" />

    <hr/>
    <Customtag sent="Sending Daata parent to child" />
    
    <hr/>
    <Customtag sent="parent child relationship" />
    
    </div>
  );
}

export default App;
