import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate the appropriate slidesPerView based on the screen width
  const slidesPerView = windowWidth < 992 ? 1 : 2;

  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
        }}
      >
      <SwiperSlide> 
  <div className="offers-card p-4 border border-primary  rounded-4">
<div className="row">
  <div className="col-9">
    <h5>Fly away to your dream holiday</h5>
    <p>
    Get inspired, compare and book flights with more flexibility
    </p>
    <button className='btn btn-lg btn-primary'>
      Search for flights
    </button>
  </div>
  <div className="col-3">
    <img className='img-fluid' src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=" alt="" />
  </div>
</div>
</div>
  </SwiperSlide>	
  <SwiperSlide> 
  <div className="offers-card p-4 border border-primary  rounded-4">
<div className="row">
  <div className="col-9">
    <h5>Fly away to your dream holiday</h5>
    <p>
    Get inspired, compare and book flights with more flexibility
    </p>
    <button className='btn btn-lg btn-primary'>
      Search for flights
    </button>
  </div>
  <div className="col-3">
    <img className='img-fluid' src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=" alt="" />
  </div>
</div>
</div>
  </SwiperSlide>	
  <SwiperSlide> 
  <div className="offers-card p-4 border border-primary  rounded-4">
<div className="row">
  <div className="col-9">
    <h5>Fly away to your dream holiday</h5>
    <p>
    Get inspired, compare and book flights with more flexibility
    </p>
    <button className='btn btn-lg btn-primary'>
      Search for flights
    </button>
  </div>
  <div className="col-3">
    <img className='img-fluid' src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=" alt="" />
  </div>
</div>
</div>
  </SwiperSlide>	
  <SwiperSlide> 
  <div className="offers-card p-4 border border-primary  rounded-4">
<div className="row">
  <div className="col-9">
    <h5>Fly away to your dream holiday</h5>
    <p>
    Get inspired, compare and book flights with more flexibility
    </p>
    <button className='btn btn-lg btn-primary'>
      Search for flights
    </button>
  </div>
  <div className="col-3">
    <img className='img-fluid' src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=" alt="" />
  </div>
</div>
</div>
  </SwiperSlide>	
      </Swiper>
    </div>
  );
}

export default App;
