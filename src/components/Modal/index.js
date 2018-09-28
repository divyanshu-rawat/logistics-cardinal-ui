import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { withTheme } from 'styled-components';

import { modalSizes, modalClassName, modalOverlayClassName } from './constants';

class ModalManager extends PureComponent {
  static sizes = modalSizes;

  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired,
    size: PropTypes.oneOf(Object.values(ModalManager.sizes)),
    shouldCloseOnOverlayClick: PropTypes.bool.isRequired,
    shouldCloseOnEsc: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    showModal: false,
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true,
    size: ModalManager.sizes.default,
  };

  static modalClassName = modalClassName;
  static overlayClassName = modalOverlayClassName;

  render() {
    const {
      children,
      showModal,
      theme,
      handleCloseModal,
      shouldCloseOnEsc,
      shouldCloseOnOverlayClick,
      size,
    } = this.props;

    const styles = {
      content: {
        ...(size === ModalManager.sizes.small && {
          width: theme.modalWidthSmall,
        }),
      },
    };

    return (
      <ReactModal
        isOpen={showModal}
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        className={ModalManager.modalClassName}
        shouldCloseOnEsc={shouldCloseOnEsc}
        closeTimeoutMS={250}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        style={styles}
        overlayClassName={ModalManager.overlayClassName}
      >
        {children}
      </ReactModal>
    );
  }
}

const Modal = withTheme(ModalManager);

export { Modal, ModalManager };
