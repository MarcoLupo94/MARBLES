import React from 'react';
import renderer from 'react-test-renderer';
import Register from './register';
// all for old version. needs update
test('renders correctly', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
});


