import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className="product">
        <div className="product__info">
            <p className="">
                The Lean Start-up: How constant innovation Creates Radically Successful Businesses paperback 
            </p>
            <p className="product__description"></p>
            <p className="product__price">
                <small>$</small>
                <strong>9.99</strong>
            </p>
            <div className="product__rating">
                <p><span alt="">🌟</span></p>
                <p><span alt="">🌟</span></p>
                <p><span alt="">🌟</span></p>
            
            </div>
            <img
                className="product__image" 
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                alt=""
                /> <br/>
            <button className="" >Add to basket</button>
        </div>

    </div>
  )
}

export default Product