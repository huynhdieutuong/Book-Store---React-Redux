import * as messages from '../constants/Message';
import * as types from '../constants/ActionTypes';

const initialState = messages.MSG_WELCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default: return state;
  }
}

export default message;

