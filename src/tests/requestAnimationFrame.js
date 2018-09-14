import 'raf/polyfill';

global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};
