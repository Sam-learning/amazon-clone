import React from 'react';
import './style.css'
import { useStateValue } from '../StateProvider';


// rating :  先創造一個有rating 個數element 的array ，再用fill填滿
const Product = ({ id, rating, title, price, image}) => {
    const [{}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            
            type : 'Add_To_Basket',
            //把這些東西push到global state
            item:{
                id,
                title,
                rating,
                price,
                image
            },
            
        })
    }


    return (
        <div className='product_card'>
            <div className='description'>
                <h2> {title} </h2>
                <p className='product_price'>
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <p className='rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((element)=>(
                            <span>⭐️</span>
                        ))
                    }    
                </p>
            </div>
            <img alt='' src={image}/>
            <button onClick={addToBasket} className='product_btn'>Add to basket</button> 
        </div>
    );
};

export default Product;