import React from 'react';
import Navbar from './components/Navbar';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <ProductsContainer />

        <Message />

        <CartContainer />
      </div>
    </div>
  );
}

export default App;
