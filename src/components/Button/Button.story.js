import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Glyphicon } from 'react-bootstrap';

// import withTests from '../../../utils/withTests';

import Button from '.';

const generateButtonWithKnobs = (actionType, icon) => {
  const stretched = boolean('stretched', false);
  return (
    <div style={{ width: stretched ? '1000px' : 'auto' }}>
      <Button
        actionType={actionType}
        active={boolean('active', false)}
        disabled={boolean('disabled', false)}
        onClick={action((event) => console.log(event))}
        size={select('size', ['', 'large', 'small', 'xsmall'], '')}
        stretch={stretched}
      >
        <span>
          {icon && <Glyphicon glyph="star" />}
          My Awesome Button
        </span>
      </Button>
    </div>
  );
};

storiesOf('Button', module)
  // .addDecorator(withTests('index'))
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Default', withInfo()(() => generateButtonWithKnobs()))
  .add('Primary', withInfo()(() => generateButtonWithKnobs('primary')))
  .add('Success', withInfo()(() => generateButtonWithKnobs('success')))
  .add('Info', withInfo()(() => generateButtonWithKnobs('info')))
  .add('Warning', withInfo()(() => generateButtonWithKnobs('warning')))
  .add('Danger', withInfo()(() => generateButtonWithKnobs('danger')))
  .add('Link', withInfo()(() => generateButtonWithKnobs('link')));

storiesOf('Button/With Icon', module)
  // .addDecorator(withTests('index'))
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Default', withInfo()(() => generateButtonWithKnobs('default', true)))
  .add('Primary', withInfo()(() => generateButtonWithKnobs('primary', true)))
  .add('Success', withInfo()(() => generateButtonWithKnobs('success', true)))
  .add('Info', withInfo()(() => generateButtonWithKnobs('info', true)))
  .add('Warning', withInfo()(() => generateButtonWithKnobs('warning', true)))
  .add('Danger', withInfo()(() => generateButtonWithKnobs('danger', true)))
  .add('Link', withInfo()(() => generateButtonWithKnobs('link', true)));
