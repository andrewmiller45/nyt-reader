import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import './Nav.css'

const Nav = ({search, clear}) => {
    return(
        <div className="topSection">

        <Route exact path="/" render={()=>{

                return(
                <input 
                type='search'
                placeholder="Search Articles"
                onChange={(event)=> search(event.target.value)}
                />)

        }}/>

            <NavLink exact to="/" className="navButton" onClick={()=> clear()}>
                <button>Home</button>
            </NavLink>
            

        </div>
    )
}

export default Nav