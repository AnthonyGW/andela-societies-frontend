import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

// actions
import {
  fetchRedemptionsRequest,
  fetchRedemption,
} from '../../src/actions/redeemPointsAction';

// types
import {
  FETCH_REDEMPTIONS_REQUEST,
  FETCH_REDEMPTIONS_SUCCESS,
  FETCH_REDEMPTIONS_FAILURE,
} from '../../src/types';

// fixtures
import redemptions from '../../src/fixtures/redemptions';
import testProfile from '../../src/fixtures/userProfile';
import config from '../../config';

const mockStore = configureMockStore([thunk]);
let store;
const societyId = testProfile.society.id;

describe('Redeem Points Actions', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => (moxios.uninstall()));

  it('should return fetch redemptions request action', () => {
    expect(fetchRedemptionsRequest()).toEqual({ type: FETCH_REDEMPTIONS_REQUEST });
  });

  it('should return fetch redemptions success action', () => {
    moxios.stubRequest(`${config.API_BASE_URL}/societies/redeem/${societyId}`, {
      status: 200,
      response: {
        data: redemptions,
      },
    });

    const expectedSuccessAction = {
      type: FETCH_REDEMPTIONS_SUCCESS,
      redemptions,
    };
    return store.dispatch(fetchRedemption(societyId))
      .then(() => (expect(store.getActions()[1]).toEqual(expectedSuccessAction)));
  });

  it('should call the fetch failure action', () => {
    moxios.stubRequest(`${config.API_BASE_URL}/societies/redeem/${'-Kkh3MFLCBgVTSZ4s'}`, { status: 400 });
    const expectedErrorAction = {
      type: FETCH_REDEMPTIONS_FAILURE,
    };
    return store.dispatch(fetchRedemption('-Kkh3MFLCBgVTSZ4s'))
      .then(() => (expect(store.getActions()[1]).toEqual(expectedErrorAction)));
  });
});
