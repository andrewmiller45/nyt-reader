import React from 'react'
import { Link } from 'react-router-dom'
import './Detailed.css'

const Detailed = ({title, abstract, multimedia, short_url}) => {
    console.log(multimedia)
  return (
    <div className='detailed-info'>
            
            <div className='pulp-container'>
                <img src={(multimedia[1].url)} alt={title}/>
                <h1>{title}</h1>
                <h3>{abstract}</h3>
                <a href={short_url}>Read in full on the New York Times</a>
                <br></br><br></br>
                <Link to='/'><button id='home'>Return to Leading Stories</button></Link>
            </div>
    </div>
  )
}

export default Detailed