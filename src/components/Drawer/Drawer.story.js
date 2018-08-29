import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { color, boolean } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { COMPONENTS } from '../../../.storybook/sections';

import Button from '../Button';
import ComposedTabs from '../Tabs';
import IDCard from '../IDCard';
import Text from '../Text';
import Drawer from '.';

const Header = <IDCard name="Teri Mitchell" info="Rider Captain" />;

const HorizontalTab = (
  <div style={{ position: 'relative', width: '700px', height: '100%' }}>
    <ComposedTabs
      mode="vertical"
      options={{
        forecast: (
          <Text as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        ),
        history: (
          <Text as="p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </Text>
        ),
      }}
    />
  </div>
);

storiesOf(`${COMPONENTS}Drawer`, module)
  .addDecorator(withTests('Drawer/tests/Drawer'))
  .add(
    'Simple Controlled by State',
    withInfo()(() => (
      <div style={{ width: '100%', height: '100%' }}>
        <Drawer
          header={Header}
          open={boolean('Open?', false)}
          right={boolean('Right?', true)}
          content={HorizontalTab}
        />
      </div>
    )),
  )
  .add(
    'With Render Props',
    withInfo()(() => (
      <div style={{ width: '100%', height: '100%' }}>
        <Drawer
          header={Header}
          open={boolean('Open?', false)}
          right={boolean('Right?', true)}
          content={HorizontalTab}
        >
          {({ isOpen }, toggleDrawer) => (
            <Button onClick={toggleDrawer}>Click me!</Button>
          )}
        </Drawer>
      </div>
    )),
  );
