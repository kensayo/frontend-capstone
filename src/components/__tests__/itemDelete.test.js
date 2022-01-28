import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ItemDelete from '../__mocks__/itemDelete';

jest.mock('../itemDelete');

describe('ItemDelete component', () => {
  test('should render ItemDelete component correctly', () => {
    const component = render(
      <ItemDelete
        hdd="1"
        processor="5"
        ram="8"
        brand="HP Elite Dragonfly G2"
        price="1000"
        accessories="mouse, mousepad"
        image="https://icdn.dtcn.com/image/digitaltrends_es/computadora-hp-elite-dragonfly-review-5-768x768.jpg"
      />,
    );
    expect(component.container).toHaveTextContent('5');
    expect(component.container).toHaveTextContent('1000');
  });
});
