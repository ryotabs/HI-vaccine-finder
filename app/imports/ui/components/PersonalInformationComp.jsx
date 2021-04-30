import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PersonalInformationComp = ({ email, firstName, lastName, birthday, phoneNumber, nameChange, birthdayChange, phoneChange, onClick }) => {
  const today = new Date();

  return (
    <Form
      style={{ paddingLeft: 20 }}
    >
      <Grid width={15} columns={3}>
        <Grid.Column
          as={Form.Input}
          label='First Name'
          value={firstName}
          name='firstName'
          onChange={nameChange}
          required
          width={5}
        />
        <Grid.Column
          as={Form.Input}
          label='Last Name'
          value={lastName}
          name='lastName'
          onChange={nameChange}
          required
          width={5}
        />
        <Grid.Column width={3}>
          <Grid.Row style={{ fontSize: 13, marginBottom: 4 }}>
            <b>Birthday</b>
            <span style={{ color: 'red' }}> *</span>
          </Grid.Row>
          <Grid.Row stretched>
            <DatePicker
              selected={birthday}
              onChange={birthdayChange}
              maxDate={today}
            />
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Grid columns={2}>
        <Grid.Column
          as={Form.Input}
          label='E-mail Address'
          value={email}
          placeholder={email}
          name='email'
          readOnly
          required
          width={7}
        />
        <Grid.Column>
          <Grid.Row style={{ fontSize: 13, marginBottom: 4 }}>
            <b>Phone Number</b>
            <span style={{ color: 'red' }}> *</span>
          </Grid.Row>
          <Grid.Row>
            <Form.Input
              as={PhoneInput}
              inputStyle={{ textIndent: 30, width: 360, height: 38 }}
              disableDropdown
              country={'us'}
              value={phoneNumber}
              onChange={phoneChange}
              countryCodeEditable={false}
            />
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Button onClick={onClick} color='teal' content='Next'/>
    </Form>
  );
};

PersonalInformationComp.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthday: PropTypes.object.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  nameChange: PropTypes.func.isRequired,
  birthdayChange: PropTypes.func.isRequired,
  phoneChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PersonalInformationComp;
