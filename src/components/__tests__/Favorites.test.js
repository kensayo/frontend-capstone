import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Favorites from '../Favorites';

jest.mock('../Favorites');

describe('Fav component', () => {
  test('should render Favorites component correctly', () => {
    const component = render(
      <Favorites
        hdd="1"
        processor="Intel Core i5"
        ram="8"
        brand="HP Elite Dragonfly G2"
        price="1000"
        accessories="mouse, mousepad"
        image="https://icdn.dtcn.com/image/digitaltrends_es/computadora-hp-elite-dragonfly-review-5-768x768.jpg"
      />,
    );
    expect(component.container).toHaveTextContent('Intel Core i5');
    expect(component.container).toHaveTextContent('1000');
  });
});
