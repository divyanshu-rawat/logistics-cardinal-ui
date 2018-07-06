import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../utils/withTests';

import { LAYOUT } from '../../../.storybook/sections';

import Responsive from '.';

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
      <Responsive.Desktop>You are on Desktop ✨ 🐣 ✨</Responsive.Desktop>
    )),
  )
  .add(
    'Mobile',
    withInfo()(() => (
      <div>
        <Responsive.Desktop>
          ⚠️ Use the Viewport action to visualize the Mobile content
        </Responsive.Desktop>
        <Responsive.Mobile>You are on Mobile ✨ 🐣 ✨</Responsive.Mobile>
      </div>
    )),
  )
  .add(
    'Tablet',
    withInfo()(() => (
      <div>
        <Responsive.Desktop>
          ⚠️ Use the Viewport action to visualize the Tablet content
        </Responsive.Desktop>
        <Responsive.Tablet>You are on Tablet ✨ 🐣 ✨</Responsive.Tablet>
      </div>
    )),
  )
  .add(
    'Large Desktop',
    withInfo()(() => (
      <div>
        <Responsive.LargeDesktop>
          You are on Large Desktop ✨ 🐣 ✨
        </Responsive.LargeDesktop>
      </div>
    )),
  );
