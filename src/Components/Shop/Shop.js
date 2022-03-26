import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const chooseOne = () => {
        console.log('jk');

        if (cart.length === 0) {
            return
        }
        const number = Math.floor(Math.random() * cart.length);
        console.log(cart);
        const newCart = [cart[number]];
        setCart(newCart);

    }



    const reset = () => {

        const newCart = [];
        setCart(newCart);

    }




    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Show Watch</h4>
                <div>
                    {
                        cart.map(product => <p>
                            {product.name}
                        </p>)
                    }
                </div>


                <button onClick={() => chooseOne()} className='btn-cart2'>
                    Choose One For Me
                </button><br></br>
                <button onClick={() => reset()} className='btn-cart2'> Choose Again</button>


            </div>
        </div>
    );
};

export default Shop;
