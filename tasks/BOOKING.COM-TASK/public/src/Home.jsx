import React from 'react'
import Actions from './Actions'
import Slider from './Slider';
function Home() {
  return (
    <div>
         {/*------- banner-1-start -------- */}
         <div className="banner-1 mb-0 mb-lg-4"> 
            <div className="container-fluid banner-info p-3">  
            <div className="container p-0 p-lg-5">
                <div className="col-10 m-auto py-4 text-white">
                    <h1 className='pt-5'>
                    Howzat for a perfect stay
                    </h1>
                    <p className='fs-5' >  
                    Search hotels, homes and much more
                    </p>
                    <div className='p-2'>
                    <button className='btn btn-primary btn-lg'>
                    Discover more
                    </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="actions-work w-100">
             <Actions/>
          <div className="container p-2 pt-0">
          <div className="row bg-white pt-3">
          <div className="col-md-4">
          <input type="checkbox" />
          <b className='px-2'>
          I'm travelling for work
          </b>
          </div>
          <div className="col-md-8">
          <input type="checkbox" />
          <b className='px-2'>
          I’m looking for flights
          </b>
          </div>
          </div>

          </div>
          </div>
        </div>
      {/*------- banner-1-close -------- */}
         {/*------- recent-search-start -------- */}
         <div className="container-fluid pt-5">
      <div className="container">
      <h2 className='p-3 ps-0'>
      Your recent seatchess
      </h2>

      <div className="col">
      <div className="row">
      <div className="col-md-4 shadow">
        <div className="row">
          <div className="col-4 p-2">
            <img className='img-fluid' src="https://cf.bstatic.com/xdata/images/city/square100/976319.webp?k=ef74d61500c4b33b6c4a05dff8c4af506197d48ba1a81c14674d8f12d78b36b9&o=" alt="" />
          </div>
          <div className="col-8 d-flex align-items-center">
            <div>
            <b>Porbandar</b>
            <p>2 Nov-19 Nov, 2 people</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 shadow">
      <div className="row">
      <div className="col-4 p-2">
            <img className='img-fluid' src="https://cf.bstatic.com/xdata/images/city/square100/976319.webp?k=ef74d61500c4b33b6c4a05dff8c4af506197d48ba1a81c14674d8f12d78b36b9&o=" alt="" />
          </div>
          <div className="col-8 d-flex align-items-center">
            <div>
            <b>Porbandar</b>
            <p>2 Nov-19 Nov, 2 people</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 shadow">
      <div className="row">
      <div className="col-4 p-2">
            <img className='img-fluid' src="https://cf.bstatic.com/xdata/images/city/square100/976319.webp?k=ef74d61500c4b33b6c4a05dff8c4af506197d48ba1a81c14674d8f12d78b36b9&o=" alt="" />
          </div>
          <div className="col-8 d-flex align-items-center">
            <div>
            <b>Porbandar</b>
            <p>2 Nov-19 Nov, 2 people</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
       {/*------- recent-search-close -------- */}
          {/*------- offers-start -------- */}

          <div className="offers-section container">
      <div className='offers-title'>
      <h3 className='p-3 pb-0 ps-0'>
      Offers
      </h3>
      <p>
      Promotions, deals and special offers for you
      </p>
      </div>
      <div className="offers-carousal row">
      <Slider />

      </div>
      <div className="discount-section col p-2 border border-1 rounded-4 m-2 border mt-5">
      <div className="row">
        <div className="col-3">
          <img className='img-fluid' src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-traveller/GlobeGeniusBadge@2x.png" alt="" />
        </div>
        <div className="col-9 d-flex align-items-center">
        <div>
        <b className='fs-3'>
          Get instant discounts
          </b>
          <p className='w-75'>
          Simply sign into your Booking.com account and look for the blue Genius logo to save
          </p>
          <div className="col-lg-4 col-7 col-sm-6 d-flex justify-content-between pt-3">
          <button className='p-2 px-3 btn text-primary border border-primary border-1 rounded-3'>
          Sign in
          </button>
          <button className='btn text-primary'>
          Register
          </button>
          </div>
        </div>
        </div>
      </div>
      </div>

      </div>
       {/*------- offers-close -------- */}
    </div>
  )
}

export default Home