import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/slices/cartSlice';
import { incrementQuantity } from '../Redux/slices/cartSlice';
import { decrementQuantity } from '../Redux/slices/cartSlice';
import { checkout } from '../Redux/slices/cartSlice';

function Cart() {

  const dispatch=useDispatch()

  const cart = useSelector(state => state.cartReducer)

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4 text-center text-md-start">Cart Summary</h2>
      <div className="row">

        {/* Left Side: Cart Items */}
        <div className="col-12 col-lg-8">

          {/* Mobile View: Vertical Cards (Visible only on small screens) */}
          <div className="d-block d-md-none">
            <div className="card shadow-sm mb-3 p-3">
              <div className="d-flex align-items-center mb-3">
                
                <img
                  src="https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-pro.png"
                  style={{ width: '80px' }}
                  alt="product"
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Iphone 15</h6>
                  <small className="text-muted">Unit Price: ₹1,50,000</small>
                </div>
                <button className="btn ms-auto text-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-success px-3">+</button>
                  <span className="mx-3 fw-bold">2</span>
                  <button className="btn btn-sm btn-danger px-3">-</button>
                </div>
                <div className="text-end">
                  <small className="d-block text-muted">Total</small>
                  <span className="fw-bold text-success">₹3,00,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View: Table (Hidden on small screens) */}
          <div className="d-none d-md-block table-responsive shadow-sm">
            {
              cart?.length > 0 ?
                <table className='table table-bordered align-middle text-center'>
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart?.map(item => (
                        <tr>
                          <td className="fw-bold">{item.title}</td>
                          <td>
                            <img src={item.thumbnail} style={{ width: '80px' }} alt="product" />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                              <button className="btn btn-sm btn-success" onClick={()=>{dispatch(incrementQuantity(item.id))}}>+</button>
                              <input type="text" className="form-control form-control-sm mx-2 text-center" style={{ width: '40px' }} value={item.quantity} readOnly />
                              <button className="btn btn-sm btn-danger" onClick={()=>{dispatch(decrementQuantity(item.id))}}>-</button>
                            </div>
                          </td>
                          <td className="fw-bold text-success">{item.price * item.quantity}</td>
                          <td>
                            <button className='btn btn-outline-danger border-0' onClick={()=>{dispatch(removeFromCart(item.id))}}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
                :
                <div>
                  <h1 className='text-danger text-center'>No Items Added to Cart</h1>
                </div>
            }


          </div>
        </div>

        {/* Right Side: Summary Box */}
        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
          <div className='p-4 border rounded shadow-sm bg-white'>
            <h4 className="d-flex justify-content-between">
              Total Products : <span className='text-info'>{cart?.length}</span>
            </h4>
            <hr />
            <h4 className="d-flex justify-content-between mb-4 text-dark">
              Total Price : <span className='text-success'>₹{cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0)}</span>
            </h4>
            <div className='d-grid'>
              <button className="btn btn-success btn-lg fw-bold shadow-sm" onClick={checkout}>CHECKOUT</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;