import * as types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem('CART'));
const saveData = state => localStorage.setItem('CART', JSON.stringify(state));

const initialState = data ? data : [];

const cart = (state = initialState, action) => {
  const { type, product, quantity } = action;
  switch (type) {
    case types.ADD_TO_CART:
      for (let item of state) {
        if (item.product.id === product.id) {
          item.quantity += 1;
          saveData(state);
          return [...state];
        };
      };
      state.push({
        product,
        quantity
      });
      saveData(state);
      return [...state];
    default: 
      return [...state];
  }
}

export default cart;