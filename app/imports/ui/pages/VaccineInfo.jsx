import React from 'react';
import { Accordion, Button, Container, Grid, Header, Message, Popup } from 'semantic-ui-react';
import VaccineInfoTable from '../components/VaccineInfoTable';

const VaccineInfo = () => {
  const columnStyle = { padding: '1rem' };

  const generalInfo = [
    { rowName: 'Name', pfizer: 'BNT162b2', moderna: 'mRNA-1273' },
    { rowName: 'Manufacturer', pfizer: 'Pfizer, Inc., and BioNTech', moderna: 'ModernaTX, Inc.' },
    { rowName: 'Type of Vaccine', pfizer: 'mRNA', moderna: 'mRNA' },
    { rowName: 'Number of Shots', pfizer: '2 shots, 21 days apart', moderna: '2 shots, one month (28 days) apart' },
    { rowName: 'How It\'s Given', pfizer: 'Shot in the muscle of the upper arm', moderna: 'Shot in the muscle of the upper arm' },
    { rowName: 'Does NOT Contain', pfizer: 'Eggs, preservatives, latex', moderna: 'Eggs, preservatives, latex' },
  ];

  const eligibility = [
    {
      rowName: 'You can take it if you...',
      pfizer: 'are 16 years old or older',
      moderna: 'are 18 years old or older',
    },
    {
      rowName: 'You CAN\'T take it if you...',
      pfizer: 'have had a severe allergic reaction (anaphylaxis) or an immediate ' +
          'allergic reaction to any ingredient in an mRNA COVID-19 vaccine or after ' +
          'getting the first dose of the vaccine.',
      moderna: 'have had a severe allergic reaction (anaphylaxis) or an immediate ' +
          'allergic reaction to any ingredient in an mRNA COVID-19 vaccine or after ' +
          'getting the first dose of the vaccine.',
    },
  ];

  const possibleSideEffects = [
    {
      rowName: 'In the arm...',
      pfizer: 'pain, redness, swelling',
      moderna: 'pain, redness, swelling',
    },
    {
      rowName: 'The rest of your body...',
      pfizer: 'tiredness, headache, muscle pain, chills, fever, nausea',
      moderna: 'tiredness, headache, muscle pain, chills, fever, nausea',
    },
  ];

  const panels = [
    {
      key: 'general-info',
      title: 'General Information',
      content: {
        content: (
          <VaccineInfoTable type={generalInfo} />
        ),
      },
    },
    {
      key: 'eligibility',
      title: 'Eligibility',
      content: {
        content: (
          <VaccineInfoTable type={eligibility} />
        ),
      },
    },
    {
      key: 'possible-side-effects',
      title: 'Possible Side Effects',
      content: {
        content: (
          <VaccineInfoTable type={possibleSideEffects} />
        ),
      },
    },
    {
      key: 'more-information',
      title: 'More Information',
      content: {
        content: (
          <Grid columns={3}>
            <Grid.Column/>
            <Grid.Column>
              <a href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Pfizer-BioNTech.html'>
                Pfizer-BioNTech COVID-19 Vaccine Overview and Safety (CDC)
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Moderna.html'>
                Moderna COVID-19 Vaccine Overview and Safety (CDC)
              </a>
            </Grid.Column>
          </Grid>
        ),
      },
    },
  ];

  return (
    <Container style={{ padding: 20, margin: 20 }}>
      <Grid container columns={3}>
        <Grid.Column/>
        <Grid.Column style={columnStyle}>
          <Header
            size='huge'
            content='PFIZER-BIONTECH'
            textAlign='center'
          />
        </Grid.Column>
        <Grid.Column style={columnStyle}>
          <Header
            size='huge'
            content='MODERNA'
            textAlign='center'
          />
        </Grid.Column>
        <Grid.Row>
          <Accordion
            fluid
            styled
            panels={panels}
            defaultActiveIndex={0}
          />
        </Grid.Row>
      </Grid>

      <Grid container style={{ padding: '1rem' }} textAlign='center'>
        <Popup
          content='This will send you to form'
          on='click'
          pinned
          trigger={
            <Button
              size='huge'
              content='Schedule An Appointment Now'
              color='teal'
            />
          }
        />
      </Grid>

      <Grid container>
        <Message warning>
          <Message.Header>About Johnson & Johnson’s Janssen COVID-19 Vaccine</Message.Header>
          <Message.Content>
            As of April 13, 2021 (Tuesday), Hawai&apos;i has stopped administering
            the J&J vaccine following the recommendation of the Centers for Disease
            Control and Prevention (CDC) and the U.S. Food and Drug Administration
            to pause the use of said vaccine &quot;out of an abundance of caution&quot;.
            <br/>
            <br/>
            For more info:
            <br/>
            <a href='https://www.hawaiinewsnow.com/2021/04/13/federal-agencies-recommend-pause-jj-vaccine-longs-cancel-appointments/'>
              Hawaii stops administering single-dose J&J vaccine amid federal ‘pause’
            </a>
            <br/>
            <a href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/JJUpdate.html'>
              Recommendation to Pause Use of Johnson & Johnson’s Janssen COVID-19 Vaccine
            </a>
          </Message.Content>
        </Message>
      </Grid>
    </Container>
  );
};

export default VaccineInfo;
