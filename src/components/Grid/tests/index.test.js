import GridIndex from '..';

describe('Grid index', () => {
  it('should export `Grid` and `Cell` components', () => {
    expect(GridIndex.Grid).toBeDefined();
    expect(GridIndex.Cell).toBeDefined();
  });
});
