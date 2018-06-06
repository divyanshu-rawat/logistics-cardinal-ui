import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { color } from '@storybook/addon-knobs';
import { Cell } from 'styled-css-grid';
import { boolean } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { TYPOGRAPHY } from '../../../.storybook/sections';

import Heading from '.';

const generateHeading = (as, withText) => (
  <Heading
    as={as}
    noMargin={boolean('No margin', false)}
    bold={boolean('Bold', false)}
  >
    Awesome Heading
  </Heading>
);

storiesOf(`${TYPOGRAPHY}Headings`, module)
  .addDecorator(withTests('Heading/tests/index', 'HeadingStyled'))
  .add('H1', withInfo()(() => generateHeading('h1')))
  .add('H2', withInfo()(() => generateHeading('h2')))
  .add('H3', withInfo()(() => generateHeading('h3')))
  .add('H4', withInfo()(() => generateHeading('h4')))
  .add('H5', withInfo()(() => generateHeading('h5')));
