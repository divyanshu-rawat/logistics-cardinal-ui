import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import IDCardStyled from './IDCardStyled';
import Avatar from '../Avatar';
import Heading from '../Heading';
import Spacing from '../Spacing';
import Text from '../Text';

const resetMarginLeft = {
  marginLeft: 0,
};

export const IDCard = ({ imageSrc, name, info, theme }) => (
  <IDCardStyled>
    <Spacing style={{ ...resetMarginLeft }} right>
      <Avatar src={imageSrc} />
    </Spacing>
    <Spacing style={{ ...resetMarginLeft }}>
      <Heading
        as="h1"
        style={{
          marginBottom: 0,
          lineHeight: 1,
          fontWeight: theme.fontWeight.light,
        }}
      >
        {name}
      </Heading>
      <Text
        margin="0"
        style={{
          color: 'white',
          opacity: 0.6,
          fontSize: theme.fontSize.bit,
          fontWeight: theme.fontWeight.light,
        }}
      >
        {info}
      </Text>
    </Spacing>
  </IDCardStyled>
);

IDCard.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  imageSrc: PropTypes.string,
};

export default withTheme(IDCard);
