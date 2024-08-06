import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContexts/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Discriptionbox from '../components/DiscriptionBox/Discriptionbox';
import Relatedproduct from '../components/Relatedproduct/Relatedproduct';



const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            <Breadcrum product={product} />
            <Productdisplay product = {product}/>
            <Discriptionbox/>
            <Relatedproduct/>
        </div>
    )
}

export default Product
