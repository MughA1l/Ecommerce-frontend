// ShopContextProvider.jsx
import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setcartItems] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAll_product(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching products:', error));

      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json'
          },
          body:"",
        }).then((response)=>response.json())
        .then((data)=>setcartItems(data));
      }
  }, []);

  const addtocart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  }

  const removefromcart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  }

  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      let iteminfo = all_product.find((product) => product.id === Number(item));
      if (iteminfo) {
        totalamount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalamount;
  }

  const gettotalcartitem = () => {
    let totalitem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalitem += cartItems[item];
      }
    }
    return totalitem;
  }

  const contextValue = { all_product, cartItems, addtocart, removefromcart, gettotalcartamount, gettotalcartitem };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
