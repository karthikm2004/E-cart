import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishlist } from '../Redux/slices/wishlistSlices'

function Wishlist() {
  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch=useDispatch()

  return (
    <>
      {/* Products Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          {
            wishlist.length > 0 ? (
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                  wishlist.map(item => (
                    <div className="col mb-5" key={item.id}>
                      <div className="card h-100">
                        <Link to={`/details/${item.id}`}>
                          <img
                            className="card-img-top"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                        </Link>

                        <div className="card-body p-4">
                          <div className="text-center">
                            <h5 className="fw-bolder">{item.title}</h5>
                            ₹ {item.price}
                          </div>
                        </div>

                        <div className="d-flex justify-content-between p-2">
                          <button className="btn" onClick={()=>{dispatch(removeFromWishlist(item.id))}}> 
                            <i
                              className="fa-solid fa-heart-circle-xmark"
                              style={{ color: '#ea0611', fontSize: '25px' }}
                            ></i>
                          </button>

                          <button className="btn">
                            <i
                              className="fa-solid fa-cart-plus"
                              style={{ color: '#0a5ef0', fontSize: '25px' }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="text-center text-danger fs-4 fw-bold">
                Empty Wishlist
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Wishlist