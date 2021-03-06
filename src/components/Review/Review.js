import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
const [cart, setCart] = useState([]);

    useEffect(()=> {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart); 

        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);

    }, [])
    return (
        <div>
            <h1>Cart Items:{cart.length}</h1>
            {
                cart.map(pd => <ReviewItem
                    key={pd.key}
                    product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;