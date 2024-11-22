import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayouts } from '../../components/MainLayouts/MainLayouts';
import { Home } from '../Home/Home';
import { Basket } from '../Basket/Basket';
import './AppRouter.css'

export const AppRouter = () => {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path='/basket' element={<Basket />} />
        </Route>
      </Routes>
    </div>
  )
};