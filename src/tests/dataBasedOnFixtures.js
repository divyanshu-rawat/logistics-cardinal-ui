export const charts = {
  1: {
    data: [
      { '2018-01-01': 11, '2018-01-08': 25, formattedTime: '10:00:00' },
      { '2018-01-01': 50, '2018-01-08': 26, formattedTime: '11:00:00' },
    ],
    dates: {
      '2018-01-01': {
        formattedDate: '2018-01-01',
        lineColor: '#5981AC',
      },
      '2018-01-08': {
        formattedDate: '2018-01-08',
        lineColor: '#265C96',
      },
    },
  },
  2: {
    data: [
      { '2018-01-02': 0, '2018-01-09': 27, formattedTime: '10:00:00' },
      { '2018-01-02': 0, '2018-01-09': 28, formattedTime: '11:00:00' },
    ],
    dates: {
      '2018-01-02': {
        formattedDate: '2018-01-02',
        lineColor: '#5981AC',
      },
      '2018-01-09': {
        formattedDate: '2018-01-09',
        lineColor: '#265C96',
      },
    },
  },
  3: {
    data: [
      { '2018-01-03': 1, '2018-01-10': 29, formattedTime: '10:00:00' },
      { '2018-01-03': 12, '2018-01-10': 30, formattedTime: '11:00:00' },
    ],
    dates: {
      '2018-01-03': {
        formattedDate: '2018-01-03',
        lineColor: '#5981AC',
      },
      '2018-01-10': {
        formattedDate: '2018-01-10',
        lineColor: '#265C96',
      },
    },
  },
  4: {
    data: [
      { '2018-01-04': 0, '2018-01-11': 31, formattedTime: '10:00:00' },
      { '2018-01-04': 20, '2018-01-11': 32, formattedTime: '11:00:00' },
    ],
    dates: {
      '2018-01-04': {
        formattedDate: '2018-01-04',
        lineColor: '#5981AC',
      },
      '2018-01-11': {
        formattedDate: '2018-01-11',
        lineColor: '#265C96',
      },
    },
  },
  5: {
    data: [
      { '2018-01-05': 0, '2018-01-12': 33, formattedTime: '10:00:00' },
      { '2018-01-05': 7, '2018-01-12': 34, formattedTime: '11:00:00' },
    ],
    dates: {
      '2018-01-05': {
        formattedDate: '2018-01-05',
        lineColor: '#5981AC',
      },
      '2018-01-12': {
        formattedDate: '2018-01-12',
        lineColor: '#265C96',
      },
    },
  },
  6: {
    data: [
      { '2017-12-30': 0, '2018-01-06': 21, formattedTime: '10:00:00' },
      { '2017-12-30': 1, '2018-01-06': 22, formattedTime: '11:00:00' },
    ],
    dates: {
      '2017-12-30': {
        formattedDate: '2017-12-30',
        lineColor: '#3F9BFC',
      },
      '2018-01-06': {
        formattedDate: '2018-01-06',
        lineColor: '#5981AC',
      },
    },
  },
  7: {
    data: [
      { '2017-12-31': 0, '2018-01-07': 23, formattedTime: '10:00:00' },
      { '2017-12-31': 5, '2018-01-07': 24, formattedTime: '11:00:00' },
    ],
    dates: {
      '2017-12-31': {
        formattedDate: '2017-12-31',
        lineColor: '#3F9BFC',
      },
      '2018-01-07': {
        formattedDate: '2018-01-07',
        lineColor: '#5981AC',
      },
    },
  },
};

export const tableValues = [
  {
    1: { value: 51, change: -16 },
    2: { value: 55, change: 100 },
    3: { value: 59, change: 354 },
    4: { value: 63, change: 215 },
    5: { value: 67, change: 857 },
    6: { value: undefined },
    7: { value: undefined },
    week: 'W2-18',
    total: {
      value: 295,
      change: 54,
    },
  },
  {
    1: { value: 61 },
    2: { value: 0 },
    3: { value: 13 },
    4: { value: 20 },
    5: { value: 7 },
    6: { value: 43, change: 4200 },
    7: { value: 47, change: 840 },
    week: 'W1-18',
    total: {
      value: 191,
      change: 3083,
    },
  },
  {
    1: { value: undefined },
    2: { value: undefined },
    3: { value: undefined },
    4: { value: undefined },
    5: { value: undefined },
    6: { value: 1 },
    7: { value: 5 },
    week: 'W52-17',
    total: {
      value: 6,
    },
  },
];

export const weekDates = {
  'W52-17': ['2017-12-30', '2017-12-31'],
  'W1-18': [
    '2018-01-01',
    '2018-01-02',
    '2018-01-03',
    '2018-01-04',
    '2018-01-05',
    '2018-01-06',
    '2018-01-07',
  ],
  'W2-18': [
    '2018-01-08',
    '2018-01-09',
    '2018-01-10',
    '2018-01-11',
    '2018-01-12',
  ],
};

export const chartsData = {
  1: {
    data: [
      { '2018-01-01': 11, formattedTime: '10:00:00' },
      { '2017-12-31': 5, formattedTime: '11:00:00' },
    ],
    dates: {
      '2017-12-31': {
        formattedDate: '2017-12-31',
        lineColor: '#3F9BFC',
      },
    },
  },
};

export const tableData = [
  { 6: 1, 7: 5, week: 'W52-17' },
  { 1: 61, 2: 0, 3: 13, 4: 20, 5: 7, week: 'W1-18' },
];

export const weekDatesData = {
  'W52-17': ['2017-12-30', '2017-12-31'],
  'W1-18': [
    '2018-01-01',
    '2018-01-02',
    '2018-01-03',
    '2018-01-04',
    '2018-01-05',
  ],
};
