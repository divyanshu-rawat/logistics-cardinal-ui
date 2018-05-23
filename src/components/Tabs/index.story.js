import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { withKnobs, color } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import ComposedTabs from '.';
import Text from '../Text';

storiesOf('ComposedTabs', module)
  .addDecorator(
    withTests(
      'Tabs/tests/index',
      'TabButton',
      'TabButtonList',
      'TabContainer',
      'TabContainerList',
    ),
  )
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add(
    'Simple',
    withInfo()(() => (
      <div style={{ width: '500px' }}>
        <ComposedTabs
          options={{
            forecast: (
              <Text as="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            ),
            history: (
              <Text as="p">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </Text>
            ),
          }}
        />
      </div>
    )),
  );
