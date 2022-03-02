import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from '../StateContext'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { useStripe, useElements, CardElement, elements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import axios from '../axios'



const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue()
    const navigate = useNavigate()
 
    const stripe = useStripe()
    const element = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState('')
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => { 
        // generate client secret which allows us to charge the customer
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                //Stripe expects total in currency subunits (100cents for 1 dollar, basically)
                url: `/payments/create?total=${getBasketTotal(basket)*100}` 
            })
            setClientSecret(response.data.clientSecret)

        }
        getClientSecret()

    }, [basket])

    const handleSubmit = async(e) => {
            e.preventDefault()
            setProcessing(true)

            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({ paymentIntent }) => { //paymentIntent === paymentConfirmation -> part of the response fro  Stripe
                
                setSucceeded(true)
                setError(null)
                setProcessing(false)

                navigate('/orders')
            }) 
    }

    const handleChange = e => {
//Listen to changes in the CardElement...and display errors as the customer types their card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : '')
    }

  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Pretoria, ZA</p>
                </div>
                
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                </div><br/>
                <div className="payment__items">
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
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                      <form onSubmit={handleSubmit}
                            action="">

                        <CardElement onChange={handleChange}/>

                        <div className="payment__priceContainer">
                        <CurrencyFormat
                            renderText = {value => <h3>Order Total: {value}</h3>}

                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />

                        <button disabled={processing || disabled || succeeded} >
                            <span>{ processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                            
                        </div>

                        {error && <div>{error}</div>}

                      </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment


