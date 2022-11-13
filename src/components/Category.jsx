import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {Link} from 'react-router-dom';

function Category() {
  return (
    <div className='flex text-[#222831] justify-center items-center p-2 md:p-4 my-[2rem]'>
        <Link to={'/cuisine/Italian'}
        className="w-[6rem] h-[6rem] m-1 md:m-6 bg-gradient-to-tr from-[#eeeeee] to-[#00ad85] rounded-full flex flex-col justify-center items-center text-lg cursor-pointer">
        <FaPizzaSlice
        className=' cursor-pointer text-2xl'/>
        <h4>Italian</h4>
      </Link>
      <Link to={'/cuisine/American'}
      className="w-[6rem] h-[6rem] m-1 md:m-6 bg-gradient-to-tr from-[#eeeeee] to-[#00ad85] rounded-full flex flex-col justify-center items-center text-lg cursor-pointer">
        <FaHamburger
        className='cursor-pointer text-2xl'/>
        <h4>American</h4>
      </Link>
      <Link to={'/cuisine/Thai'}
      className="w-[6rem] h-[6rem] m-1 md:m-6 bg-gradient-to-tr from-[#eeeeee] to-[#00ad85] rounded-full flex flex-col justify-center items-center  text-lg cursor-pointer">
        <GiNoodles
        className='cursor-pointer text-3xl'/>
        <h4>Thai</h4>
      </Link>
      <Link to={'/cuisine/Chinese'}
      className="w-[6rem] h-[6rem] m-1 md:m-6 bg-gradient-to-tr from-[#eeeeee] to-[#00ad85] rounded-full flex flex-col justify-center items-center  text-lg cursor-pointer">
        <GiChopsticks
        className='cursor-pointer text-3xl'/>
        <h4>Chinese</h4>
      </Link>
      
    </div>
  )
}

export default Category
