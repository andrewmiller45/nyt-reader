import React from 'react'
import {Link} from 'react-router-dom'
import './BriefArticle.css'

const Article = ({title, byline}) => {

  return (
    <div className='brief-article' id={title}>
      <Link to={`/article/${title}`}>
        <h1>{title}</h1>
        <p>{byline}</p>
      </Link>
    </div>
  )
}

export default Article