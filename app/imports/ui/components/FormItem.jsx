import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class FormItem extends React.Component {
  render() {
    return (
      <div>
        <Table.Row>
          <Table.Cell>Are you feeling sick today?</Table.Cell>
          <Table.Cell>{this.props.formCollections.feelSick ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Have you received a vaccine dose before?</Table.Cell>
          <Table.Cell>{this.props.formCollections.vaccinated ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>If yes, which one?</Table.Cell>
          <Table.Cell>{this.props.formCollections.vaccineShot.join(' ')}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Allergies relating to vaccines.</Table.Cell>
          <Table.Cell>{this.props.formCollections.allergies.join(', ')}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Have you ever had an allergic reaction to any other vaccines.</Table.Cell>
          <Table.Cell>{this.props.formCollections.allergiesOther ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Have you received any vaccine in the last 14 days?</Table.Cell>
          <Table.Cell>{this.props.formCollections.recentVaccine ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Have you ever tested positive for covid-19?</Table.Cell>
          <Table.Cell>{this.props.formCollections.covidPositive ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Have you received antibody therapy as a treatment for covid-19?</Table.Cell>
          <Table.Cell>{this.props.formCollections.antiBodyTreatment ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Do you have a weakened immune system?</Table.Cell>
          <Table.Cell>{this.props.formCollections.weakenedImmuneSys ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Do you have a bleeding disorder or are you taking a blood thinner?</Table.Cell>
          <Table.Cell>{this.props.formCollections.bloodDisorder ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Pregnant/Breastfeeding</Table.Cell>
          <Table.Cell>{this.props.formCollections.pregnant ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Do you have dermal fillers?</Table.Cell>
          <Table.Cell>{this.props.formCollections.dermalFillers ? 'yes' : 'no'}</Table.Cell>
        </Table.Row>
      </div>
    );
  }
}

// Require a document to be passed to this component.
FormItem.propTypes = {
  formCollections: PropTypes.shape({
    feelSick: PropTypes.bool,
    vaccinated: PropTypes.bool,
    vaccineShot: PropTypes.array,
    allergies: PropTypes.array,
    allergiesOther: PropTypes.bool,
    recentVaccine: PropTypes.bool,
    covidPositive: PropTypes.bool,
    antiBodyTreatment: PropTypes.bool,
    weakenedImmuneSys: PropTypes.bool,
    bloodDisorder: PropTypes.bool,
    pregnant: PropTypes.bool,
    dermalFillers: PropTypes.bool,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(FormItem);
