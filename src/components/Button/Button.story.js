import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, select } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { COMPONENTS } from '../../../.storybook/sections';

import Button from '.';
import { SIZES, ACTION_TYPES } from './constants';
import Icons from '../Icons';

const generateButtonWithKnobs = (actionType, icon) => {
  const stretched = boolean('stretched', false);
  return (
    <div style={{ width: stretched ? '1000px' : 'auto' }}>
      <Button
        actionType={actionType}
        active={boolean('active', false)}
        disabled={boolean('disabled', false)}
        onClick={action((event) => console.log(event))}
        size={select('size', Object.values(SIZES), SIZES.DEFAULT)}
        stretch={stretched}
      >
        <span>
          {icon && <Icons.Calendar />}
          My Awesome Button
        </span>
      </Button>
    </div>
  );
};

storiesOf(`${COMPONENTS}Button`, module)
  .addDecorator(withTests('Button/tests/index'))
  .add(
    'Default',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.DEFAULT))
  )
  .add(
    'Primary',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.PRIMARY))
  )
  .add(
    'Success',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.SUCCESS))
  )
  .add('Info', withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.INFO)))
  .add(
    'Warning',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.WARNING))
  )
  .add('Danger', withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.DANGER)))
  .add('Link', withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.LINK)));

storiesOf(`${COMPONENTS}Button/With Icon`, module)
  .addDecorator(withTests('index'))
  .add(
    'Default',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.DEFAULT, true))
  )
  .add(
    'Primary',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.PRIMARY, true))
  )
  .add(
    'Success',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.SUCCESS, true))
  )
  .add(
    'Info',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.INFO, true))
  )
  .add(
    'Warning',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.WARNING, true))
  )
  .add(
    'Danger',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.DANGER, true))
  )
  .add(
    'Link',
    withInfo()(() => generateButtonWithKnobs(ACTION_TYPES.LINK, true))
  );
