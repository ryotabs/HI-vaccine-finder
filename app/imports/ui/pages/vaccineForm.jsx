import React from 'react';
import {
  Button,
  Container,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Grid,
  Header,
  Accordion, Popup,
} from 'semantic-ui-react';
import VaccineFormComp from '../components/VaccineFormComp';

const vaccineForm = () => {
  const columnStyle = { padding: '1rem' };

  const panels = [
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

  return (
    <Container style={{ padding: 20, margin: 20 }}>
      <Grid container columns={3}>
        <Grid.Column/>
        <Grid.Row>
          <Accordion
            fluid
            styled
            panels={panels}
            defaultActiveIndex={0}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default vaccineForm;
