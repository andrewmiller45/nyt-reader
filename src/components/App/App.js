import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

const App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=irJpGjNOK7tETNJ7F0mGDixiQFWuwHSx')
      .then(r => r.json())
      .then(r => setArticles(r.results))
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The state of the World - according to the New York Times
        </p>
      </header>
      
    </div>
  );
}

export default App;
