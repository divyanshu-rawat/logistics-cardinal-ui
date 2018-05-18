import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '..';

const onClickFn = jest.fn();

const renderedComponent = ({
  actionType = 'default',
  active = false,
  disabled = false,
  size = '',
  stretch = false,
}) =>
  shallow(
    <Button
      actionType={actionType}
      active={active}
      disabled={disabled}
      onClick={onClickFn}
      size={size}
      stretch={stretch}
    >
      Some Awesome Text
    </Button>,
  );

describe('<Button />', () => {
  describe('Default Button', () => {
    it('should render a default button', () => {
      const tree = toJson(renderedComponent({}));
      expect(tree).toMatchSnapshot();
    });

    it('should render a default button with different attributes from previous time', () => {
      const tree = toJson(
        renderedComponent({
          active: true,
          disabled: true,
          size: 'large',
          stretch: true,
        }),
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Primary button', () => {
    it('should render a primary button', () => {
      const tree = toJson(renderedComponent({}));
      expect(tree).toMatchSnapshot();
    });

    it('should render a primary button with different attributes from previous time', () => {
      const tree = toJson(
        renderedComponent({
          active: true,
          disabled: true,
          size: 'large',
          stretch: true,
        }),
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Success button', () => {
    it('should render a success button', () => {
      const tree = toJson(renderedComponent({}));
      expect(tree).toMatchSnapshot();
    });

    it('should render a success button with different attributes from previous time', () => {
      const tree = toJson(
        renderedComponent({
          active: true,
          disabled: true,
          size: 'large',
          stretch: true,
        }),
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Info button', () => {
    it('should render a info button', () => {
      const tree = toJson(renderedComponent({}));
      expect(tree).toMatchSnapshot();
    });

    it('should render a info button with different attributes from previous time', () => {
      const tree = toJson(
        renderedComponent({
          active: true,
          disabled: true,
          size: 'large',
          stretch: true,
        }),
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Warning button', () => {
    it('should render a warning button', () => {
      const tree = toJson(renderedComponent({}));
      expect(tree).toMatchSnapshot();
    });

    it('should render a warning button with different attributes from previous time', () => {
      const tree = toJson(
        renderedComponent({
          active: true,
          disabled: true,
          size: 'large',
          stretch: true,
        }),
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Danger button', () => {
    it('should render a danger button', () => {
      const tree = toJson(renderedComponent({}));
      expect(tree).toMatchSnapshot();
    });

    it('should render a danger button with different attributes from previous time', () => {
      const tree = toJson(
        renderedComponent({
          active: true,
          disabled: true,
          size: 'large',
          stretch: true,
        }),
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Link button', () => {
    it('should render a link button', () => {
      const tree = toJson(renderedComponent({}));
      expect(tree).toMatchSnapshot();
    });

    it('should render a link button with different attributes from previous time', () => {
      const tree = toJson(
        renderedComponent({
          active: true,
          disabled: true,
          size: 'large',
          stretch: true,
        }),
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
