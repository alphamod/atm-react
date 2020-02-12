import React, { Component } from "react";

export class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cardNumber: "",
        pinNumber: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onNumChange = this.onNumChange.bind(this);
    this.onPinChange = this.onPinChange.bind(this);
  }

  onNumChange(e) {
    this.setState({
      cardNumber: e.target.value
    });
  }
  onPinChange(e) {
    this.setState({
      pinNumber: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.cardNumber, this.state.pinNumber);
  }

  render() {
    return (
      <main className="card shadow-lg">
        <div className="card-body bg-info">
          <form onSubmit={this.onSubmit}>
            <div className="d-flex flex-column justify-content-center">
              <div>
                <label htmlFor="cardName">
                  <h4 className="mb-0 pb-0">Card Number:&nbsp;</h4>
                </label>
                <input
                  type="number"
                  name="cardName"
                  className="form-control"
                  placeholder="Enter the card Number here"
                  required
                  onChange={this.onNumChange}
                />
              </div>
              <div>
                <label htmlFor="pinNumber">
                  <h4 className="mb-0 pb-0">Pin:&nbsp;</h4>
                </label>
                <input
                  type="number"
                  name="pinNumber"
                  className="form-control"
                  placeholder="Enter the pin"
                  onChange={this.onPinChange}
                  required
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-warning mt-2"
              />
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default LoginComponent;
