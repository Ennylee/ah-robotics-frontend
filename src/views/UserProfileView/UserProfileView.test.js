import React from 'react';
import { shallow } from 'enzyme';
import ProfileView from './index';

const response = {
  errors: {},
};
it('render a label', () => {
  const wrapper = shallow(
    <ProfileView response={response} />,
  );
  expect(wrapper.length).toBe(1);
});
