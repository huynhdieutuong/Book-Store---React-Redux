import * as types from '../constants/ActionTypes';

const initialState = [
  {
    product: {
      id: 1,
      name: 'The Alchemist',
      image: 'the-alchemist.jpg',
      author: 'Paulo Coelho',
      price: 10,
      inventory: 50,
      rating: 4.5
    },
    quantity: 5
  },
  {
    product: {
      id: 2,
      name: 'Harry Potter: A History of Magic',
      image: 'harry-potter.jpg',
      author: 'British Library',
      price: 20,
      inventory: 10,
      rating: 3.5
    },
    quantity: 2
  }
]

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default: 
      return [...state];
  }
}

export default cart;