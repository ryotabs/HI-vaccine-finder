import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import {
  Container,
  Grid,
  Accordion, Loader, Header, Divider,
} from 'semantic-ui-react';
import VaccineFormComp from '../components/VaccineFormComp';
import PersonalInformationComp from '../components/PersonalInformationComp';

const vaccineForm = ({ owner, ready }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const today = new Date();
  const [birthday, setBirthday] = useState(today);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (e, { name, value }) => {
    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
  };

  const handleBirthdayChange = (e) => setBirthday(e);
  const handlePhoneChange = (e) => setPhoneNumber(e);

  const handlePINext = () => setActiveIndex(1);

  const panels = [
    {
      key: 'personal-info',
      title: 'Personal Information',
      content: {
        content: (
          <PersonalInformationComp
            email={owner}
            firstName={firstName}
            lastName={lastName}
            birthday={birthday}
            phoneNumber={phoneNumber}
            nameChange={handleNameChange}
            birthdayChange={handleBirthdayChange}
            phoneChange={handlePhoneChange}
            onClick={handlePINext}
          />
        ),
      },
    },
    {
      key: 'general-info',
      title: 'General Information',
      content: {
        content: (
          <VaccineFormComp/>
        ),
      },
    },
  ];
  /*
 Shows user what they are inputting before calling
  imported methods getPlayerData and getWinLoss on the results
*/

  return ready ? (
    <Container style={{ padding: 20, margin: 20 }}>
      <Header as='h1' textAlign='center'>Schedule an Appointment</Header>
      <Divider hidden/>
      <Grid container>
        <Accordion
          fluid
          styled
          panels={panels}
          defaultActiveIndex={0}
          activeIndex={activeIndex}
          onTitleClick={(e, { value }) => setActiveIndex(value)}
        />
      </Grid>
    </Container>
  ) : <Loader active>Getting data</Loader>;
};

vaccineForm.propTypes = {
  owner: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const owner = Meteor.user() ? Meteor.user().username : '';
  const ready = owner !== '';
  return {
    owner,
    ready,
  };
})(vaccineForm);
