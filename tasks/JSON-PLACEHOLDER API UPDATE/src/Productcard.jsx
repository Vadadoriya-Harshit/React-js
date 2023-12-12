import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Productcard() {
  const [data, setData] = useState([]);
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const toast = useRef();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setData(res.data));
  }, []);

  const handleWishlistClick = () => {
    if (isWishlistActive) {
      toast.current.show({
        severity: 'warn',
        summary: 'Removed from Wishlist',
        detail: 'Removed from your wishlist',
      });
    } else {
      toast.current.show({
        severity: 'success',
        summary: 'Added to Wishlist',
        detail: 'Added to your wishlist',
      });
    }
    setIsWishlistActive(!isWishlistActive);
  };

  return (
    <>
   
        <div className="card col-">
              <div className="d-flex justify-content-between p-3">
               
              
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                className="card-img-top"
                alt="Laptop"
              />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">

                  </div>
                  <div className="col-6 d-flex justify-content-end">
                  <div className='shadow p-2 rounded-5 me-4' style={{cursor:"pointer"}}>
      <div onClick={()=>alert("hii")}>
 
      <i className="fas fa-cart-plus fs-3"></i>
      </div>
      <Toast ref={toast} position="top-center" />
                 </div>
                  <div className='col-2 d-flex justify-content-center align-items-center'>
                  <div className='shadow p-2 rounded-5' style={{cursor:"pointer"}}>
      <div onClick={handleWishlistClick}>
                  {isWishlistActive ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54"
      fill="red" // Change this line to set the fill color to red
      stroke="none" // Remove the stroke if you want a solid red icon
    />
  </svg>
  

                 
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24">
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54"
                      fill="none"
                      stroke="black"
                      strokeWidth="2" // Change this line
                    />
                  </svg>
                  

                  )}
      </div>
     
                 </div>
                  </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1199</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Envy</h5>
                  <h5 className="text-dark mb-0">$1099</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">7</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
}

export default Productcard;
