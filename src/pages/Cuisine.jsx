import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params =useParams();

    const getCuisine = async(name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }
    useEffect(() => {
        getCuisine(params.type);
    },[params.type]);

  return (
   
    <div className='searched-grid grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 g-1 '>
      {cuisine.map((item) => {
        return(
          <div key={item.id}>
            <Link to={'/recipe/'+item.id}>
              <img src={item.image} 
              alt={item.title}
              className='w-full object-cover'/>
              <h4
              className='hover:underline text-[#eeeeee] text-center p-[1rem] w-[90%]'> {item.title}</h4>  
            </Link> 
          </div>
        )

      })}

      
    </div>
  )
 }

export default Cuisine
