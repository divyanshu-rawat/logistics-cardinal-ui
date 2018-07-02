import React from 'react';
import PropTypes from 'prop-types';
import { Pie as RCPie } from 'recharts';

import { SIZES } from '../../utils/constants';

class Pie extends RCPie {
  static propTypes = {
    ...RCPie.propTypes,
    /**
     * Size of the inner radius
     */
    innerRadiusSize: PropTypes.oneOf(Object.values(SIZES)).isRequired,
    /**
     * Size of the outer radius
     */
    outerRadiusSize: PropTypes.oneOf(Object.values(SIZES)).isRequired,
    /**
     * Data that contains an array of objects
     */
    data: PropTypes.array.isRequired,
    /**
     * Key of the objects
     */
    dataKey: PropTypes.string.isRequired,
    /**
     * Children which contains Cell components
     */
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...RCPie.defaultProps,
    innerRadiusSize: 'sm',
    outerRadiusSize: 'lg',
  };

  static getRadiusSize = (size) => {
    let percentage;

    switch (size) {
      case SIZES.lg:
        percentage = '100%';
        break;
      case SIZES.md:
        percentage = '85%';
        break;
      case SIZES.sm:
        percentage = '70%';
        break;
      default:
        percentage = '55%';
    }

    return percentage;
  };

  render() {
    const { data, dataKey, children, ...props } = this.props;

    const innerRadiusSize = Pie.getRadiusSize(props.innerRadiusSize);
    const outerRadiusSize = Pie.getRadiusSize(props.outerRadiusSize);

    return (
      <RCPie
        data={data}
        dataKey={dataKey}
        innerRadius={innerRadiusSize}
        outerRadius={outerRadiusSize}
        {...props}
      >
        {children}
      </RCPie>
    );
  }
}

export default Pie;
