import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { noop } from 'lodash';

import { Forecast } from '../index';
import { charts, weekDates, tableValues } from './dataBasedOnFixtures';
import { initialState } from '../reducer';

describe('<Forecast />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <Forecast
        getForecastAction={noop}
        updateForecastFiltersAction={noop}
        getZoneIdsAction={noop}
        updateSelectedDaysForAdjustment={noop}
        getAdjustmentsAction={noop}
        saveAdjustmentAction={noop}
        saveAdjustmentStatusAction={noop}
        charts={charts}
        weekDates={weekDates}
        tableValues={tableValues}
        zones={[{ label: 'bergen$center', value: 'bergen$center' }]}
        filters={{ ...initialState.filters, zoneIds: ['bergen$center'] }}
        selectedCity={{ id: 10, name: 'Bergen' }}
        biggestOrdersNumber={67}
        biggestTotalValue={295}
        colors={{}}
        adjustment={initialState.adjustment}
        updateAdjustment={noop}
        updateHistoryFiltersAction={noop}
        history={initialState.history}
        forecastNeedsUpdate={false}
        originalData={{}}
        cancelAdjustmentAction={noop}
      />,
    );
  });

  it('should render the component', () => {
    const tree = toJson(renderedComponent);
    expect(tree).toMatchSnapshot();
  });
});
