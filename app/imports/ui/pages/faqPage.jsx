import React from 'react';
import { Accordion, Button, Container, Icon, Header, Grid, Popup, Input } from 'semantic-ui-react';

class faqPage extends React.Component {

    state = { activeIndex: null };

    handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;

      this.setState({ activeIndex: newIndex });
    };

    render() {
      const { activeIndex } = this.state;
      return (
        <Container style={{ padding: 20, margin: 20 }}>
          <Header as='h1' textAlign='center'>Frequently Asked Questions</Header>
          <Grid divided='vertically'>
            <Grid.Row columns={1} centered>
              <Input fluid icon='search' placeholder='Search FAQ...' />
            </Grid.Row>
            <Grid.Row columns={1}>
              <Accordion fluid styled>
                <Header style={{ padding: 5, margin: 5 }} as='h2' textAlign='left'>Forms</Header>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                                How long does it take to complete the form and schedule an appointment?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                                    Using our streamlined application process on average it takes our users 5-10 minutes
                      to complete all the forms, select a location, and schedule their appointment.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                                What information will I need to have ready for the forms?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>
                                    The require information and paperwork for the forms will be your medical records, driver license, and proof of vaccination eligibility.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                                Where do I go to start my forms?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                                    Go the the home page of the site and click the "Get Started" button to begin your form filling process.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Accordion fluid styled>
                <Header style={{ padding: 5, margin: 5 }} as='h2' textAlign='left'>Accounts</Header>
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                                Is an account required?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>
                                   Yes. In order to save your forms, paperwork, and appointments having an account
                      associated your information is necessary.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                                How do I make an account?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <p>
                                   Click the "Login" button with the user icon on the top right of the web page, and
                      then select "Sign Up" from the dropdown to register an account with the site.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 5}
                  index={5}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                                Can I delete my account after I have been vaccinated?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <p>
                                    Yes, you can delete your account at anytime when you no longer need to use our
                      services.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Accordion fluid styled>
                <Header style={{ padding: 5, margin: 5 }} as='h2' textAlign='left'>Safety</Header>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                          Will my account be kept secure?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <p>
                              Yes, HI vaccine finder is committed to your privacy ensuring that none of your data will
                       be shared with any third parties besides the vaccination clinics.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 7}
                  index={7}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                          Is HI vaccine finder legitimate?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                  <p>
                      Yes, HI vaccine finder is a website sponsored by the State of Hawaii to help citizens find
                      vaccinations at approved clinics.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 8}
                  index={8}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown'/>
                          Do vaccination clinics support this site?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 8}>
                  <p>
                             Yes we are verified by every clinic in the state ensuring that our filling process
                      is compatible with all locations.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
            <Grid.Row centered columns={1}>
              <Popup
                content='This will trigger a question submit form.'
                on='click'
                pinned
                trigger={
                  <Button
                    size='huge'
                    content='Still have questions?'
                    color='teal'
                  />
                }
              />
            </Grid.Row>
          </Grid>
        </Container>
      );
    }
}/**/

export default faqPage;
