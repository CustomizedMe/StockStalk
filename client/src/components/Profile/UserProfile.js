import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import CommentCard from "../layouts/CommentCard";
import Spinner from "../layouts/Spinner";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const UserProfile = ({
  getCurrentProfile,
  auth,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  const page = (
    <div className='content'>
      <div style={{ display: "flex", margin: "auto !important" }}>
        <Col md='3'>
          <Card className='card-user'>
            <CardBody>
              <CardText />
              <div className='author'>
                <div className='block block-one' />
                <div className='block block-two' />
                <div className='block block-three' />
                <div className='block block-four' />
                <a href='#pablo' onClick={(e) => e.preventDefault()}>
                  <img
                    alt='...'
                    className='avatar'
                    src={require("../../assets/img/james.jpg").default}
                  />
                  <div> </div>
                  <h4 className='title'>
                    Mike Andrew
                    <div>
                      <small className='text-muted'> @ Username</small>
                    </div>
                  </h4>
                </a>
                <div></div>
                <h4>
                  Ceo/Co-Founder |
                  <small className='text-muted'> Company </small>
                </h4>
              </div>
              <hr></hr>
              <div className='card-description'>
                Do not be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </div>
            </CardBody>
            <CardFooter>
              <div className='button-container'>
                <Button
                  className='btn-icon btn-round'
                  style={{ background: "#3b5998", backgroundImage: "#3b5998" }}
                >
                  <i class='fa fa-facebook-f'></i>
                </Button>
                <Button
                  className='btn-icon btn-round'
                  style={{ background: "#00aced", backgroundImage: "#3b5998" }}
                >
                  <i className='fa fa-twitter'></i>
                </Button>
                <Button
                  className='btn-icon btn-round'
                  style={{ background: "#007bb6", backgroundImage: "#3b5998" }}
                >
                  <i class='fa fa-linkedin'></i>
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div>
            <Button className='btn-default' color='primary' type='submit' block>
              Edit your profile
            </Button>
          </div>
        </Col>
        <Col md='9'>
          <div>
            <CommentCard />
          </div>
        </Col>
      </div>
    </div>
  );
  return loading && profile === null ? <Spinner /> : page;
};

UserProfile.protoTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(UserProfile);
