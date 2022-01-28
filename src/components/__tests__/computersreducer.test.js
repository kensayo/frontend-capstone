import computersReducer from '../../redux/computers/computers';

describe('Mock data pull', () => {
  test('It returns an empty array before fetching data', () => {
    expect(computersReducer(undefined, {})).toEqual({ computers: [] });
  });
});
