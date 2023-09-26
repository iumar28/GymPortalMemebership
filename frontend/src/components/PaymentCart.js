import React from 'react'
import Checkout from './Checkout'
import {useLocation} from 'react-router-dom';
import getStripe from '../lib/getStripe'


const PaymentCart = () => {
  const location = useLocation();
  let plan;
            const Total = location.state.price
            const limit=location.state.limit
            const Package=location.state.Package

            async function handleCheckout() {
              // CHECKING WHICH PLAN THE USER CHOSE
              if(location.state.price == 15000){plan = process.env.REACT_APP_GOLD_PLAN_PRICE_ID}
              else if(location.state.price == 8000){plan = process.env.REACT_APP_SILVER_PLAN_PRICE_ID}
              else if(location.state.price == 1500){plan = process.env.REACT_APP_BASIC_PLAN_PRICE_ID}
              const stripe = await getStripe();
              const { error } = await stripe.redirectToCheckout({
                lineItems: [
                  {
                    price: plan, 
                    quantity: 1,
                  },
                ],
                mode: 'subscription',
                successUrl: `http://localhost:3000/success`,
                cancelUrl: `http://localhost:3000/cancel`,
                customerEmail: 'customer@email.com',
              });
              console.warn(error.message);
            }



  return (
    <>
    <h2 className="pb-2 border-bottom d-flex justify-content-center my-5 ">Your Cart</h2>
    <div className="container my-5 py-5 d-flex justify-content-center">
        <div className="card col-8 align-self-baseline">
  <h5 className="card-header">Your Cart</h5>
  <div className="card-body">
    <h5 className="card-title">This is {Package} plan</h5>
    <p className="card-text"><strong>{limit} PLAN</strong></p>
    <p className="card-text my-2">TOTAL AMOUNT: <strong>Rs {Total}</strong> </p>
   </div>
  </div>    
    <div className="card mx-5 py-5 align-self-baseline">
        <div className="card-body ">
          <h5 className="card-title">Order Summary</h5>
          <p className="card-text">Original Price:<strong className='strong mx-5'>{Total}</strong></p>
          <hr />
          <p className="card-text">Total Price:<strong className='strong mx-5'>{Total}</strong></p>
          <Checkout onClick={handleCheckout} Total={Total}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default PaymentCart
