import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../contexts/ShopContexts/Shopcontext';
import remove_icon from '../assets/cart_cross_icon.png';

const Cartitems = () => {
  const { all_product, cartItems, removefromcart, gettotalcartamount } = useContext(ShopContext);

  // Log the cart items and total amount for debugging
  console.log("cartItems:", cartItems);
  console.log("Total cart amount:", gettotalcartamount());

  return (
    <div className='cartitems'>
      <div className="cartitems-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-formate-main">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removefromcart(e.id) }} alt="Remove" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${gettotalcartamount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
