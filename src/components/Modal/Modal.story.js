import React, { Fragment, Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';
import { COMPONENTS } from '../../../.storybook/sections';

import { Modal, ModalManager } from '.';
import Button from '../Button';

class ModalStory extends Component {
  state = {
    showModal: false,
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  onOpenModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { showModal } = this.state;

    return (
      <Fragment>
        <Button onClick={this.onOpenModal}>Click Me!</Button>
        <Modal
          showModal={showModal}
          handleCloseModal={this.onCloseModal}
          size={select('Size', ['default', 'small'], 'default')}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <Button
              actionType="primary"
              size="small"
              onClick={this.onCloseModal}
            >
              Close Me
            </Button>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

storiesOf(`${COMPONENTS}Modal`, module)
  .addDecorator(withTests('Modal/tests/Modal'))
  .add(
    'Default',
    withInfo({
      source: false,
      propTables: [ModalManager],
      propTablesExclude: [ModalStory, Button],
    })(() => <ModalStory />),
  );
