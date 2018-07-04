import React from 'react';
import { Glyphicon } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import { COMPONENTS } from '../../../.storybook/sections';

import withTests from '../../utils/withTests';
import Theme from '../../themes/rooster';

import Tooltip from '.';
import Button from '../Button';

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
            'top',
          )}
        >
          <Button>
            <Glyphicon glyph="info-sign" />
          </Button>
        </Tooltip>
      </div>
    )),
  );
