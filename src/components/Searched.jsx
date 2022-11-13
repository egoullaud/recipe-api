import React from 'react'
import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';

function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);

  }, [params.search]);

  return (
    <div className='searched-grid grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 g-1 '>
      {searchedRecipes.map((item) => {
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

export default Searched
