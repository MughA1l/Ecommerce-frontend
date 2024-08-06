import React, { useContext } from 'react';
import './css/Shopcatagory.css';
import { ShopContext } from '../contexts/ShopContexts/Shopcontext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Items/Item';
import { useNavigate } from 'react-router-dom';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();

  // Validate all_product is an array before mapping
  if (!Array.isArray(all_product)) {
    console.error('all_product is not an array:', all_product);
    return <div>Error: Products could not be loaded.</div>;
  }

  const handleClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className='shopcatagory'>
      <img src={props.banner} alt="" />
      <div className="shopcatagory-indexsort">
        <p>
          <span>
            showing 1-12
          </span>out of 36 Products
        </p>
        <div className="shopcatagory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatagory-product">
        {all_product.map((item, i) => {
          if (props.catagory === item.catagory) {
            return (
              <div key={i} onClick={() => handleClick(item)}>
                <Item
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
