import React from 'react';
import { shallow } from 'enzyme';
import AllCommentsView from './index';

describe('All Comments View', () => {
  it('view should match the snapshot', () => {
    const wrapper = shallow(<AllCommentsView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('app should render AllCommentsView page', () => {
    const wrapper = shallow(<AllCommentsView />);
    expect(wrapper.length).toBe(1);
  });
});
