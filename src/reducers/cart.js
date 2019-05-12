import * as types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem('CART'));
const saveData = state => localStorage.setItem('CART', JSON.stringify(state));

const initialState = data ? data : [];

const cart = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    // add to cart
    case types.ADD_TO_CART:
      const { product, quantity } = action;
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

    // delete item in cart
    case types.DELETE_ITEM_IN_CART:
      index = state.findIndex(item => item.product.id === action.item.product.id);
      state.splice(index, 1);
      saveData(state);
      return [...state];

    default: 
      return [...state];
  }
}

export default cart;