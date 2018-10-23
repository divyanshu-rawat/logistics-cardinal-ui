import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Hr, HrStyled } from '../Hr';

describe('<Hr />', () => {
  it('should render the <Hr /> component', () => {
    const tree = toJson(shallow(<Hr />));
    expect(tree).toMatchSnapshot();
  });

  it('should render the <HrStyled />', () => {
    const tree = toJson(shallow(<HrStyled theme={{}} />));
    expect(tree).toMatchSnapshot();
  });
});
