import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';

import DrawerStyled from './DrawerStyled';
import OverlayStyled from './OverlayStyled';
import DrawerWrapperStyled from './DrawerWrapperStyled';
import DrawerHeader from './DrawerHeader';
import DrawerContentStyled from './DrawerContentStyled';

export const BODY_OPEN_CLASSNAME = 'Drawer--is-open';

/**
 * @typedef {Object} Props
 * @property {boolean} open
 * @property {React.ReactNode} content
 * @property {boolean} right
 * @property {number} width
 * @property {boolean} [unselectDrawerWhen]
 * @property {function} [onToggle]
 * @property {function} [children]
 * @property {React.ReactNode} [header]
 *
 * @extends {Component<Props>}
 */
class Drawer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    content: PropTypes.node.isRequired,
    right: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    unselectDrawerWhen: PropTypes.bool,
    onToggle: PropTypes.func,
    children: PropTypes.func,
    header: PropTypes.node,
  };

  static defaultProps = {
    open: false,
    right: false,
    unselectDrawerWhen: false,
    width: 300,
  };

  static DURATION = 500;
  static DELAY = 100;

  state = {
    isOpen: this.props.open || false,
  };

  componentDidMount() {
    this.bindEscKey();
  }

  componentDidUpdate(prevProps) {
    const { open, unselectDrawerWhen } = this.props;

    if (prevProps.open !== open && open !== this.state.isOpen) {
      this.toggleState();
    }

    if (open && prevProps.unselectDrawerWhen !== unselectDrawerWhen) {
      this.handleDrawerDepth();
    }
  }

  componentWillUnmount() {
    this.unbindEscKey();
  }

  onCloseEscape = (event) => {
    if (event.keyCode === 27) this.toggleState();
  };

  onOverlayClick = () => {
    this.toggleState();
  };

  handleCSSClasses = () => {
    const { isOpen } = this.state;

    if (isOpen) {
      document.body.classList.add(BODY_OPEN_CLASSNAME);
    } else {
      document.body.classList.remove(BODY_OPEN_CLASSNAME);
    }
  };

  toggleState = () => {
    const { onToggle } = this.props;
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.handleCSSClasses();

      if (!this.state.isOpen) {
        this.unbindEscKey();
      } else {
        this.bindEscKey();
      }

      if (onToggle) {
        onToggle(this.state.isOpen);
      }
    });
  };

  handleDrawerDepth = () => {
    const { unselectDrawerWhen } = this.props;

    if (unselectDrawerWhen) {
      return this.unbindEscKey();
    }

    return this.bindEscKey();
  };

  bindEscKey = () => {
    document.body.addEventListener('keyup', this.onCloseEscape);
  };

  unbindEscKey = () => {
    document.body.removeEventListener('keyup', this.onCloseEscape);
  };

  render() {
    const { children, right, content, header, width } = this.props;
    const { isOpen } = this.state;

    return (
      <Fragment>
        <DrawerWrapperStyled right={right}>
          <Fade
            when={isOpen}
            duration={Drawer.DURATION}
            delay={Drawer.DELAY}
            mountOnEnter
            unmountOnExit
            {...{ [right ? 'right' : 'left']: true }}
            style={{ position: 'relative' }}
          >
            <DrawerStyled width={width}>
              {header && (
                <DrawerHeader header={header} onClose={this.toggleState} />
              )}
              <DrawerContentStyled>{content}</DrawerContentStyled>
            </DrawerStyled>
          </Fade>
        </DrawerWrapperStyled>
        <OverlayStyled open={isOpen} onClick={this.onOverlayClick} />
        {children && children(this.state, this.toggleState)}
      </Fragment>
    );
  }
}

export default Drawer;
