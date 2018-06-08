import { generateRandomShifts } from '../utils';

describe('Graph utils', () => {
  it('should generate random shifts that contains shifts and month parameters', () => {
    const shifts = generateRandomShifts();
    const keys = Object.keys(shifts[0]);
    expect(shifts.length).toBe(12);
    expect(keys).toEqual(['shifts', 'month']);
  });
});
