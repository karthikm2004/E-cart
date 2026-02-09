import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/slices/wishlistSlices'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/slices/cartSlice'


function Details() {

  const dispatch=useDispatch({})

  const [productObj, setProductObj] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    getData()
  }, [])

  // const {products,pending,error}=useSelector((state)=>state.productreducer,)

  const getData = () => {
    const products = localStorage.getItem("products")
    const prod = JSON.parse(products).find(item => item.id == id)
    console.log(prod)
    setProductObj(prod)

  }

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={productObj.thumbnail} alt="..." /></div>
            <div className="col-md-6">
              <div className="small mb-1">{productObj.id}</div>
              <h1 className="display-5 fw-bolder">{productObj.title}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">${productObj.price}</span>
                <span>${productObj.price}</span><br />
                <span className='text-secondary'>{productObj.warrantyInformation}</span>
              </div>
              <p className="lead text-dark">{productObj.description}</p>

              <div className='d-flex justify-content-between'>
                <div></div>
                <p className='mb-4 text-danger'>rating: <span className='text-dark'>{productObj.rating}</span></p>
              </div>

              <div className="d-flex justify-content-between">
                <Link to={"/wishlist"} className='btn' onClick={()=>{dispatch(addToWishlist(productObj))}}>
                  <i className="fa-solid fa-heart-circle-plus fa-2xl" style={{ color: "#ec0914" }}></i>
                </Link>
                <Link to={"/cart"} className='btn' onClick={()=>{dispatch(addToCart(productObj))}}>
                  <i className="fa-solid fa-cart-plus text-success fa-2xl"></i>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details