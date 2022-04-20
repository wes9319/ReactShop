import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
  return (
    <div className="OrderItem">
      <figure>
        <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="product-img"/>
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close"></img>
    </div>
  )
}

export { OrderItem };