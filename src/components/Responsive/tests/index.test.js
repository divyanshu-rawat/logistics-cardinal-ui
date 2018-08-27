import Responsive from '..';

describe('<Responsive />', () => {
  it('should render the component', () => {
    expect(Object.keys(Responsive)).toEqual([
      'Default',
      'Desktop',
      'Tablet',
      'Mobile',
      'LargeDesktop',
    ]);
  });
});
