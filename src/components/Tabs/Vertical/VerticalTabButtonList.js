import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import VerticalTabButtonStyled from './VerticalButtonStyled';
import Icon from '../../Icons';
import Text from '../../Text';

const VerticalTabButtonList = ({ options, activeTab, onClick, theme }) => (
  <Fragment>
    {options.map((item, key) => (
      <VerticalTabButtonStyled
        key={`ComposedVerticalTabButton-${item}`}
        isActive={activeTab === key}
        onClick={onClick(key)}
      >
        <Text
          margin="0"
          style={{ flex: 1 }}
          truncate
          color={
            activeTab === key ? theme.colors.primary100 : theme.colors.white
          }
        >
          {item}
        </Text>
        <span>
          <Icon.ArrowRight />
        </span>
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
