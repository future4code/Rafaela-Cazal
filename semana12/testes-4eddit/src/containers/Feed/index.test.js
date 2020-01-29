import React from 'react';
import renderer from 'react-test-renderer';
import { Feed } from './index';

it('Snapshot', ()=> {
    const tree = renderer
    .create(<Feed allPosts={[]} goToLoginPage={() => {}} getAllPosts={() => {}}></Feed>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})  