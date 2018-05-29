import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { color } from '@storybook/addon-knobs';
import { Cell } from 'styled-css-grid';

import withTests from '../../utils/withTests';

import { GRID } from '../../../.storybook/sections';

import Grid from './Grid';

const backgroundColor = { backgroundColor: '#666' };

storiesOf(`${GRID}Grid`, module)
  .addDecorator(withTests('Grid', 'OuterGutter'))
  .add(
    'Example Grid',
    withInfo()(() => (
      <div style={{ width: '960px' }}>
        <Grid columns={12}>
          <Cell style={backgroundColor}>1</Cell>
          <Cell style={backgroundColor}>2</Cell>
          <Cell style={backgroundColor}>3</Cell>
          <Cell style={backgroundColor}>4</Cell>
          <Cell style={backgroundColor}>5</Cell>
          <Cell style={backgroundColor}>6</Cell>
          <Cell style={backgroundColor}>7</Cell>
          <Cell style={backgroundColor}>8</Cell>
          <Cell style={backgroundColor}>9</Cell>
          <Cell style={backgroundColor}>10</Cell>
          <Cell style={backgroundColor}>11</Cell>
          <Cell style={backgroundColor}>12</Cell>
        </Grid>
      </div>
    )),
  );
