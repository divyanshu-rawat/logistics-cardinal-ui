import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormControl, FormGroup, Button } from 'react-bootstrap';

import ForecastAdjustmentPreviewTable from './ForecastAdjustmentPreviewTable';
import { StyledSelectFull } from './ForecastStyledSelect';
import reasonOptions from './forecastReasonOptions.json';

const FormDiv = styled('div')`
  .form-section {
    padding: 10px 0;
    .forecast-form-buttons,
    .forecast-form,
    .forecast-form-adjustments {
      display: flex;
      justify-content: space-between;
      > div {
        width: 49%;
      }
    }
    .forecast-form-adjustments {
      display: flex;
      justify-content: space-between;
      > div:first-of-type {
        padding-right: 10px;
      }
    }
    .forecast-form-reasons {
      display: block;
      > div {
        width: 100%;
      }
    }
    .dates {
      color: ${(props) => props.theme.inactive};
      line-height: 39px;
      padding: 8px;
      display: flex;
      justify-content: space-between;
      .time {
        min-width: 130px;
        text-align: right;
      }
    }
    label[for='adjustment'],
    label[for='comment'] {
      display: none;
    }
    .right-side {
      float: right;
    }
    .react-bs-container-body table {
      border-top: 1px solid #40464f;
      border-left: 1px solid #40464f;
      border-right: 1px solid #40464f;
      tr {
        border-bottom: 1px solid #40464f;
      }
    }
    textarea,
    input {
      padding: 5px 10px;
      line-height: 25px;
    }
    input.form-control {
      height: 32px;
    }
    .checkbox {
      line-height: 32px;
      margin: 0;
      input {
        margin-top: 10px;
      }
    }
    .forecast-form-buttons button {
      width: 160px;
    }
  }
`;

export function ForecastAdjustmentForm({
  filters,
  updateAdjustment,
  adjustment,
  onSave,
  onCancel,
}) {
  return (
    <FormDiv>
      <div className="form-section">
        <div className="forecast-form">
          <div>
            <div className="dates">
              <span>
                {adjustment.selectedDays.map((dayData) => (
                  <span key={`${dayData.dataObj.week}${dayData.dataObj.day}`}>
                    {dayData.date.format('ddd, MMM Do')};{' '}
                  </span>
                ))}
              </span>
              <span className="time">
                <span>
                  {filters.startTime} - {filters.endTime}
                </span>
              </span>
            </div>
            <div className="forecast-form-reasons form-group">
              <StyledSelectFull
                searchable={false}
                clearable={false}
                name="reason"
                title="Reason"
                placeholder="Reason"
                value={adjustment.reason}
                options={reasonOptions}
                onChange={(option) =>
                  updateAdjustment({ reason: option.value })
                }
              />
            </div>
            <FormGroup controlId="reasonDetail">
              <FormControl
                name="reasonDetail"
                title="Reason Detail"
                placeholder="Reason Detail"
                componentClass="textarea"
                value={adjustment.reasonDetail}
                onChange={(event) =>
                  updateAdjustment({ reasonDetail: event.target.value })
                }
              />
            </FormGroup>
            <div className="forecast-form-adjustments">
              <FormGroup controlId="adjustment">
                <FormControl
                  name="adjustment"
                  title="Adjustment %"
                  placeholder="Adjustment %"
                  type="number"
                  value={adjustment.adjustment}
                  onChange={(event) =>
                    updateAdjustment({
                      adjustment: parseInt(event.target.value, 10) || '',
                    })
                  }
                />
              </FormGroup>
              {/* Hide the Fix Adjustment, we will display it again in the future
                  <Checkbox
                    name="fixAdjustment"
                    title="Fix Adjustment"
                    placeholder="Fix Adjustment"
                    checked={adjustment.fixAdjustment}
                    onChange={(event) =>
                      updateAdjustment({ fixAdjustment: event.target.checked })
                    }
                  >
                    Fix Adjustment
                  </Checkbox>
                */}
              <StyledSelectFull
                searchable={false}
                clearable={false}
                name="appliesTo"
                title="Applies to..."
                placeholder="Applies to..."
                multi
                onChange={(options) => updateAdjustment({ appliesTo: options })}
                value={adjustment.appliesTo}
                options={[
                  { label: 'base', value: 'base' },
                  { label: 'd2', value: 'd2' },
                ]}
              />
            </div>
          </div>
          <div>
            <ForecastAdjustmentPreviewTable
              adjustment={adjustment.adjustment || 0}
              filters={filters}
              selectedDays={adjustment.selectedDays}
            />
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="forecast-form-buttons">
          <div>
            <Button bsSize="small" className="right-side" onClick={onCancel}>
              Cancel
            </Button>
          </div>
          <div>
            <Button bsSize="small" bsStyle="primary" onClick={onSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </FormDiv>
  );
}

ForecastAdjustmentForm.propTypes = {
  filters: PropTypes.object.isRequired,
  updateAdjustment: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  adjustment: PropTypes.object.isRequired,
};

export default ForecastAdjustmentForm;
