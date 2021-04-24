import React from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';

class VaccineFormComp extends React.Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
      const { value } = this.state;
      return (
        <Form>
          <Form.Group inline>
            <label>Are you feeling sick today?</label>
            <Form.Radio
              label='Yes'
              value='TrueS'
              checked={value === 'TrueS'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalseS'
              checked={value === 'FalseS'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you received a vaccine does before?</label>
            <Form.Radio
              label='Yes'
              value='TrueV'
              checked={value === 'TrueV'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalseV'
              checked={value === 'FalseV'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>If yes, which one?</label>
            <Form.Radio
              label='Pfizer'
              value='p'
              checked={value === 'p'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Moderna'
              value='mod'
              checked={value === 'mod'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='N/A'
              value='N/A'
              checked={value === 'N/A'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever had an allergic reaction to any of the following?</label>
            <Form.Radio
              label='Polyethylene glycol?'
              value='TrueP'
              checked={value === 'TrueP'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Polysorbate?'
              value='TrueSor'
              checked={value === 'TrueSor'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='A previous vaccine dose?'
              value='TrueVac'
              checked={value === 'TrueVac'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='A vaccine or injectable therapy containing multiple components?'
              value='TrueComp'
              checked={value === 'TrueComp'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever had an allergic reaction to another vaccine (not for covid)?</label>
            <Form.Radio
              label='Yes'
              value='TrueN'
              checked={value === 'TrueN'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalseN'
              checked={value === 'FalseN'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you received any vaccine in the last 14 days?</label>
            <Form.Radio
              label='Yes'
              value='True14'
              checked={value === 'True14'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='False14'
              checked={value === 'False14'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever tested positive for covid-19 or has a doctor ever told you that you had covid-19?</label>
            <Form.Radio
              label='Yes'
              value='TruePos'
              checked={value === 'TruePos'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalsePos'
              checked={value === 'FalsePos'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Have you ever received antibody therapy as a treatment for covid-19?</label>
            <Form.Radio
              label='Yes'
              value='TrueAn'
              checked={value === 'TrueAn'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalseAn'
              checked={value === 'FalseAn'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Do you have a weakened immune system?</label>
            <Form.Radio
              label='Yes'
              value='TrueW'
              checked={value === 'TrueW'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalseW'
              checked={value === 'FalseW'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Do you have a bleeding disorder or are you taking a blood thinner?</label>
            <Form.Radio
              label='Yes'
              value='TrueBlood'
              checked={value === 'TrueBlood'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalseBlood'
              checked={value === 'FalseBlood'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Are you pregnant or breastfeeding?</label>
            <Form.Radio
              label='Yes'
              value='TruePreg'
              checked={value === 'TruePreg'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalsePreg'
              checked={value === 'FalsePreg'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Do you have dermal fillers?</label>
            <Form.Radio
              label='Yes'
              value='TrueDerm'
              checked={value === 'TrueDerm'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='No'
              value='FalseDerm'
              checked={value === 'FalseDerm'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      );
    }

}
export default VaccineFormComp;
