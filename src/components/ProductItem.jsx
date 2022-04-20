import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import iconAddCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {

  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
      <div className="product-info">
        <div>
          <p>120</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleClick}>
          <img src={iconAddCart} alt="Add to cart icon"/>
        </figure>
      </div>
    </div>
  )
}

export { ProductItem };