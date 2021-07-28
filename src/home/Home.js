import React from 'react';
import './style.css'
import Product from '../product/product';

const Home = () => {
    return (
        <div className='home'>
            <img alt=''  className='home_image' src='https://www.androidcentral.com/sites/androidcentral.com/files/styles/w1600h900crop/public/article_images/2021/02/prime-video-logo.jpg'/>
            <div className='row'>
                <Product
                className='top-product'
                id='1' rating={4} price={25}
                image='https://images-na.ssl-images-amazon.com/images/I/411j0TUdamL._SX329_BO1,204,203,200_.jpg'
                title='Jesse Walter - The Book you need to read once in your life'
                />
                <Product
                id='2' rating={5} price={1596}
                image='https://m.media-amazon.com/images/I/91n+0a65XFL._AC_SL1500_.jpg'
                title='LG OLED55C1PUB Alexa Built-in C1 Series 55" 4K Smart OLED TV'
                />
            </div>
            <div className='row'>
                <Product
                className='top-product'
                id='3' rating={4} price={25}
                image='https://m.media-amazon.com/images/I/71-q35m8uPL._AC_UL640_FMwebp_QL65_.jpg'
                title='MAXTOP Large Crossbody Fanny Pack with 4-Zipper Pockets'
                />
                <Product
                className='top-product'
                id='123' rating={4} price={25}
                image='https://m.media-amazon.com/images/I/713kfTTGITL._AC_UL640_FMwebp_QL65_.jpg'
                title='BalanceFrom GoYoga+All-Purpose 1/2-Inch Extra Thick High Density Anti-Tear Exercise Yoga Mat'
                />
                <Product
                id='123' rating={4} price={57.97}
                image='https://m.media-amazon.com/images/I/71KYDouQCEL._AC_SL1500_.jpg'
                title='VTech KidiZoom Smartwatch DX2, Black'
                />
            </div>
            
        </div>
    );
};

export default Home;

