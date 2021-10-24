import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';
import { BsTrash } from 'react-icons/bs';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          <GoArrowLeft />
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          <GoArrowRight />
        </div>
      </span>
      <span className='price'>€{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        <BsTrash />
      </div>
    </div>
  );
};

export default CheckoutItem;
