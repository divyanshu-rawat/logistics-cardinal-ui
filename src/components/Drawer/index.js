import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';

import DrawerStyled from './DrawerStyled';
import OverlayStyled from './OverlayStyled';
import DrawerWrapperStyled from './DrawerWrapperStyled';
import DrawerHeader from './DrawerHeader';
import DrawerContentStyled from './DrawerContentStyled';

class Drawer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    content: PropTypes.node.isRequired,
    children: PropTypes.func.isRequired,
    right: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    header: PropTypes.node,
  };

  static defaultProps = {
    open: false,
    right: false,
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
    const { open } = this.props;

    if (prevProps.open !== open) {
      this.toggleState();
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

  toggleState = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (!this.state.isOpen) {
        this.unbindEscKey();
      } else {
        this.bindEscKey();
      }
    });
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
        {children(this.state, this.toggleState)}
      </Fragment>
    );
  }
}

export default Drawer;