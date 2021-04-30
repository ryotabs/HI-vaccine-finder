import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';

class VaccineFormComp extends React.Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
      const { value } = this.state;
      return (
        <Form>
          <Calendar
            value={value}
          />
          <Form.Group inline>
            <label>Are you feeling sick today?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='Sick'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='Sick'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you received a vaccine does before?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='Vaccine'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='Vaccine'
            />
          </Form.Group>
          <Form.Group inline>
            <label>If yes, which one?</label>
            <Form.Field
              label='Pfizer'
              control='input'
              type='radio'
              name='VaccineType'
            />
            <Form.Field
              label='Moderna'
              control='input'
              type='radio'
              name='VaccineType'
            />
            <Form.Field
              label='N/A'
              control='input'
              type='radio'
              name='VaccineType'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever had an allergic reaction to any of the following?</label>
            <Form.Field
              label='Polyethylene glycol'
              control='input'
              type='checkbox'
              name='VaccineReact'
            />
            <Form.Field
              label='Polysorbate'
              control='input'
              type='checkbox'
              name='VaccineReact'
            />
            <Form.Field
              label='A previous vaccine dose'
              control='input'
              type='checkbox'
              name='VaccineReact'
            />
            <Form.Field
              label='A vaccine or injectable therapy containing multiple components'
              control='input'
              type='checkbox'
              name='VaccineReact'
            />
            <Form.Field
              label='N/A'
              control='input'
              type='checkbox'
              name='VaccineReact'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever had an allergic reaction to another vaccine (not for covid)?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='ReactVaccine'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='ReactVaccine'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you received any vaccine in the last 14 days?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='14Day'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='14Day'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever tested positive for covid-19 or has a doctor ever told you that you had covid-19?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='TestPos'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='TestPos'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever received antibody therapy as a treatment for covid-19?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='Anti'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='Anti'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Do you have a weakened immune system?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='Weak'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='Weak'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Do you have a bleeding disorder or are you taking a blood thinner?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='Bleed'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='Bleed'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Are you pregnant or breastfeeding?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='Preg'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='Preg'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Do you have dermal fillers?</label>
            <Form.Field
              label='Yes'
              control='input'
              type='radio'
              name='Dermal'
            />
            <Form.Field
              label='No'
              control='input'
              type='radio'
              name='Dermal'
            />
          </Form.Group>
          <Button type='submit' as={NavLink} activeClassName="active" exact to="/vaccine-info" key='admin'>Submit</Button>
        </Form>
      );
    }

}
export default VaccineFormComp;
