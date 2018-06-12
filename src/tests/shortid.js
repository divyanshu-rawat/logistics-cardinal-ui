jest.mock('shortid', () => {
  let id = 0;

  return {
    generate: jest.fn(() => {
      id += 1;
      return id;
    }),
  };
});
