import React from 'react';

import SocialAuth from '.';

it('app should render social login view page', () => {
  const wrapper = shallow(<SocialAuth />);
  expect(wrapper.length).toBe(1);
});


describe('test create article view', () => {
it('it render create article view', () => {
const wrapper = shallow(<SocialAuth />);

expect(wrapper.length).toBe(1);
});
it('it should match snapshot', () => {
  const wrapper = shallow(<SocialAuth />);
  expect(wrapper).toMatchSnapshot();
});
});
