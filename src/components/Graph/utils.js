/**
 * Generate random shifts data
 * @returns {{shifts: number}[]}
 */
export function generateRandomShifts() {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return [...new Array(12)].map((_, index) => ({
    shifts: Math.round(Math.random() * 50),
    month: MONTHS[index],
  }));
}
