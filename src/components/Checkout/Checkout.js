import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateContext'


const Checkout = () => {
const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad"
                 src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                 alt=""
            />

            <div>
                <h2 className="checkout__title">
                    {user ? user?.email + ": your shopping basket" : "Your shopping basket" }
                </h2>

                {basket.map(item => (
                    <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                    />
                ))}

            </div>
        </div>

        <div className="checkout__right">
            <div>
                <Subtotal />
            </div>
                

        </div>
    </div>
  )
}

export default Checkout