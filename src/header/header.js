import React from 'react';
import { Link } from 'react-router-dom';
import logo from './000.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css'
import { useStateValue } from '../StateProvider';

const Header = () => {
    const [{basket}] = useStateValue();
    //console.log(basket)

    return (
        <div className='head'>
            <nav className='header'>
                <Link to='/'>
                    <img alt='' className='image' src={logo}  height="27" />
                </Link>
               
                <div className='search'>
                    <input type='text' className='input' />      
                    <SearchIcon className='header_icon'  />
                </div>


                {/*  */}
                <div className='head_nav'>
                    <Link to='/login' className='header_link'>
                        <div className='header_option'>
                            <span className='l1'>Hello Sam</span>
                            <span className='l2'>Sign In</span>
                        </div>
                    </Link>
                    <Link to='/' className='header_link'>
                        <div className='header_option'>
                            <span className='l1'>Return &</span>
                            <span className='l2'> Order</span>
                        </div>
                    </Link>
                    <Link to='/' className='header_link'>
                        <div className='header_option'>
                            <span className='l1'>Your</span>
                            <span className='l2'>Prime</span>
                        </div>
                    </Link>
                    <Link to='/checkout' className='header_link'>
                        <div className='basket'>
                            <ShoppingBasketIcon  />
                            <span className='l2'> {basket?.length} </span>
                        </div>
                    </Link>
                </div>
                
                
            </nav>
        </div>
    );
};

export default Header;