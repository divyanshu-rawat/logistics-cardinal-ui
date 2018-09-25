import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import { COMPONENTS } from '../../../.storybook/sections';

import withTests from '../../utils/withTests';

import Tooltip from '.';
import Button from '../Button';

import Icons from '../Icons';

storiesOf(`${COMPONENTS}Tooltip`, module)
  .addDecorator(withTests('Tooltip/tests/index', 'TooltipStyled'))
  .add(
    'Simple',
    withInfo()(() => (
      <div>
        <Tooltip
          content="2017-32-32 12:12"
          position={select(
            'Position',
            ['top', 'right', 'bottom', 'left'],
            'top'
          )}
        >
          <Button>
            <Icons.Calendar />
          </Button>
        </Tooltip>
      </div>
    ))
  );
