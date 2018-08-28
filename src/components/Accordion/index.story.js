import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { COMPONENTS } from '../../../.storybook/sections';

import Accordion from '.';
import AccordionItem from './AccordionItem';

storiesOf(`${COMPONENTS}Accordion`, module)
  .addDecorator(
    withTests(
      'Accordion/tests/Accordion',
      'Accordion/tests/AccordionItemContent',
      'Accordion/tests/AccordionItemContentStyled',
      'Accordion/tests/AccordionItemDividerStyled',
      'Accordion/tests/AccordionItemHeader',
      'Accordion/tests/AccordionItemHeaderStyled',
      'Accordion/tests/AccordionItemWrapper',
    ),
  )
  .add(
    'Simple',
    withInfo()(() => (
      <div
        style={{
          background: '#343A42',
          padding: '0 20px',
          width: '500px',
          height: '400px',
        }}
      >
        <Accordion multiple={false}>
          <AccordionItem title="About">
            <p>Some dumb text...</p>
          </AccordionItem>
          <AccordionItem title="Address">
            <p>Some dumb text...</p>
          </AccordionItem>
        </Accordion>
      </div>
    )),
  )
  .add(
    'Allow Multiple',
    withInfo()(() => (
      <div
        style={{
          background: '#343A42',
          padding: '0 20px',
          width: '500px',
          height: '400px',
        }}
      >
        <Accordion>
          <AccordionItem title="About">
            <p>Some dumb text...</p>
          </AccordionItem>
          <AccordionItem title="Address">
            <p>Some dumb text...</p>
          </AccordionItem>
        </Accordion>
      </div>
    )),
  )
  .add(
    'Pre expanded Children',
    withInfo()(() => (
      <div
        style={{
          background: '#343A42',
          padding: '0 20px',
          width: '500px',
          height: '400px',
        }}
      >
        <Accordion>
          <AccordionItem title="About">
            <p>Some dumb text...</p>
          </AccordionItem>
          <AccordionItem title="Address" expandOnInit>
            <p>Some dumb text...</p>
          </AccordionItem>
        </Accordion>
      </div>
    )),
  );
