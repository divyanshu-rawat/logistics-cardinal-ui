import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../utils/withTests';

import { LAYOUT } from '../../../.storybook/sections';

import Responsive from '.';

import Theme from '../../themes';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';
import { Tablet } from './Tablet';
import { LargeDesktop } from './LargeDesktop';

storiesOf(`${LAYOUT}Responsive`, module)
  .addDecorator(
    withTests(
      'Responsive/tests/index',
      'Responsive/tests/Tablet',
      'Responsive/tests/Desktop',
      'Responsive/tests/LargeDesktop',
      'Responsive/tests/Mobile',
      'Responsive/tests/Default',
    ),
  )
  .add(
    'Desktop',
    withInfo()(() => (
      <Desktop theme={Theme.rooster}>You are on Desktop ✨ 🐣 ✨</Desktop>
    )),
  )
  .add(
    'Mobile',
    withInfo()(() => (
      <div>
        <Desktop theme={Theme.rooster}>
          ⚠️ Use the Viewport action to visualize the Mobile content
        </Desktop>
        <Mobile theme={Theme.rooster}>You are on Mobile ✨ 🐣 ✨</Mobile>
      </div>
    )),
  )
  .add(
    'Tablet',
    withInfo()(() => (
      <div>
        <Desktop theme={Theme.rooster}>
          ⚠️ Use the Viewport action to visualize the Tablet content
        </Desktop>
        <Tablet theme={Theme.rooster}>You are on Tablet ✨ 🐣 ✨</Tablet>
      </div>
    )),
  )
  .add(
    'Large Desktop',
    withInfo()(() => (
      <div>
        <LargeDesktop theme={Theme.rooster}>
          You are on Large Desktop ✨ 🐣 ✨
        </LargeDesktop>
      </div>
    )),
  );
