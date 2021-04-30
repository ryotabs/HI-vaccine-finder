import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const FAQ = (props) => (
  <Table basic='very' fixed>
    <Table.Body>
      {props.type.map((info, index) => (
        <Table.Row key={index}>
          <Table.Cell><b>{info.rowName}</b></Table.Cell>
          <Table.Cell>{info.pfizer}</Table.Cell>
          <Table.Cell>{info.moderna}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

FAQ.propTypes = {
  type: PropTypes.array.isRequired,
};

export default FAQ;
