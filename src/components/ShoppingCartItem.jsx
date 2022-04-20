import React from 'react';
import '../styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
  return (
    <div class="ShoppingCartItem">
      <figure>
        <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="cat"/>
      </figure>
      <p>Cat</p>
      <p>$30,00</p>
    </div>
  )
}

export { ShoppingCartItem };