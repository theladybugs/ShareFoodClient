import React, { PureComponent } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
export default class SignIn extends PureComponent {
  state = {};
  handleChange = e => {
    console.log(e);
  };
  handleSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="Login">
        <h4>SignIn Form</h4>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl onChange={this.handleChange} />
          </FormGroup>
          <Button className="large" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
