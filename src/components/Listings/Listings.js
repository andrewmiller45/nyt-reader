import React from 'react'
import BriefArticle from '../BriefArticle/BriefArticle';
import './Listings.css'

const Listings = ({articles}) => {
   
    const articleList = articles.map((article) => {
        console.log(article);
        return (
            <div key={article.uri} className="single-listing">
                <BriefArticle {...article} />
            </div>
        )
    })

  return (
    <div className='listing-container'>{articleList}</div>
  )
}

export default Listings



