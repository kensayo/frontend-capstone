import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Favorites from '../components/Favorites';
import store from '../redux/configureStore';

test('matches home component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Favorites />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
