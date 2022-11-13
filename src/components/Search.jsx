import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Search() {
//empty string to start
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  //prevent auto refresh
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/"+input);
  };


  return (
    <div>
     
        <form 
        className='flex  mt-5 w-full p-5'
        onSubmit={submitHandler}
        >
          <div
          
        >
          
            <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder='search'
            value={input}
          className='text-black'
            />
          </div>
        </form>  
    </div>
  )
}

export default Search
