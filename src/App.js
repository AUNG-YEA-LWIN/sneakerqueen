import React from 'react';
import GridMainBody from './Components/Homepage/GridMainBody'
import { Routes, Route } from 'react-router-dom';
import Collections from './Components/Collections/Collectionspage';
import Men from './Components/Men/Menpage';
import Women from './Components/Women/Womenpage';
import Boy from './Components/Boy/Boypage';
import Girl from './Components/Girl/Girlpage'
import GridNavigation from './Components/Homepage/GridNavigation';
import titles from './DataStorage';
import NoMatch from './Components/Homepage/NoMatch';
import AddToCart from './Components/Cart/AddToCart';
import SingleItem from './Components/Item/SingleItem';
import Signup from './Components/Signup/Signup';
import Profilepage from './Components/Profile/Profilepage'
import Login from './Components/Login/Login';
import { UserAuthContextProvider } from './context/AuthContext';
import { ProtectedRoutes } from './Components/Protected/ProtectedRoutes';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './App.css';

function App({ currentItem }) {
  const products = titles;


  return (
    <>
      <UserAuthContextProvider>
        <GridNavigation />
        <Routes>
          <Route exact path='/' element={<GridMainBody />} />
          <Route path='collections' element={<Collections products={products} />} />
          {!currentItem ? (
            <Route path='collections/:id' element={<Navigate to='/collections' />} />
          ) : (
            <Route path='collections/:id' element={<SingleItem />} />
          )}
          <Route path='men' element={<Men products={products} />} />
          <Route path='women' element={<Women products={products} />} />
          <Route path='boy' element={<Boy />} />
          <Route path='girl' element={<Girl />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='mycart' element={<AddToCart />} />
          <Route path='profile' element={<ProtectedRoutes><Profilepage /></ProtectedRoutes>} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </UserAuthContextProvider>

    </>

  );
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App)
