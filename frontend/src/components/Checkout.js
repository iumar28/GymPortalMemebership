import React from 'react'
import {Button} from "react-bootstrap"
import StripeCheckout from 'react-stripe-checkout';

const Checkout = ({Total}) => {
  const tokenHandler=(token)=>{
    console.log(token)
  }
  return (
    <StripeCheckout
    name="Gymno Fitness Center"
    description='be healthy'
    amount={Total * 100}
    token={tokenHandler}
    stripeKey="pk_test_51MvzO8SDkxvjWhYPQMhMAy6Da8ah80pc98CeGuvNl9ZvR4532UkBUZ9xJ2KoGNJnhplymM7SovkfntA6tUFKtcjT00DqnsRDnM"
    currency='INR'
    >
        <Button type="button" class="btn btn-primary" >pay now</Button>      
    </StripeCheckout>
  )
}

export default Checkout
