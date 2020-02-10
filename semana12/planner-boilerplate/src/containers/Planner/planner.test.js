import React from 'react';
import renderer from 'react-test-renderer';
import { Planner } from './index'

it('Snapshot do container Planner', ()=> {
    const tree = renderer
    .create(<Planner></Planner>)
    .toJSON();
    expect(tree).toMatchSnapshot()
}) 