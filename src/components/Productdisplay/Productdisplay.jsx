import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../contexts/ShopContexts/Shopcontext'
const Productdisplay = (props) => {
    const {product} = props;
    const {addtocart}=useContext(ShopContext);
    if(!product){
        return null;
    }
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-image ' src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-discription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eligendi recusandae iste provident molestias impedit vel, mollitia dignissimos.
                 Perferendis quo porro, quam facere vero sequi debitis distinctio saepe tempore cupiditate provident,
                  alias explicabo. Neque sint dolorem, 
                  architecto voluptates enim repellat a quibusdam tempora asperiores suscipit fugiat est
                   voluptatibus aliquid veritatis. Consequatur optio veritatis, 
                   laudantium reiciendis quae adipisci perspiciatis veniam a!

            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addtocart(product.id)}}>Add to Cart</button>
            <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top </p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modran,Latest </p>
        </div>
      
    </div>
  )
}

export default Productdisplay
