import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { color } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { COMPOSITION } from '../../../.storybook/sections';

import Button from '../Button';
import Spacing from '.';

storiesOf(`${COMPOSITION}Spacing`, module)
  .addDecorator(
    withTests(
      'Spacing/tests/index',
      'Spacing/tests/SpacingStyled',
      'Spacing/tests/SpacingBlockStyled',
    ),
  )
  .add(
    'Spacing top',
    withInfo()(() => (
      <div>
        <div>
          <Button>Without Spacing</Button>
        </div>
        <Spacing top>
          <Button>With Spacing Top</Button>
        </Spacing>
      </div>
    )),
  )
  .add(
    'Spacing bottom',
    withInfo()(() => (
      <div>
        <Spacing bottom>
          <Button>With Spacing Bottom</Button>
        </Spacing>
        <div>
          <Button>Without Spacing</Button>
        </div>
      </div>
    )),
  )
  .add(
    'Spacing left',
    withInfo()(() => (
      <div>
        <Spacing inline>
          <Button>Spacing inline</Button>
        </Spacing>
        <Spacing left inline>
          <Button>Spacing inline left</Button>
        </Spacing>
      </div>
    )),
  )
  .add(
    'Spacing right',
    withInfo()(() => (
      <div>
        <Spacing right inline>
          <Button>Spacing inline right</Button>
        </Spacing>
        <Spacing inline>
          <Button>Spacing inline</Button>
        </Spacing>
      </div>
    )),
  );
