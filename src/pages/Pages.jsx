import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Searched from '../components/Searched';
import Home from './Home'
import Cuisine from './Cuisine';
import Recipe from './Recipe';

function Pages() {
    const location = useLocation();
  return (
    <div>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path='/searched/:search' element={<Searched/>}/>
            <Route path = "/recipe/:name" element= {<Recipe/>}/>
        </Routes>
    
    </div>
  )
}

export default Pages
