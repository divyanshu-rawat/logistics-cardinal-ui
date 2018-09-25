import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { color, boolean, select, number } from '@storybook/addon-knobs';

import { TYPOGRAPHY } from '../../../.storybook/sections';

import withTests from '../../utils/withTests';
import { rooster } from '../../themes';

import Text from '.';

storiesOf(`${TYPOGRAPHY}Text`, module)
  .addDecorator(withTests('Text/tests/index', 'TextStyled'))
  .add(
    'Simple',
    withInfo()(() => (
      <div style={{ width: '500px' }}>
        <Text
          color={color('Color', '')}
          fontFamily={select('Font Family', [
            rooster.textFontFamily,
            'Times New Roman',
          ])}
          weight={number('FontWeight', rooster.textFontWeight, 300)}
          align={select('Text Align', ['left', 'right', 'center'], 'left')}
          truncate={boolean('Truncate', false)}
          uppercase={boolean('Uppercase', false)}
          block={boolean('Block', false)}
        >
          Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem
          dormir, sentado sem cochilar e fazendo pose. Praesent malesuada urna
          nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
          Detraxit consequat et quo num tendi nada. Interagi no mé, cursus quis,
          vehicula ac nisi.
        </Text>
      </div>
    )),
  );
