import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from '../StateContext' 

const CheckoutProduct = ({id, title, image, price, rating}) => {
    const [{basket}, dispatch] = useStateValue()
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            id: id
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className="checkoutProduct__img" src={image} 
        />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                { Array(rating).fill().map((_, i) => (<p><span role="img">🌟</span></p>)) }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct