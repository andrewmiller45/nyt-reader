import React from 'react'
import {Link} from 'react-router-dom'
import './BriefArticle.css'

const Article = ({title, abstract, byline}) => {
  return (
    <Link to={`/article/${title}`}>
      <div className='brief-article'>
        <h1>{title}</h1>
        <p>{abstract}</p>
        <p>{byline}</p>
      </div>
    </Link>
  )
}

export default Article