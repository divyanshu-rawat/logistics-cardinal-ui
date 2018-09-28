import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Modal } from '..';
import { rooster } from '../../../themes/index';

import { modalSizes } from '../constants';

const onCloseModalFn = jest.fn();

const renderComponent = ({ size = 'default', showModal = false }) =>
  shallow(
    <Modal
      showModal={showModal}
      handleCloseModal={onCloseModalFn}
      size={size}
      theme={rooster}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <p>Close Me</p>
    </Modal>,
  );

describe('<Modal />', () => {
  it('should render the component', () => {
    const renderedComponent = renderComponent({});
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should open the modal with showModal prop set as true', () => {
    const renderedComponent = renderComponent({ showModal: true });
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should handle modal with small size', () => {
    const renderedComponent = renderComponent({
      size: modalSizes.small,
      showModal: true,
    });
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
