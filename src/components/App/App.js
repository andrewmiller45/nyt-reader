import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Listings from '../Listings/Listings';
import Detailed from '../DetailedArticle/Detailed';
import Nav from '../Nav/Nav';

const App = () => {

  const [articles, setArticles] = useState([])
  const [searches, setSearch] = useState([])

  const search = (query) => {
    let hits = articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()))

    if(!hits.length){
      hits = [{title: 'No matches found', multimedia: []}]
    }
    setSearch(hits)
  }

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=jXa2w66beJRj4StvRD75ZK80iZ0HOBiu')
      .then(response => response.json())
      .then(data => setArticles(data.results))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header'>The state of the World - top articles from today's NYT</h1>  
        <Nav search={search}/>
      </header>
      <Switch>
        <Route exact path="/">
          <div className='article-listings'>
            {articles.length > 0 ? <Listings articles={searches.length > 0 ? searches : articles} /> :<p>Loading....</p>}
          </div>
        </Route>
        <Route path="/article/:title" render={({match}) => {
          const articleMatch = articles.find((article) => article.title === match.params.title) 
          return (<Detailed {...articleMatch}/>)
        }}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
