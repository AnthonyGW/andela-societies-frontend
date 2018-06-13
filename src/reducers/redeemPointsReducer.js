import {
  FETCH_REDEMPTIONS_FAILURE,
  FETCH_REDEMPTIONS_REQUEST,
  FETCH_REDEMPTIONS_SUCCESS,
} from '../types';
import initialState from './initialState';

const redeemPointsReducer = (state = initialState.redemptionsInfo, action) => {
  switch (action.type) {
  case FETCH_REDEMPTIONS_REQUEST:
    return {
      ...state,
      requesting: true,
      hasError: false,
    };
  case FETCH_REDEMPTIONS_SUCCESS:
    return {
      ...state,
      redemptions: [...action.redemptions],
      requesting: false,
      hasError: false,
    };
  case FETCH_REDEMPTIONS_FAILURE:
    return {
      ...state,
      requesting: false,
      hasError: true,
    };
  default:
    return state;
  }
};

export default redeemPointsReducer;
