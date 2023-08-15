import React from 'react';
import'./Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' alt='' src='https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png' />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>
                    Your Shopping Basket
                </h2>
            </div>
            <div className='checkout_product'>
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

        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  );
}

export default Checkout;