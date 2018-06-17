import React from 'react';
import { shallow } from 'enzyme';

import HelloComponent from '../src/components/HelloComponent';

it('HelloComponent renders the props it was given', () => {
  const wrapper = shallow(<HelloComponent text="chicken" />);
  expect(wrapper.text()).toEqual('chicken');
});
