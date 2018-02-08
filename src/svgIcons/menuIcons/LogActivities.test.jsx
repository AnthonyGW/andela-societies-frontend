import React from 'react';
import { shallow } from 'enzyme';

import LogActivitiesIcon from './LogActivities';

describe('<LogActivitiesIcon />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LogActivitiesIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
