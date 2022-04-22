import React from 'react';
import '@styles/ProductInfo.scss';
import iconAddCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="cat"/>
      <div className="ProductInfo">
        <p>$35,00</p>
        <p>Kitty</p>
        <p>This is a cute cat description.</p>
        <button className="primary-button add-to-cart-button">
          <img src={iconAddCart} alt="add to cards-container"/>
          Add to Cart
        </button>
      </div>
    </>
  )
}

export { ProductInfo };