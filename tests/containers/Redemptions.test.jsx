import React from 'react';
import { mount } from 'enzyme';
import { stub } from 'sinon';
import { createMockStore } from 'redux-test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Redemptions from '../../src/containers/Redemptions';
import storeFixture from '../../src/fixtures/store';
import redemptions from '../../src/fixtures/redemptions';

const store = createMockStore(storeFixture);
const history = { push: () => { } };
const props = {
  hasError: false,
  requesting: false,
  redemptions,
  history,
  fetchUserInfo: stub(),
  changePageTitle: stub(),
  fetchRedemption: stub().resolves({}),
};
const mounted = mount.bind(
  null,
  <Provider store={store}>
    <MemoryRouter>
      <Redemptions {...props} />
    </MemoryRouter>
  </Provider>,
);

describe('<Redemptions />', () => {
  it('should render without crashing', () => {
    expect(mounted).not.toThrow();
  });

  it('should render PageHeader', () => {
    expect(mounted().find('PageHeader').length).toBe(1);
  });

  it('should render MasonryLayout', () => {
    expect(mounted().find('MasonryLayout').length).toBe(1);
  });
});
