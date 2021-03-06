import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '../Home';

jest.mock('../home');

describe('Home component', () => {
  test('should render Home component correctly', () => {
    const component = render(
      <Home
        hdd="1"
        ram="8"
        brand="HP Elite Dragonfly G2"
        price="1000"
        accessories="mouse, mousepad"
        image="https://icdn.dtcn.com/image/digitaltrends_es/computadora-hp-elite-dragonfly-review-5-768x768.jpg"
      />,
    );
    expect(component.container).toHaveTextContent('HP Elite Dragonfly G2');
    expect(component.container).toHaveTextContent('1000');
  });
});
