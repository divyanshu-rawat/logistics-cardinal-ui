import React from 'react';
import PropTypes from 'prop-types';

import AvatarStyled from './AvatarStyled';
import PlaceholderPerson from './placeholder-person.png';

const Avatar = ({ src, size }) => <AvatarStyled src={src} size={size} />;

Avatar.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: PlaceholderPerson,
  size: 'md',
};

export default Avatar;
