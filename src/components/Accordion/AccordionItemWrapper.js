import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import AccordionItemHeader from './AccordionItemHeader';
import AccordionItemContent from './AccordionItemContent';

export const AccordionItemDividerStyled = styled('div')`
  border-bottom: 2px solid ${({ theme }) => theme.accordionDividerBorderColor};
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
    animationDuration: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { registerComponent, id, expandOnInit } = this.props;
    registerComponent(id, expandOnInit);
  }

  render() {
    const {
      items,
      toggleItem,
      id,
      title,
      content,
      animationDuration,
    } = this.props;

    return (
      <AccordionItemDividerStyled>
        <AccordionItemHeader action={toggleItem(id)} open={!!items[id]}>
          {title}
        </AccordionItemHeader>
        <Fade duration={animationDuration} collapse when={!!items[id]}>
          <AccordionItemContent>{content}</AccordionItemContent>
        </Fade>
      </AccordionItemDividerStyled>
    );
  }
}

export default AccordionItemWrapper;
