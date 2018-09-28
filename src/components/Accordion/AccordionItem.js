import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import AccordionItemWrapper from './AccordionItemWrapper';

import AccordionContext from './Context';

class AccordionItem extends PureComponent {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    expandOnInit: PropTypes.bool.isRequired,
    animationDuration: PropTypes.number.isRequired,
  };

  static defaultProps = {
    expandOnInit: false,
    animationDuration: 300,
  };

  state = {
    id: shortId.generate(),
  };

  render() {
    const { title, children, expandOnInit, animationDuration } = this.props;
    const { id } = this.state;

    return (
      <AccordionContext.Consumer>
        {({ items, toggleItem, registerComponent }) => (
          <AccordionItemWrapper
            items={items}
            title={title}
            content={children}
            toggleItem={toggleItem}
            animationDuration={animationDuration}
            registerComponent={registerComponent}
            expandOnInit={expandOnInit}
            id={id}
          />
        )}
      </AccordionContext.Consumer>
    );
  }
}

export default AccordionItem;
