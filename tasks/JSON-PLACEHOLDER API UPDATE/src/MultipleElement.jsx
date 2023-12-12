import React, { createContext, useState } from "react";
import Productcard from './Backup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';
import Wishlist from './Wishlist';
import Modelbody from "./Model";
import { Link } from "react-router-dom";
export const wishlist = createContext();
export const cartbox = createContext();

const Header = () => {
  const [wishList, setwishList] = useState(0);
  const [countCart, setcountCart] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
          <header className="bg-white">
          {/* contact content */}
          <div className="header-content-top">
          <div className="content">
            <span className="text-white">
              <i className="fas fa-phone-square-alt text-white"></i> (00)0000-0000
            </span>
            <span className="text-white">
              <i className="fas fa-envelope-square text-white"></i> email@email.com.br
            </span>
          </div>
          </div>
          {/* / contact content */}
          <div className="container p-2">
          {/* logo */}
          <strong className="logo">
            Shopify
            <img src="/" alt="" />
          </strong>
          {/* open nav mobile */}
          {/* search */}
          <label className="open-search" htmlFor="open-search">
            <i className="fas fa-search"></i>
            <input
              className="input-open-search"
              id="open-search"
              type="checkbox"
              name="menu"
            />
            <div className="search">
              <button className="button-search">
                <i className="fas fa-search text-white"></i>
              </button>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="input-search"
              />
            </div>
          </label>
          {/* // search */}
          <nav className="nav-content">
            {/* nav */}
            <ul className="nav-content-list">
              <li className="nav-content-item account-login">
                <label className="open-menu-login-account" htmlFor="open-menu-login-account">
                  <input
                    className="input-menu"
                    id="open-menu-login-account"
                    type="checkbox"
                    name="menu"
                  />
                  <i className="fas fa-user-circle pt-2 fs-3"></i>
                  <span className="login-text pt-3">
                    Hello, Sign in <strong>Create Account</strong>
                  </span>
                  <span className="item-arrow"></span>
                  {/* submenu */}
                  <ul className="login-list">
                    <li className="login-list-item">
                      <a href="">My account</a>
                    </li>
                    <li className="login-list-item">
                      <a href="">Create account</a>
                    </li>
                    <li className="login-list-item">
                      <a href="">logout</a>
                    </li>
                  </ul>
                </label>
              </li>
              <div className="row">
                <div className="col">
                  <Link>
                  <li className="countersetli" onClick={handleShow}>
                   <i className="fa-regular fa-heart fs-3 ps-3 pt-3"></i>
                 
                   <span className="counter">
                    {wishList}
                   </span>
                 </li>
                  </Link>
                
                Wishlist

                </div>
                <div className="col">
                  <li className="countersetli">
                    <i className="fas fa-cart-plus fs-3 ps-3 pt-3"></i>
                    <span className="counter">
                     {countCart}
                    </span>
                  </li>
                </div>
              </div>
              {/* call to action */}
            </ul>
          </nav>
          </div>
          {/* nav navigation commerce */}
          <div className="nav-container">
          <nav className="all-category-nav">
            <label className="open-menu-all" htmlFor="open-menu-all">
              <input
                className="input-menu-all"
                id="open-menu-all"
                type="checkbox"
                name="menu-open"
              />
              <span className="all-navigator">
                <i className="fas fa-bars text-white"></i> <span className="text-white">All category</span>{' '}
                <i className="fas fa-angle-down text-white"></i>
                <i className="fas fa-angle-up text-white"></i>
              </span>
              <ul className="all-category-list">
                <li className="all-category-list-item">
                  <a href="" className="all-category-list-link">
                    Smartphones<i className="fas fa-angle-right"></i>
                  </a>
                  <div className="category-second-list">
                    <ul className="category-second-list-ul">
                      <li className="category-second-item">
                        <a href="">Iphone 10</a>
                      </li>
                      <li className="category-second-item">
                        <a href="">Galaxy Note 10</a>
                      </li>
                      <li className="category-second-item">
                        <a href="">Motorola One</a>
                      </li>
                      <li className="category-second-item">
                        <a href="">Galaxy A80</a>
                      </li>
                      <li className="category-second-item">
                        <a href="">Galaxy M</a>
                      </li>
                      <li className="category-second-item">
                        <a href="">Huawei P30</a>
                      </li>
                    </ul>
                    <div className="img-product-menu">
                      <img src="https://i.ibb.co/Vvndkmy/banner.jpg" alt="Product Banner" />
                    </div>
                  </div>
                </li>
                <li className="all-category-list-item">
                  <a href="" className="all-category-list-link">
                    Furniture <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li className="all-category-list-item">
                  <a href="#" className="all-category-list-link">
                    Toys<i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li className="all-category-list-item">
                  <a href="" className="all-category-list-link">
                    Computing<i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li className="all-category-list-item">
                  <a href="" className="all-category-list-link">
                    Games<i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li className="all-category-list-item">
                  <a href="" className="all-category-list-link">
                    Automotive<i className="fas fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </label>
          </nav>
          <nav className="featured-category">
            <ul className="nav-row">
              <li className="nav-row-list">
                <a href="" className="nav-row-list-link">
                  Furniture
                </a>
              </li>
              <li className="nav-row-list">
                <a href="" className="nav-row-list-link">
                  Tops
                </a>
              </li>
              <li className="nav-row-list">
                <a href="" className="nav-row-list-link">
                  Computing
                </a>
              </li>
              <li className="nav-row-list">
                <a href="" className="nav-row-list-link">
                  Games
                </a>
              </li>
              <li className="nav-row-list">
                <a href="" className="nav-row-list-link">
                  Automotive
                </a>
              </li>
            </ul>
          </nav>
          </div>
          </header>
         
      <wishlist.Provider value={{wishList,setwishList}}>
       <cartbox.Provider value={{countCart,setcountCart}}>  
         <Productcard/>
       </cartbox.Provider>
      </wishlist.Provider>
     
    </>
  );
};

export default Header;