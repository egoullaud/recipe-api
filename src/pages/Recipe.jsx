import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

function Recipe() {

  let params= useParams();
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div
    className='my-[5rem] flex justify-around items-center lg:items-start lg:flex-row flex-col bg-[#eeeeee] lg:mx-[20%]'>
      <div className='lg:w-[50%]'>
        <h2 className='my-[5rem] text-center text-2xl font-bold'>
          {details.title}
        </h2>
        <img
        className='lg:ml-8 px-2' 
        src={details.image} alt={details.title}/>
      </div>
      <div className='my-[5rem] lg:w-[50%] flex justify-center flex-col  mx-[5rem]'>
        <button
        className={activeTab === 'instructions' ? 'active':''}
        onClick= {() => setActiveTab("instructions")}>
          Instructions
        </button>
        <button
        className={activeTab === 'ingredients' ? 'active':''}
        onClick= {() => setActiveTab("ingredients")}>
          Ingredients
        </button>
        {activeTab === 'instructions' && (
                <div>
                    <h2 dangerouslySetInnerHTML={{__html:details.summary}}></h2>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}} ></p>
                </div>
            )}
      {activeTab === 'ingredients' && ( 
            <ul> {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
                ))}
             </ul>
      )}
      </div>
    </div>
  )
}

export default Recipe
