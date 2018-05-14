import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TimeOptionsMock } from '../../../stories/utils';
import PeriodSelector from '..';

const onChangeFn = jest.fn();

const renderedComponent = (values = []) =>
  shallow(
    <PeriodSelector
      options={TimeOptionsMock}
      names={['start_at', 'end_at']}
      placeholders={['Start At', 'End At']}
      onChange={onChangeFn}
      initialValues={values}
    />
  );

describe('<PeriodSelector />', () => {
  it('should render the component', () => {
    const tree = toJson(renderedComponent());
    expect(tree).toMatchSnapshot();
  });

  it('should init component with given `value` prop', () => {
    const tree = toJson(renderedComponent(['09:00:00', '18:00:00']));
    expect(tree).toMatchSnapshot();
  });
});
