
// compnents

import Header from './components/header/header';
import Home from './components/Home/Home';
import DataProvider from './context/DataProvider';
import DetailView from "./components/Details/DetailView";
import React from 'react';
import {Box} from '@mui/material';
import Cart from "./components/cart/Cart";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Foot from './components/Footer/footer';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
          <Header />
          <Box style={{marginTop: 80}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Box>
          
        </BrowserRouter>
      <Foot />
    </DataProvider>
  );
}

export default App;
