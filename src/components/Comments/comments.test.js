import { shallow } from 'enzyme';
import React from 'react';
import AddCommentComponent from './addComment';
import CommentsListComponent from './articleComments';
import SingleCommentComponent from './singleComment';

it('app should render AddCommentComponent', () => {
  const onChange = () => ({});
  const handleSubmit = () => ({});
  const comment = {
    errors: {},
  };

  const wrapper = shallow(<AddCommentComponent
    onChange={onChange}
    handleSubmit={handleSubmit}
    comment={comment}
  />);
  expect(wrapper.length).toBe(1);
});

it('app should render CommentsListComponent', () => {
  const props = {
    isLoading: true,
  };
  const wrapper = shallow(<CommentsListComponent
    count={1}
    loading={props.isLoading}
    comments={[]}
  />);
  expect(wrapper.length).toBe(1);
});

it('app should render SingleCommentComponent', () => {
  const props = {
    author: {
      image: 'adasdas',
    },
  };
  const wrapper = shallow(<SingleCommentComponent
    comment={props}
  />);
  expect(wrapper.length).toBe(1);
});
