import React from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'


function Veggie() {
    
  const [veggie, setVeggie] =  useState([]);

  useEffect(() => {
      getVeggie();
  }, []);
  
      const getVeggie = async () => {
  
          const check = localStorage.getItem('veggie');
          if(check){
              setVeggie(JSON.parse(check));
          }else{
              const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
              const data = await api.json();
  
              localStorage.setItem("veggie", JSON.stringify(data.recipes));
              setVeggie(data.recipes);
          };
          }

  return (
    <div>
    <div className='mt-10 text-[#eeeeee] '>
      <h3 className='text-center text-3xl bold pb-4'> 
      Vegetarian Dishes</h3>
      <Splide
          options={{
              arrows:false,
              pagination: false,
              drag:'free',
              gap:'0.1rem',
              mediaQuery:'min',
              breakpoints: {
                  1440:{
                      perPage: 5,
                  },
                  1024:{
                      perPage: 4,
                  },
                  768:{
                      perPage: 2,
                  },
                  640:{
                      perPage: 1,
                  },
              },
          }}
      >
          {/* //populate slider with recipes */}
          {veggie.map((recipe) => {
              return(
                  <SplideSlide key={recipe.id}>
                      <div 
                      className='relative h-[15rem] overflow-hidden mb-[5rem]'
                      >   
                          <Link to={"/recipe/"+recipe.id}>
                             
                              <img 
                              className='absolute ml-0 w-full h-full object-cover' 
                              src={recipe.image} alt={recipe.title}
                          />
                           <p
                               className='hover:underline  text-[#000] text-xl px-2 z-10 ml-[50%] bottom-0 translate-x-[-50%] translate-y-0  w-full text-center font-bold flex items-center justify-center'
                               >
                                  {recipe.title}
                              </p>
                          <div 
                          />
                          </Link>
                      </div>

                  </SplideSlide>
              )
          })}
      </Splide>
    </div>
  </div>
  )
}

export default Veggie
