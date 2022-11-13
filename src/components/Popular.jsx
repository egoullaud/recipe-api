import React from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

function Popular() {
//set state to empty string to start
    const [popular, setPopular] = useState([]);
//similar to componentDidMount and componentDidUpdate -> updates getPopular function
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem('popular');
    //check for any stored data
    if(check){
        setPopular(JSON.parse(check)); 
    }else{ 
    //if none stored, grab data from api
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
//store item as string
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
    };
    }

  return (
    <div>
      <div className='mt-10 text-[#eeeeee] '>
        <h3 className='text-center text-3xl bold pb-4'> Popular Dishes</h3>
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
            {popular.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                        <div 
                        className='relative h-[15rem] overflow-hidden'
                        >   
                            <Link to={"/recipe/"+recipe.id}>
                                <p
                                 className='hover:underline absolute text-[#000] text-xl px-2 z-10 ml-[50%] bottom-5 translate-x-[-50%] translate-y-0  w-full text-center font-bold flex items-center justify-center'
                                 >
                                    {recipe.title}
                                </p>
                                <img 
                                className='absolute ml-0 w-full h-full object-cover' 
                                src={recipe.image} alt={recipe.title}
                            />
                            <div 
                            // className='z-3 absolute w-full height-full bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)]'
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

export default Popular
