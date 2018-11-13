import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url';
import reactSvg from 'rollup-plugin-react-svg';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: { 'styled-components': 'styled' },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: { 'styled-components': 'styled' },
    },
  ],
  external: [
    'styled-components',
    'recharts',
    'shortid',
    'moment',
    'moment-timezone',
    'react',
    'react-dom',
  ],
  plugins: [
    external(),
    json(),
    postcss({
      modules: true,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    reactSvg(),
    resolve(),
    commonjs(),
  ],
};
