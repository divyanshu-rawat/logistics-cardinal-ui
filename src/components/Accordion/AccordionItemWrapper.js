import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import AccordionItemHeader from './AccordionItemHeader';
import AccordionItemContent from './AccordionItemContent';

export const AccordionItemDividerStyled = styled('div')`
  border-bottom: 2px solid #2c3037;
`;
class AccordionItemWrapper extends PureComponent {
  static propTypes = {
    registerComponent: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
    content: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    toggleItem: PropTypes.func.isRequired,
    expandOnInit: PropTypes.bool.isRequired,
  };

  static ANIMATION_DELAY = 400;
  static ANIMATION_DURATION = 700;

  componentDidMount() {
    const { registerComponent, id, expandOnInit } = this.props;
    registerComponent(id, expandOnInit);
  }

  render() {
    const { items, toggleItem, id, title, content } = this.props;
    return (
      <AccordionItemDividerStyled>
        <AccordionItemHeader action={toggleItem(id)} open={!!items[id]}>
          {title}
        </AccordionItemHeader>
        <Fade
          delay={AccordionItemWrapper.ANIMATION_DELAY}
          duration={AccordionItemWrapper.ANIMATION_DURATION}
          collapse
          when={!!items[id]}
        >
          <AccordionItemContent>{content}</AccordionItemContent>
        </Fade>
      </AccordionItemDividerStyled>
    );
  }
}

export default AccordionItemWrapper;
