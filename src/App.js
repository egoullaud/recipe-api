import { BrowserRouter, Link } from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'
import Pages from './pages/Pages';
import Search from './components/Search';
import Category from './components/Category';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='text-[#EEEEEE] pl-2 h-24 w-full flex justify-between items-center bg-[#222831] border-b-2 border-b-[#00ad85]'>
        <div className='flex justify-start'>
        <GiKnifeFork className='text-4xl'/>
        <Link className='text-3xl font-bold header' to={'/'}>Delicious.com</Link>
        </div>
        <Search/>
      </div>
      <Category/>
      <Pages/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
