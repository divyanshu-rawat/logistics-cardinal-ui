import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BootstrapTable } from 'react-bootstrap-table';

export function Table({ className, children, tableRef, ...props }) {
  return (
    <BootstrapTable
      pagination
      striped
      bordered={false}
      className={className}
      ref={tableRef}
      {...props}
    >
      {children}
    </BootstrapTable>
  );
}

Table.propTypes = {
  className: PropTypes.string.isRequired,
  tableRef: PropTypes.func,
  children: PropTypes.node,
};

export default styled(Table)`
  margin-top: 0;

  .pagination {
    margin: 0;
  }

  .react-bs-table .react-bs-container-header .table > tbody > tr > td,
  .react-bs-table .react-bs-container-header .table > tbody > tr > th,
  .react-bs-table .react-bs-container-header .table > tfoot > tr > td,
  .react-bs-table .react-bs-container-header .table > tfoot > tr > th,
  .react-bs-table .react-bs-container-header .table > thead > tr > td,
  .react-bs-table .react-bs-container-header .table > thead > tr > th {
    line-height: 39px;
    vertical-align: top !important;
  }

  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th {
    vertical-align: middle;
  }

  .react-bs-table .react-bs-container-header .table > thead {
    background-color: ${(props) => props.theme.greyMedium};
  }

  .react-bs-table .react-bs-container-header > table > thead > tr > th .filter {
    padding: 0 5px;
    line-height: 32px;
  }

  .caret,
  .dropdown .caret,
  .dropup .caret {
    color: ${(props) => props.theme.brandPrimary} !important;
  }
`;
