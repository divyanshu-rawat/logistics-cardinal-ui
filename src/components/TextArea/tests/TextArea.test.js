import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TextArea, TextAreaStyled } from '../TextArea';

describe('<TextArea />', () => {
  it('should render the <TextArea /> component', () => {
    const tree = toJson(shallow(<TextArea placeholder="" hasError={false} />));
    expect(tree).toMatchSnapshot();
  });

  it('should render the <TextAreaStyled />', () => {
    const tree = toJson(shallow(<TextAreaStyled theme={{}} />));
    expect(tree).toMatchSnapshot();
  });
});
