import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

// import { TimeOptionsMock } from './utils';
// import withTests from './withTests';
import withBackground from './withBackground';

import Prediction from '../components/Datatable/Prediction';

storiesOf('Prediction', module)
  // .addDecorator(withTests('index'))
  .addDecorator(withBackground)
  .addDecorator(centered)
  .add('With forecast', withInfo()(() => <Prediction />))
  .add('With Actuals', withInfo()(() => <Prediction />));
