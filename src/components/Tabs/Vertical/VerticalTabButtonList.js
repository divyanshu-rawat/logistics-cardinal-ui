import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Fade } from 'react-reveal';

import VerticalTabButtonStyled from './VerticalButtonStyled';
import Icon from '../../Icons';
import Text from '../../Text';

export const VerticalTabButtonList = ({
  options,
  activeTab,
  onClick,
  theme,
}) => (
  <Fragment>
    {options.map((item, key) => (
      <VerticalTabButtonStyled
        key={`ComposedVerticalTabButton-${item}`}
        isActive={activeTab === key}
        onClick={onClick(key)}
      >
        <Text
          margin="0"
          style={{ flex: 1, textDecoration: 'none' }}
          truncate
          color={
            activeTab === key
              ? theme.verticalTabButtonActiveTextColor
              : theme.verticalTabButtonTextColor
          }
        >
          {item}
        </Text>
        <Fade left duration={300} when={activeTab === key}>
          <span>
            <Icon.ArrowRight />
          </span>
        </Fade>
      </VerticalTabButtonStyled>
    ))}
  </Fragment>
);

VerticalTabButtonList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(VerticalTabButtonList);
