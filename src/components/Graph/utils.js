import { SIZES } from '../utils/constants';

/**
 * Generate random shifts data
 * @returns {{shifts: number}[]}
 */
export function generateRandomShifts() {
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return [...new Array(12)].map((_, index) => ({
    shifts: Math.round(Math.random() * 50),
    month: MONTHS[index],
  }));
}

export function getStrokeWidth(size) {
  let strokeSize;

  switch (size) {
    case SIZES.lg:
      strokeSize = 4;
      break;
    case SIZES.md:
      strokeSize = 3;
      break;
    case SIZES.sm:
      strokeSize = 2;
      break;
    default:
      strokeSize = 1;
  }

  return strokeSize;
}
