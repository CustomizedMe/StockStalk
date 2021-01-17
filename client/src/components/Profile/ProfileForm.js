import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Label,
  FormText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const ProfileForm = ({ createProfile }) => {
  const [formData, setFormData] = useState({
    company: "",
    designation: "",
    gender: "",
    picture: "",
    about: "",
    twitter: "",
    linkedin: "",
    facebook: "",
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    designation,
    gender,
    picture,
    about,
    twitter,
    linkedin,
    facebook,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);
  };
  return (
    <Fragment>
      <div className='centre'>
        <Container className='themed-container' fluid='lg'>
          <Card>
            <CardHeader>
              <h4 className='title' align='center '>
                Edit Profile
              </h4>
            </CardHeader>
            <CardBody>
              <Form onSubmit={(e) => onSubmit(e)}>
                <Row>
                  <Col className='pr-md-2' md='4'>
                    <FormGroup>
                      <Label>Username</Label>
                      <Input placeholder='Username' type='text' />
                    </FormGroup>
                  </Col>
                  <Col className='pl-md-2' md='5'>
                    <FormGroup>
                      <Label>Name</Label>
                      <Input placeholder='Name' type='text' />
                    </FormGroup>
                  </Col>
                  <Col className='pr-md' md='3'>
                    <FormGroup>
                      <Label for='Gender'>Gender</Label>
                      <Input
                        type='select'
                        name='gender'
                        value={gender}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to disclose</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className='pr-md-1' md='6'>
                    <FormGroup>
                      <Label>Company</Label>
                      <Input
                        placeholder='Company'
                        type='text'
                        name='company'
                        value={company}
                        onChange={(e) => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className='pl-md-1' md='6'>
                    <FormGroup>
                      <Label>Designation</Label>
                      <Input
                        placeholder='Designation'
                        type='text'
                        name='designation'
                        value={designation}
                        onChange={(e) => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md='12'>
                    <FormGroup>
                      <Label>About Me</Label>
                      <Input
                        cols='80'
                        placeholder='Add something about yourself'
                        rows='4'
                        required
                        name='about'
                        onChange={(e) => onChange(e)}
                        type='textarea'
                        value={about}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className='pr-md-1' md='8'>
                    <FormGroup>
                      <Label>Profile Image</Label>
                      <Input
                        type='text'
                        placeholder='Image URL for your profile'
                        name='picture'
                        value={picture}
                        onChange={(e) => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormText color='muted'>
                  Only this information will be visible to other people on
                  platform.
                </FormText>
                <div className='my-2' align='center'>
                  <Button
                    className='btn-simple'
                    color='primary'
                    onClick={() => toggleSocialInputs(!displaySocialInputs)}
                  >
                    Add Social Network Links
                  </Button>
                  <Badge color='default'>Optional</Badge>
                </div>
                {displaySocialInputs && (
                  <Fragment>
                    <FormGroup className='form-group social-input '>
                      <i className='fa fa-twitter fa-2x' />
                      <Input
                        type='text'
                        placeholder='Twitter URL'
                        name='twitter'
                        value={twitter}
                        onChange={(e) => onChange(e)}
                      />
                    </FormGroup>
                    <FormGroup className='form-group social-input'>
                      <i class='fa fa-facebook-f fa-2x'></i>
                      <Input
                        type='text'
                        placeholder='Facebook URL'
                        name='facebook'
                        value={facebook}
                        onChange={(e) => onChange(e)}
                      />
                    </FormGroup>
                    <FormGroup className='form-group social-input'>
                      <i class='fa fa-linkedin fa-2x'></i>
                      <Input
                        type='text'
                        placeholder='Linkedin URL'
                        name='linkedin'
                        value={linkedin}
                        onChange={(e) => onChange(e)}
                      />
                    </FormGroup>
                  </Fragment>
                )}
              </Form>
            </CardBody>
            <CardFooter>
              <Button
                className='btn-fill'
                size='large'
                color='primary'
                type='submit'
              >
                Save
              </Button>
            </CardFooter>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile })(ProfileForm);
