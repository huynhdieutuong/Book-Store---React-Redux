import * as types from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
}

export const actChangeMessage = message => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  }
}

export const actDeleteItemInCart = product => {
  return {
    type: types.DELETE_ITEM_IN_CART,
    product
  }
}

export const actUpdateQuantity = (product, quantity) => {
  return {
    type: types.UPDATE_QUANTITY,
    product,
    quantity
  }
}