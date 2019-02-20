import React from 'react';
import { shallow } from 'enzyme';
import AddCommentView from './index';

describe('AddComment View', () => {
  it('view should match the snapshot', () => {
    const wrapper = shallow(<AddCommentView />);
    expect(wrapper).toMatchSnapshot();
  });

  it('app should render AddCommentView page', () => {
    const wrapper = shallow(<AddCommentView />);
    expect(wrapper.length).toBe(1);
  });
});
