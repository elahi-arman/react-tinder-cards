import React from 'react';
import test from 'tape';
import {shallow} from 'enzyme';

import {DummyComponent} from './DummyComponent.js';

test('Render dummy component', (t) => {
  t.plan(2);
  const wrapper = shallow(<DummyComponent />)
  t.ok(wrapper.children().length, 1, 'Correctly rendered one child.')
  t.equal(wrapper.instance().props.adjective, "dummy", "Correctly assigned defauly prop")
})

test('Passing Adjective Prop', (t) => {
  t.plan(1)
  const wrapper = shallow(<DummyComponent adjective='herpderp'/>)
  t.equal(wrapper.instance().props.adjective, "herpderp", "Correctly assigned props");
});
