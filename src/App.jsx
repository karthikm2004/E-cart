import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Details from './pages/Details'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Header from './componets/Header'
import Footer from './componets/Footer'


function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Landing/>}/>
      <Route path='details/:id' element={<Details/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Routes>
    <Footer/>

      
    </>
  )
}

export default App
