import React, { Suspense } from 'react';
import Loader from './Loader';

import { Routes, Route, Outlet } from 'react-router-dom';
const Flights = React.lazy(() => import('./Flights'));
const Hotel = React.lazy(() => import('./Hotel'));
const Car = React.lazy(() => import('./Car'));
const Attraction = React.lazy(() => import('./Attractions'));
const Home = React.lazy(() => import('./Home'));
const Search = React.lazy(() => import('./Search'));
const Gallery = React.lazy(() => import('./gallery'));

function Routing() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/Car" element={<Car/>} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/attractions" element={<Attraction />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Outlet />
    </Suspense>
  );
}

export default Routing;
