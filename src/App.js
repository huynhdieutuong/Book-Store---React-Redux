import React from 'react';
import Navbar from './components/Navbar';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <ProductsContainer />

        <Message />

        <Cart />
      </div>
    </div>
  );
}

export default App;
