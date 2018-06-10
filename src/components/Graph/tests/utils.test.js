import { generateRandomShifts, getStrokeWidth } from '../utils';

describe('Graph utils', () => {
  it('should generate random shifts that contains shifts and month parameters', () => {
    const shifts = generateRandomShifts();
    const keys = Object.keys(shifts[0]);
    expect(shifts.length).toBe(12);
    expect(keys).toEqual(['shifts', 'month']);
  });

  it('should render correct sizes', () => {
    expect(getStrokeWidth('lg')).toBe(4);
    expect(getStrokeWidth('md')).toBe(3);
    expect(getStrokeWidth('sm')).toBe(2);
    expect(getStrokeWidth('xs')).toBe(1);
  });
});
