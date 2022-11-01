import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Listings from '../Listings/Listings';

const App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=jXa2w66beJRj4StvRD75ZK80iZ0HOBiu')
      .then(r => r.json())
      .then(data => setArticles(data.results))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The state of the World - according to the New York Times
        </p>
      </header>
      <div>
        {articles.length > 0 ? <Listings articles={articles} /> : <p>....</p>}
      </div>
    </div>
  );
}

export default App;
