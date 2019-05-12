import React from 'react';
import Navbar from './components/Navbar';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <ProductsContainer />

        <MessageContainer />

        <CartContainer />
      </div>
    </div>
  );
}

export default App;
