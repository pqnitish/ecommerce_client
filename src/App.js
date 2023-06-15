import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import SIgnUp from './components/signup_signin/SIgnUp';
import {Routes,Route } from 'react-router-dom'
import Cart from './components/cart/Cart';
import BuyNow from './components/buynow/BuyNow';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect ,useState} from 'react';


function App() {
  const [data, setData] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setData(true);

    },3000)
  },[])
  return (
   <>
    {
      data ?(
        <>
 <Navbaar/>
   <Newnav/>
   <Routes>
    <Route path='/' element={<Maincomp/>}/>
    <Route path='/login' element={<Sign_in/>}/>
    <Route path='/register' element={<SIgnUp/>}/>
    <Route path='/getproductsone/:id' element={<Cart/>}/>
    <Route path='/buynow' element={<BuyNow/>}/>
   </Routes>
   <Footer/>
        </>
      ):(
        <div className ="circle">
          <CircularProgress/>
          <h2>Loading...</h2>
        </div>
      )
    }
  
   </>
     
  );
}

export default App;
