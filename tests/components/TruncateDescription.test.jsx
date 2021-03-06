import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import TruncateDescription from '../../src/components/TruncateDescription';

// fixtures
import activity from '../../src/fixtures/activity';

describe('<TruncateDescription />', () => {
  const setUpWrapper = ({
    description = activity.description,
    wordCount = 50,
  } = {}) => {
    const props = { description, wordCount };
    return shallow(<TruncateDescription {...props} />);
  };

  it('should render TruncateDescription', () => {
    const shallowWrapper = setUpWrapper();
    expect(shallowWrapper.length).toBe(1);
  });

  it('should show view more button when description is long', () => {
    const shallowWrapper = setUpWrapper();
    expect(shallowWrapper.find('.activity__description__btn--more--less').length).toBe(1);
  });

  it('should change state and button text to view less when view more is clicked', () => {
    const shallowWrapper = setUpWrapper();
    const viewMoreBtn = shallowWrapper.find('.activity__description__btn--more--less');
    viewMoreBtn.simulate('click');
    expect(shallowWrapper.state().longDescription).toEqual(false);
    expect(shallowWrapper.html()).toContain('Less');
  });

  it('should not show More button when description is short', () => {
    const shallowWrapper = setUpWrapper({ description: 'Lorem ipsum dolor sit amet.' });
    expect(shallowWrapper.state().description).toEqual('Lorem ipsum dolor sit amet.');
    expect(shallowWrapper.find('.activity__description__btn--more--less').length).toBe(0);
  });
});

