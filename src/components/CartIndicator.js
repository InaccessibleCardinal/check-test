import React from 'react';

export default function CartIndicator(props){
  return <div>
    <p>Cart: { props.cart.length }</p>
    <button onClick={props.emptyCart}>Empty</button>
    </div>
}
