import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import wishlistReducer from '../Redux/store'
import cartReducer from '../Redux/store'
import { searchProducts } from '../Redux/slices/productSlice';

function Header() {

  const wishlist=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)

  const dispatch=useDispatch()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container px-4 px-lg-5">
        <Link to={'/'} className='navbar-brand fw-bold fs-2'>ReduxCart</Link>
        
        {/* Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#headerNavbar" 
          aria-controls="headerNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="headerNavbar">
          <div className='ms-lg-5 my-3 my-lg-0 flex-grow-1'>
            <input 
              type="search" 
              placeholder='Enter your keyword' 
              className='form-control' 
              style={{ maxWidth: '400px' }} 
              onChange={(e)=>{dispatch(searchProducts(e.target.value))}}
            />
          </div>

          <div className="d-flex flex-column flex-lg-row gap-3">
            <Link className="btn btn-outline-dark" to={'/wishlist'}>
              <i className="fa-solid fa-heart me-2" style={{color:'#fc034e'}}></i>
              Wishlist
              <span className="badge bg-dark text-white ms-2 rounded-pill">{wishlist?.length}</span>
            </Link>
            
            <Link className="btn btn-outline-dark" to={'/cart'}>
              <i className="fa-solid fa-cart-shopping me-2 text-success"></i>
              Cart
              <span className="badge bg-dark text-white ms-2 rounded-pill">{cart?.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;