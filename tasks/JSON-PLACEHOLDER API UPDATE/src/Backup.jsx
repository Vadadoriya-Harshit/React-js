import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import { wishlist,cartbox } from './MultipleElement'; // Correct import
import { useContext } from 'react';

function ProductCard() {
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [data, setData] = useState([]);
  const toast = useRef();
  const user = useContext(wishlist); 
  const usercart =useContext(cartbox); 
   const[cart,setCart]=useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setData(res.data));
  }, []);
 
  const handleWishlistClick = (index,text) => {
    const newData = [...data];
    newData[index].isWishlistActive = !newData[index].isWishlistActive;
    setData(newData);

    const product = newData[index];
    if (product.isWishlistActive) {
      toast.current.show({
        severity: 'success',
        summary: 'Added to Wishlist',
        detail: `Added ${text} to your wishlist`,
      });
      user.setwishList(user.wishList + 1); // Increment the count
    } else {
      toast.current.show({
        severity: 'error',
        summary: 'Removed from Wishlist',
        detail: `Removed ${text} from your wishlist`,
      });
      user.setwishList(user.wishList - 1); // Decrement the count
    }
  };
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      toast.current.show({
        severity: 'error',
        summary: 'Already in Cart',
        detail: `${product.title} is already in your cart`,
      });
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.current.show({
        severity: 'success',
        summary: 'Added to Cart',
        detail: 'Successfully added to your cart',
      });
      usercart.setcountCart(usercart.countCart + 1);
    }
  };

  return (
    <>
   
    <div className="row">
      {data.map((product,index) => (
        <div className="card p-3 shadow col-md-6 col-lg-3 mb-4 mb-md-0" style={{ height: '450px',width:''}} key={product.id}>
          <div className="card-img-top" style={{ height: '50%' }}>
            <img src={product.image} className='img-fluid p-4' alt={product.title} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <div className="card-body" style={{ height: '50%' }}>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text m-0" style={{ height: '2.5em', overflow: 'hidden' }}>
              {product.description}
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <h6 className="text-danger fs-3">${product.price}</h6>
                    <h6 className="text-decoration-line-through">${product.price}</h6>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="col-lg-3 col-md-12 d-flex justify-content-between align-items-center mt-2">
                    <button className="btn" onClick={()=>handleAddToCart(product)}>
                      <i className="fas fa-cart-plus fs-3"></i>
                    </button>
                    <button className="btn" onClick={()=>handleWishlistClick(index,product.title)}>
    
                    {product.isWishlistActive ? (
                       <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24">
                       <path
                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54"
                         fill="red"  
                       />
                     </svg>
 
) : (
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54"
      fill="none" 
      stroke="black" 
      strokeWidth="2" 
    />
  </svg>
)}

                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="small text-muted m-0">Available: <span className="fw-bold">{product.stock}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Toast ref={toast} position="top-center" />
    </>

  );
}

export default ProductCard;