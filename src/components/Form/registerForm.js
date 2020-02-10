import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Mutation, ApolloConsumer } from 'react-apollo'
import { Container, Row, Col, Input, Form, Button } from "reactstrap";

import { REGISTER_USER_MUT } from '../../graphql/mutations';

function RegisterForm() {
  const usernameErrorText = () => (
    <div>
      username must be <strong>one word </strong>& at least 4 letters.
    </div>
  );

  const handleReg = async e => {
    e.preventDefault();
  };

  const handleChange = e => handleChangeInput(e, handleFormState);

  return (
    <Container className="animated fadeIn mb-5 pb-5">
      <Row className="d-flex justify-content-center py-3">
        <Col xs={10}>
          <Form onSubmit={handleReg} method="post" className="mt-4">
            <h6 className="mt-4 mb-3 sigmar-one">- OR -</h6>
            <h1 className="asdf sigmar-one mt-md-3 my-3 mb-md-4">Register</h1>
            <Input
              label="email"
              name="email"
              id="email-reg"
              type="email"
              placeholder="email here"
            />
            <Input
              label="password"
              name="password"
              id="password-reg"
              type="password"
              placeholder="password here"
            />
            <Button className="btn-mainclr">Join</Button>
            <p className="p-3 mt-1">
              Already Have an Acount?{" "}
              <Link
                className="sigmar-one orange-color-hover no-underline-hover"
                to="/login"
              >
                Login
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default RegisterForm;
