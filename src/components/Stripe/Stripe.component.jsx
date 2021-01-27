import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

import image1 from '../../Assets/image1.svg'

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_51IDhCXDhwEDNhYnIxlrUhWGotpUONtvV3CH3fvpkG9fZrSsjJrthcgUKUbgIFw9ijplRAr2eiBZIybaIgHV8hdkA00M9jBBy09'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  };

 return (<StripeCheckout 
  label='Pay Now'
   name= 'SJRN Clothing'
   billingAddress
   shippingAddress
   image='http://svgshare.com/i/CUz.svg'
   description={`Your total is ${price}`}
   amount={stripePrice}
   token={onToken}
   stripeKey={publishableKey}
   panelLabel='Pay Now'
 />)
}

export default StripeButton;