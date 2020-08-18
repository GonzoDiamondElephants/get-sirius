import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js';

describe('Happy path of App.js', () => {
  it('It successfully check using snapshot', () => {
    let currentHTML = renderer.create(<App />).toJSON();
    expect(currentHTML).toMatchSnapshot();
  });
});
