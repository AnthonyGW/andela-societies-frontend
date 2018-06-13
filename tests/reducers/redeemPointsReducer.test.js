import initialState from '../../src/reducers/initialState';

// actions
import {
  fetchRedemptionsRequest,
  fetchRedemptionsSuccess,
} from '../../src/actions/redeemPointsAction';

// reducers
import redeemPointsReducer from '../../src/reducers/redeemPointsReducer';

// fixtures
import redemptions from '../../src/fixtures/redemptions';

const defaultState = initialState.redemptionsInfo;

describe('Redeem points reducer', () => {
  it('should return reqesting state true when FETCH_REDEMPTIONS_REQUEST action is provided', () => {
    const expectedOutput = {
      ...defaultState,
      requesting: true,
    };
    expect(redeemPointsReducer(defaultState, fetchRedemptionsRequest())).toEqual(expectedOutput);
  });

  it('should fetch redemptions successfully', () => {
    const expectedOutput = {
      ...defaultState,
      redemptions,
      requesting: false,
    };
    expect(redeemPointsReducer(defaultState, fetchRedemptionsSuccess(redemptions))).toEqual(expectedOutput);
  });
});
