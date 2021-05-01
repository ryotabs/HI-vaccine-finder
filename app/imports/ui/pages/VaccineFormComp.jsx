import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField } from 'uniforms-semantic';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import swal from 'sweetalert';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Meteor } from 'meteor/meteor';
import { FormCollections } from '../../api/stuff/FormCollection';

const formSchema = new SimpleSchema({
  feelSick: Boolean,
  vaccinated: Boolean,
  vaccineShot: [{ type: String, optional: true }],
  allergies: [{ type: String, optional: true }],
  allergiesOther: Boolean,
  recentVaccine: Boolean,
  covidPositive: Boolean,
  antiBodyTreatment: Boolean,
  weakenedImmuneSys: Boolean,
  bloodDisorder: Boolean,
  pregnant: Boolean,
  dermalFillers: Boolean,
});

const bridge = new SimpleSchema2Bridge(formSchema);

class VaccineFormComp extends React.Component {

  submit(data, formRef) {
    const {
      feelSick,
      vaccinated,
      vaccineShot,
      allergies,
      allergiesOther,
      recentVaccine,
      covidPositive,
      antiBodyTreatment,
      weakenedImmuneSys,
      bloodDisorder,
      pregnant,
      dermalFillers,
    } = data;

    console.log(data);

    const owner = Meteor.user().username;
    FormCollections.collection.insert({
      owner,
      feelSick,
      vaccinated,
      vaccineShot,
      allergies,
      allergiesOther,
      recentVaccine,
      covidPositive,
      antiBodyTreatment,
      weakenedImmuneSys,
      bloodDisorder,
      pregnant,
      dermalFillers,
    },
    (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Item added successfully', 'success');
        formRef.reset();
      }
    });
  }

  render() {
    let fRef = null;
    return (
      <Container className='vaccine-form'>
        <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
          <Segment>
            <Calendar/>
          </Segment>
          <Segment>
            <SelectField
              checkboxes
              label='Are you feeling sick today?'
              name='feelSick'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='vaccinated'
              label='Have you received a vaccine dose before?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='vaccineShot'
              label ='If yes, which one?'
              options={[{ label: 'Pfizer', value: 'Pfizer' }, { label: 'Moderna', value: 'Moderna' }]}
            />
            <SelectField
              checkboxes
              name='allergies'
              label ='Do you have an allergic reaction to the following?'
              options=
                {[
                  { label: 'Polyethylene glycol', value: 'Polyethylene glycol' },
                  { label: 'Polysorbate', value: 'Polysorbate' },
                  { label: 'A previous vaccine dose', value: 'Previous vaccine dose' },
                  { label: 'N/A', value: 'N/A' },
                ]}
            />
            <SelectField
              checkboxes
              name='allergiesOther'
              label='Have you ever had an allergic reaction to any other vaccines?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='recentVaccine'
              label='Have you received any vaccine in the last 14 days'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='covidPositive'
              label='Have you ever tested positive for covid-19?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='antiBodyTreatment'
              label='Have you received antibody therapy as a treatment for covid-19?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='weakenedImmuneSys'
              label='Do you have a weakened immune system?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='bloodDisorder'
              label='Do you have a bleeding disorder or are you taking a blood thinner?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='pregnant'
              label='Are you pregnant or breastfeeding?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SelectField
              checkboxes
              name='dermalFillers'
              label='Do you have dermal fillers?'
              options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            />
            <SubmitField value='Submit'/>
            <ErrorsField/>
          </Segment>
        </AutoForm>
      </Container>
    );
  }
}

export default VaccineFormComp;
