import React from 'react';

export default function TableSubRow(props){
return <div style={{flex:'100%', background:'red'}}>
  <div>
    <p>Check #: {props.check.checkNumber}</p>
    <button onClick={()=>props.addToCart(props.check)}>
      Add To Cart
    </button>
  </div>
  <div>image viewer component</div>
</div>
}
