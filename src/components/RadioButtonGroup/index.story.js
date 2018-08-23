import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import withTests from '../../utils/withTests';

import { FORM } from '../../../.storybook/sections';

import RadioButtonGroup from '.';
import RadioButton from './RadioButton';

class RadioButtonGroupStory extends Component {
  state = {
    selectedValue: 'single',
  };

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { selectedValue } = this.state;

    return (
      <RadioButtonGroup
        name="foo"
        selectedValue={selectedValue}
        inline={boolean('inline', false)}
        onChange={this.handleChange}
      >
        <RadioButton id="single" value="single" label="Single" />
        <RadioButton id="married" value="married" label="Married" />
      </RadioButtonGroup>
    );
  }
}

storiesOf(`${FORM}RadioButtonGroup`, module)
  .addDecorator(
    withTests(
      'RadioButtonGroup/tests/index',
      'RadioButton/tests/index',
      'RadioButton/tests/RadioButton',
      'RadioButton/tests/RadioButtonStyled',
    ),
  )
  .add(
    'Simple',
    withInfo({
      propTables: [RadioButtonGroup, RadioButton],
      propTablesExclude: [RadioButtonGroupStory],
    })(() => <RadioButtonGroupStory />),
  );
