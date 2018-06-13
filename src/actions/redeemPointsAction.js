import axios from '../helpers/http';

// types
import {
  FETCH_REDEMPTIONS_REQUEST,
  FETCH_REDEMPTIONS_FAILURE,
  FETCH_REDEMPTIONS_SUCCESS,
} from '../types';

import config from '../../config';

/**
 * @name fetchRedemptionsRequest
 * @summary action creator for the fetch request
 * @returns {Object} action
 */
export const fetchRedemptionsRequest = () => ({
  type: FETCH_REDEMPTIONS_REQUEST,
});

/**
 * @name fetchRedemptionsSuccess
 * @summary action creator for the fetch success
 * @param {Array} redemptions
 * @returns {Object} action
 */
export const fetchRedemptionsSuccess = redemptions => ({
  type: FETCH_REDEMPTIONS_SUCCESS,
  redemptions,
});

/**
 * @name fetchRedemption
 * @summary thunk for fetching redemptions
 * @param {String} societyId
 * @returns {(dispatch) => Promise<AxiosResponse>}
 */
export const fetchRedemption = societyId => (
  (dispatch) => {
    dispatch(fetchRedemptionsRequest());
    return axios.get(`${config.API_BASE_URL}/societies/redeem/${societyId}`)
      .then((response) => {
        dispatch(fetchRedemptionsSuccess(response.data.data));
      }).catch(() => dispatch({ type: FETCH_REDEMPTIONS_FAILURE }));
  });
