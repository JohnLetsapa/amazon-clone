import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingBasket} from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import {useStateValue} from '../StateContext'
import { auth } from '../Firebase'


const Header = () => {
const [{basket, user}, dispatch] = useStateValue()

const handleAuthentication = () => {
    if(user){
        auth.signOut()
    } 
}

  return (
    <div className="header">
        
            <Link to='/'>
                <img 
                    className="header_logo"
                    width="60px"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"

                    alt="logo"
                />
            </Link>
            <div className="header__search">
                
                <input 
                    className='header__searchInput'
                    type="text" />
                <SearchIcon 
                    className='header__searchIcon'
                    />
            </div>

            <div className="header_nav">
                <Link to={!user && "login"} >
                <div    onClick={ handleAuthentication } 
                        className="header__option" >
                    <span className="header__optionLineOne">{user? user?.email : "hello Guest"}</span>
                    <span className="header__optionLineTwo">{user ? "Sign out" : "Sign In" }</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to='checkout'>
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    <span className="header__optionLineTwo header__basketCount">{ basket?.length }</span>
                </div>
                </Link>
            </div>
    </div>
  )
}

export default Header