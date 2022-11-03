import React from 'react'
import { Route } from 'react-router-dom'
import './Nav.css'

const Nav = ({search}) => {
    return(
        <div className="nav">

        <Route exact path="/" render={()=>{

                return(
                <input 
                type='search'
                placeholder="Search Articles"
                onChange={(e)=> search(e.target.value)}
                />)

        }}/>
            

        </div>
    )
}

export default Nav