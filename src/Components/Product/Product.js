import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { name, img, price, ratings, stock } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <p className='product-name'>Brand name: {name}</p>
                <p>Price: ${price}</p>
                <p><small>Ratings: {ratings}</small></p>
                <p><small>Stock: {stock}</small></p>

            </div>
            <button className='btn-cart'>
                <p> Add to cart</p>
            </button>
        </div>
    );
};

export default Product;