import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const VaccineInfoTable = (props) => {
  const rowValues = (info) => ((props.vaccineName === 'pfizer') ?
    <Table.Cell>{info.pfizer}</Table.Cell> :
    <Table.Cell>{info.moderna}</Table.Cell>);

  return (
    <Table basic='very' fixed>
      <Table.Body>
        {props.type.map((info, index) => (
          <Table.Row key={index}>
            <Table.Cell><b>{info.rowName}</b></Table.Cell>
            {rowValues(info)}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

VaccineInfoTable.propTypes = {
  type: PropTypes.array.isRequired,
  vaccineName: PropTypes.string.isRequired,
};

export default VaccineInfoTable;
